import { Component, OnInit } from '@angular/core';
import { User, Product, Language } from './product';
import { ProductService } from './productservice';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [
        trigger('rowExpansionTrigger', [
            state('void', style({
                transform: 'translateX(-10%)',
                opacity: 0
            })),
            state('active', style({
                transform: 'translateX(0)',
                opacity: 1
            })),
            transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class AppComponent {
    products: Product[];
    stored: Product[];
    product: Product;
    users: Array<User> = [];
    userDynamic: any = {};
    submitted: boolean;
    productDialog: boolean;
    setLang = [{ name: 'Arabic', code: 'ar' }];
    selectedLanguage: Language;
    constructor(private productService: ProductService) {}
    ngOnInit() {
        this.productService.getProductsWithOrdersSmall().then(data =>{
            this.products = data; // [a,b,c,d,e]
            this.stored = data;
        });
        this.cleanPopup();   
    }
   
    addRow(rowNum: number) {
        this.cleanPopup();
        return true;
    }

    deleteRow(index) {
        if (this.users.length !== 1) {
            this.users.splice(index, 1);
            return true;
        }
    }
    editMainTable(p:Product){        
        this.productService.editProduct(p.id).then(data => {           
            //this.product = { ... this.product, id:data[0].data };
            this.product = {};
            this.product= {
                firstname: data[0].firstName,
                lastname: data[0].lastName,
                id: p.id
            }             
            this.users = [{ 
                firstname: data[0].localized[0].firstName,
                lastname: data[0].localized[0].lastName, 
                language: this.setLang, 
                  }]  ; 
            this.openNew(true);
            console.log(this.product);
            
        })
    }
    deleteMainTable(){

    }
    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }
    saveProduct() {
        this.submitted = true;
        if(!this.product.firstname || !this.product.lastname || !this.users[0].firstname || !this.users[0].lastname){
            return false;
        }
      
       this.product = {
        "id": this.product.id,
        "profilePicture": "https://images-na.ssl-images-amazon.com/images/G/01/digital/video/hero/Movies/2012_NewFallTitles/TheDictator_8926700-35693-001._V390128733_SX1080_.jpg",
        "placeOfBirth": "Iraq",
        "localized": {
          "en": {
            "firstName": this.product.firstname,
            "lastName": this.product.lastname,
            "fullName": this.product.firstname +  ' '+this.product.lastname
          },
          "ar": {
            "firstName": this.users[0].firstname,
            "lastName": this.users[0].lastname,
            "fullName": this.users[0].firstname + ' '+  this.users[0].lastname
          }
        }
      }
        
        this.productService.addProduct(this.product).then(data => {   
            if(!this.product.id){      
                //this.product = { ... this.product, id:data[0].data };
                this.product = { ... this.product, id:Math.random().toString() };
                this.products.push(this.product);
                this.products = this.productService.manupulateDate([...this.products]); 
            }  
            else {
                let manupulateArr = [];
                this.products = this.products.map(i => {                    
                    if(i.id === this.product.id){                        
                        manupulateArr.push(this.product);
                        i = this.productService.manupulateDate(manupulateArr)[0];
                    }
                    return i;
                });
            }
            this.submitted = false;
            this.productDialog = false;
            this.cleanPopup();
            this.product = {};           
        })
        
    }
    openNew(editable:boolean) {       
        if(!editable){
            this.product = {};
            if(this.users.length > 0){                
                this.cleanPopup();
            }
        }         
        this.submitted = false;
        this.productDialog = true;
    }    
       cleanPopup(){
        this.userDynamic = { firistname: "", lastname: "", language: this.setLang, selectedLanguage:this.setLang[0]  };
        this.users=[this.userDynamic];
       }
}
