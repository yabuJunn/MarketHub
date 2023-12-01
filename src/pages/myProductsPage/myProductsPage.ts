import { DocumentData } from "firebase/firestore"
import "../../components/export"
import { traerDatabaseProducts } from "../../firebase/firebase"
import { state } from "../../store"
import { databaseProduct } from "../../types/databaseProductsType"
import { databaseProducts, pedirProducts, reiniciarDatabaseProducts } from "../../utilities/databaseProducts"
import { Timestamp } from "firebase/firestore"

export class myProductsPage extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    async connectedCallback() {
        await traerDatabaseProducts()
        await this.render()
    }

    async render() {
        if (this.shadowRoot) {
            const userProductsList: Array<databaseProduct | DocumentData> = []
            console.log("dataBase ForEach")
            databaseProducts.forEach((product) => {
                if (product.userFirebaseID === state.logedUserData.firebaseID) {
                    console.log("Es mio")
                    userProductsList.push(product)
                } else {
                    console.log("No es mio")
                }
            });

            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/pages/myProductsPage/myProductsPage.css")
            this.shadowRoot.appendChild(link);

            const mainContainer = this.ownerDocument.createElement("section");
            mainContainer.setAttribute("id", "myProductsPage");
            this.shadowRoot.appendChild(mainContainer);

            const navBarWhite = this.ownerDocument.createElement('navbar-white');
            mainContainer.appendChild(navBarWhite)

            const pageTitleContainer = this.ownerDocument.createElement("div")
            pageTitleContainer.setAttribute("id", "pageTitleContainer")
            mainContainer.appendChild(pageTitleContainer)

            const pageTitleText = this.ownerDocument.createElement("h1")
            pageTitleText.innerText = "Your products"
            pageTitleContainer.appendChild(pageTitleText)

            const pageDescription = this.ownerDocument.createElement("p")
            pageDescription.innerText = "These are the products that you currently are selling. From this pages you can manage them."
            pageTitleContainer.appendChild(pageDescription)

            const cardsAndInfoContainer = this.ownerDocument.createElement("div")
            cardsAndInfoContainer.setAttribute("id", "cardsAndInfoContainer")
            mainContainer.appendChild(cardsAndInfoContainer)

            const myProductsCardsContainer = this.ownerDocument.createElement("div")
            myProductsCardsContainer.setAttribute("id", "myProductsCardsContainer")
            cardsAndInfoContainer.appendChild(myProductsCardsContainer)

            userProductsList.forEach((product) => {
                const myProductCard = this.ownerDocument.createElement("my_product-card")
                myProductCard.setAttribute("title", product.name)
                myProductCard.setAttribute("desc", product.description)
                myProductCard.setAttribute("price", product.price)
                const timestamp = new Timestamp(product.uploadDate.seconds, product.uploadDate.nanoseconds)
                const timestampDate = timestamp.toDate()
                myProductCard.setAttribute("date", `${timestampDate}`)
                myProductCard.setAttribute("image", product.imageURL)
                myProductsCardsContainer.appendChild(myProductCard)
            })

            const moreInfoContainer = this.ownerDocument.createElement("div")
            moreInfoContainer.setAttribute("id", "moreInfoContainer")
            cardsAndInfoContainer.appendChild(moreInfoContainer)

            const myProductsTotalProducts = this.ownerDocument.createElement("my_products-total_products")
            moreInfoContainer.appendChild(myProductsTotalProducts)

            const myProductsSearch = this.ownerDocument.createElement("my_products-search")
            moreInfoContainer.appendChild(myProductsSearch)
        }
    }
}

customElements.define("my_products-page", myProductsPage)