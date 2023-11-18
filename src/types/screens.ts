export enum Screens {
    "landingPage" = "landingPage",
    "mainPage" = "mainPage",
    "signUp" = "signUp",
    "logIn" = "logIn",
    "forgotPassword" = "forgotPassword",
    "searchPage" = "searchPage",
    "shopingList" = "shopingList",
    "productDetail" = "productDetail",
    "userInformation" = "userInformation",
    "uploadProduct" = "uploadProduct"
}

export interface product {
    img: string,
    title: string,
    price: string,
    description: string
}