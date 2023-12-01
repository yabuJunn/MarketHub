import "../../export"
import { dataGeneral } from "../../../../data"
import { databaseProducts } from "../../../utilities/databaseProducts"

export class RecommendedSection extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const link = this.ownerDocument.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("href", "../src/components/mainPage/recommendedSection/recommendedSection.css")
        //Creation of father
        const recommendedContainer = this.ownerDocument.createElement("section")
        recommendedContainer.setAttribute("id", "recommendedContainer")
        //Creation of childs
        const title = this.ownerDocument.createElement("h2")
        title.innerHTML = "Recommended for you"
        const recommendedCardsContainer = this.ownerDocument.createElement("div")
        recommendedCardsContainer.classList.add("recommendedCardsContainer")
        //Append childs of recommendedContainer
        recommendedContainer.appendChild(title)
        recommendedContainer.appendChild(recommendedCardsContainer)
        databaseProducts.forEach((product) => {
            const card = this.ownerDocument.createElement("recommended_section-card")
            card.setAttribute("img", `${product.imageURL}`)
            card.setAttribute("title", `${product.name}`)
            card.setAttribute("price", `${product.price}`)
            card.setAttribute("description", `${product.description}`)
            card.setAttribute("product_firebase_id", product.productFirebaseID) 
            recommendedCardsContainer.appendChild(card)
        })
        //Append childs of this.shadowRoot
        this.shadowRoot?.appendChild(link)
        this.shadowRoot?.appendChild(recommendedContainer)
    }
}

customElements.define("recommended-section", RecommendedSection)