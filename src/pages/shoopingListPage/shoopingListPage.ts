import "../../components/export"

export class shoopingListPage extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "../src/pages/shoopingListPage/shoopingListPage.css")
            this.shadowRoot.appendChild(link);

            const mainContainer = this.ownerDocument.createElement("section");
            mainContainer.setAttribute("id", "shoopingListPage");
            this.shadowRoot.appendChild(mainContainer);

            const navBarRed = this.ownerDocument.createElement('navbar-red');
            mainContainer.appendChild(navBarRed)

            const cartCardsContainer = this.ownerDocument.createElement("div")
            cartCardsContainer.setAttribute("id", "cartCardsContainer")
            mainContainer.appendChild(cartCardsContainer)

            const cardsTitleDiv = this.ownerDocument.createElement("div")
            cardsTitleDiv.setAttribute("id", "cardsTitleDiv")
            cartCardsContainer.appendChild(cardsTitleDiv)

            const pruebaCard1 = this.ownerDocument.createElement("shoopin_list-card")
            cartCardsContainer.appendChild(pruebaCard1)
            
            const pruebaCard2 = this.ownerDocument.createElement("shoopin_list-card")
            cartCardsContainer.appendChild(pruebaCard2)

            const pruebaCard3 = this.ownerDocument.createElement("shoopin_list-card")
            cartCardsContainer.appendChild(pruebaCard3)

            const pruebaCard4 = this.ownerDocument.createElement("shoopin_list-card")
            cartCardsContainer.appendChild(pruebaCard4)

            const pruebaCard5 = this.ownerDocument.createElement("shoopin_list-card")
            cartCardsContainer.appendChild(pruebaCard5)

            const pruebaCard6 = this.ownerDocument.createElement("shoopin_list-card")
            cartCardsContainer.appendChild(pruebaCard6)

            const cardsTitleH1 = this.ownerDocument.createElement("h1")
            cardsTitleH1.innerText = "Shopping List"
            cardsTitleDiv.appendChild(cardsTitleH1)

            const purchaseSummary = this.ownerDocument.createElement("div")
            purchaseSummary.setAttribute("id", "purchaseSummary")
            mainContainer.appendChild(purchaseSummary)

            const purchaseSummaryComponent = this.ownerDocument.createElement("purchase_summary-cart_list")
            purchaseSummary.appendChild(purchaseSummaryComponent)
        }
    }
}

customElements.define("shooping_list-page", shoopingListPage)