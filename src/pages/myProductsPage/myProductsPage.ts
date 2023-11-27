import "../../components/export"

export class myProductsPage extends HTMLElement {
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

            const pruebaMyProductCard = this.ownerDocument.createElement("my_product-card")
            myProductsCardsContainer.appendChild(pruebaMyProductCard)

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