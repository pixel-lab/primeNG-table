export interface Product {
    data?: any;
    id?:string;
    lastname?:string;
    fullName?:string;
    profilePicture?:string;
    firstname?:string;
    placeOfBirth?:string;    
    localized?:Object;
    
}

export interface User {
    id?:string;
    firstname?:string;
    lastname?:string;
    language?:Language[];
    selectedLanguage?: Language;
}

export interface Language {
    name: string,
    code: string
}