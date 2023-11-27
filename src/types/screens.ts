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
    "uploadProduct" = "uploadProduct",
    "shoopingList" = "shoopingList",
    "paymentPage" = "paymentPage",
    "myProductsPage" = "myProductsPage"
}

export interface product {
    img: string,
    title: string,
    price: string,
    description: string
}
