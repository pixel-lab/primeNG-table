import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AssetService } from './productservice';
import { Assets } from './asset';
import { PrimeIcons } from "primeng/api";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  tileContent: Object[];
  pieData: any;
  barChart: any;
  assetTable: Assets[];
  splitObject: any = {};
  tempObj: Object[] = [];
  counter: number = 0;
  events: object[];
  splitObjectKey: any = null;
  panelHeading:object= {};
  constructor(private assetLoad: AssetService) {    

    this.pieData = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };
    this.tileContent = [{
      header: "Successfully published",
      content: "test content",
      number: 50,
      type: 'successful',
      call: 'green',
      actions: [
        { name: "published in last 24 hours", code: "24hrs" }
      ]
    },
    {
      header: "Failed",
      content: "test content1",
      type: "failed",
      call: 'blue',
      actions: [
        { name: "Load", code: "load" }
      ]
    },
    {
      header: "Pending for the next week",
      content: "pending",
      type: "pending",
      call: 'yellow',
      actions: [
        { name: "Missing Images", code: "images" },
        { name: "Missing Metadata", code: "metadata" },
        { name: "Missing media file", code: "media-file" },
        { name: "Missing subtitles", code: "subtitles" }
      ]
    },
    {
      header: "Due today",
      content: "test content2",
      call: 'yellow',
      type: 'due',
      actions: [
        { name: "Missing Images", code: "images" },
        { name: "Missing Metadata", code: "metadata" },
        { name: "Missing media file", code: "media-file" },
        { name: "Missing subtitles", code: "subtitles" }
      ]
    }

    ];
    this.barChart = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }
    this.panelHeading  =  {title: this.tileContent[0]["header"] , action: this.tileContent[0]["actions"][0]["code"] };
  }

  ngOnInit(): void {
    this.assetLoad.getProductsSmall().then(data => this.assetTable = data);
  }

  displayCounter(count) {
    console.log(count);
    this.panelHeading  =  {title: count.title , action: count.action};
    this.assetLoad.getReload().then(data => this.assetTable = data);
  }
  TimelineShow(arg){
    console.log(arg);    
    this.events = [
      {
        status: "Ordered",
        date: "15/10/2020 10:30",
        icon: PrimeIcons.SHOPPING_CART,
        color: "#9C27B0",
        image: "game-controller.jpg"
      },
      {
        status: "Ordered",
        date: "15/10/2020 10:30",
        icon: PrimeIcons.SHOPPING_CART,
        color: "#9C27B0",
        image: "game-controller.jpg"
      },
      {
        status: "Processing",
        date: "15/10/2020 14:00",
        icon: PrimeIcons.COG,
        color: "#673AB7"
      },
      
      {
        status: "Shipped",
        date: "15/10/2020 16:15",
        icon: PrimeIcons.ENVELOPE,
        color: "#FF9800"
      },
      {
        status: "Delivered",
        date: "16/10/2020 10:00",
        icon: PrimeIcons.CHECK,
        color: "#607D8B"
      },
      {
        status: "Ordered",
        date: "15/10/2020 10:30",
        icon: PrimeIcons.SHOPPING_CART,
        color: "#9C27B0",
        image: "game-controller.jpg"
      },
      {
        status: "Processing",
        date: "15/10/2020 14:00",
        icon: PrimeIcons.COG,
        color: "#673AB7"
      },
      {
        status: "Shipped",
        date: "15/10/2020 16:15",
        icon: PrimeIcons.ENVELOPE,
        color: "#FF9800"
      },
      {
        status: "Delivered",
        date: "16/10/2020 10:00",
        icon: PrimeIcons.CHECK,
        color: "#607D8B"
      },
      {
        status: "Processing",
        date: "15/10/2020 14:00",
        icon: PrimeIcons.COG,
        color: "#673AB7"
      },
      {
        status: "Shipped",
        date: "15/10/2020 16:15",
        icon: PrimeIcons.ENVELOPE,
        color: "#FF9800"
      },
      {
        status: "Delivered",
        date: "16/10/2020 10:00",
        icon: PrimeIcons.CHECK,
        color: "#607D8B"
      },
      {
        status: "Delivered",
        date: "16/10/2020 10:00",
        icon: PrimeIcons.CHECK,
        color: "#607D8B"
      }
    ];

    let i,j,temparray,chunk = 6;
      for (i=0,j=this.events.length; i<j; i+=chunk) {        
        this.splitObject[this.counter] = this.events.slice(i,i+chunk);
        this.counter++;
      }
    this.splitObjectKey = Object.keys(this.splitObject);
  }
}
