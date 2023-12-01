import "../../components/export"
import { dataGeneral } from "../../../data"
import { state } from "../../store"
import { traerDatabaseProducts } from "../../firebase/firebase"
import { databaseProducts } from "../../utilities/databaseProducts"

export class SearchPage extends HTMLElement {
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
            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/pages/searchPage/searchPage.css")
            this.shadowRoot.appendChild(link)

            const mainContainer = this.ownerDocument.createElement("section")
            mainContainer.setAttribute("id", "searchPage")
            this.shadowRoot.appendChild(mainContainer)

            const navBar = this.ownerDocument.createElement("navbar-red")
            mainContainer.appendChild(navBar)

            const mainSearchContainer = this.ownerDocument.createElement("div")
            mainSearchContainer.setAttribute("id", "mainSearchContainer")
            mainContainer.appendChild(mainSearchContainer)

            const optionsContainer = this.ownerDocument.createElement("div")
            optionsContainer.setAttribute("id", "optionsContainer")
            mainSearchContainer.appendChild(optionsContainer)

            const resultsContainer = this.ownerDocument.createElement("div")
            resultsContainer.setAttribute("id", "resultsContainer")
            mainSearchContainer.appendChild(resultsContainer)

            const optionsTitle = this.ownerDocument.createElement("h2")
            optionsTitle.innerHTML = `Results for "${state.searchText}"...`
            optionsContainer.appendChild(optionsTitle)

            const optionsInformation = this.ownerDocument.createElement("options-information")
            optionsContainer.appendChild(optionsInformation)

            databaseProducts.forEach((product) => {
                if (product.name.toLowerCase().includes(state.searchText!.toLocaleLowerCase())) {
                    const productResultCard = this.ownerDocument.createElement("search_results-card")
                    productResultCard.setAttribute("img", `${product.imageURL}`)
                    productResultCard.setAttribute("title", `${product.name}`)
                    productResultCard.setAttribute("price", `${product.price}`)
                    productResultCard.setAttribute("desc", `${product.description}`)
                    productResultCard.setAttribute("product_firebase_id", product.productFirebaseID)
                    resultsContainer.appendChild(productResultCard)
                }
            })
        }

    }

}

customElements.define("search-page", SearchPage)