import { state, addObserver } from "./store/index"
import { Screens } from "./types/screens"
import "./components/export"
import "./utilities/generateRandomID"

class AppContainer extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot != null || this.shadowRoot != undefined) {
            this.shadowRoot.innerHTML = ""
            document.body.classList.remove("landingPage")

            const sideMenu = this.ownerDocument.createElement("side-menu")
            this.shadowRoot.appendChild(sideMenu)

            switch (state.screen) {
                case Screens.landingPage:
                    const landingPage = this.ownerDocument.createElement("landing-page")
                    this.shadowRoot.appendChild(landingPage)
                    document.body.classList.add("landingPage")
                    break;
                case Screens.signUp:
                    const signUpPage = this.ownerDocument.createElement("sign-up")
                    this.shadowRoot.appendChild(signUpPage)
                    break;
                case Screens.mainPage:
                    const mainPage = this.ownerDocument.createElement("main-page")
                    this.shadowRoot.appendChild(mainPage)
                    break;
                case Screens.logIn:
                    const logInPage = this.ownerDocument.createElement("login-page")
                    this.shadowRoot.appendChild(logInPage)
                    break;
                case Screens.forgotPassword:
                    const forgotPasswordPage = this.ownerDocument.createElement("forgotpassword-page")
                    this.shadowRoot.appendChild(forgotPasswordPage)
                    break;
                case Screens.searchPage:
                    const searchPage = this.ownerDocument.createElement("search-page")
                    this.shadowRoot.appendChild(searchPage)
                    break;
                case Screens.shopingList:
                    const shopingList = this.ownerDocument.createElement("shoping-list")
                    this.shadowRoot.appendChild(shopingList)
                    break;
                case Screens.productDetail:
                    const productDetail = this.ownerDocument.createElement("product-detail")
                    this.shadowRoot.appendChild(productDetail)
                    break
                case Screens.userInformation:
                    const userInformation = this.ownerDocument.createElement("userinformationpage-page")
                    this.shadowRoot.appendChild(userInformation)
                    break
                case Screens.uploadProduct:
                    const uploadProduct = this.ownerDocument.createElement("uploadproduct-page")
                    this.shadowRoot.appendChild(uploadProduct)
                    break
                case Screens.shoopingList:
                    const shoopingListPage = this.ownerDocument.createElement("shooping_list-page")
                    this.shadowRoot.appendChild(shoopingListPage)
                    break
                case Screens.paymentPage:
                    const paymentPage = this.ownerDocument.createElement("payment-page")
                    this.shadowRoot.appendChild(paymentPage)
                    break
                case Screens.myProductsPage:
                    const myProductsPage = this.ownerDocument.createElement("my_products-page")
                    this.shadowRoot.appendChild(myProductsPage)
                case Screens.changeDataPage:
                    const changeDataPage = this.ownerDocument.createElement("change_data-page")
                    this.shadowRoot.appendChild(changeDataPage)
                default:
                    break;
            }
        }

    }
}

customElements.define("app-container", AppContainer)
