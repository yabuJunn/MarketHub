export class myProductsTotalProducts extends HTMLElement {
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
            link.setAttribute("href", "/src/components/myProductsPage/myProductsTotalProducts/myProductsTotalProducts.css")
            this.shadowRoot.appendChild(link);

            const mainContainer = this.ownerDocument.createElement("div");
            mainContainer.setAttribute("id", "myProductsTotalProductsContainer");
            this.shadowRoot.appendChild(mainContainer);

            const totalProductsTitle = this.ownerDocument.createElement("h2")
            totalProductsTitle.innerText = "Total of products"
            mainContainer.appendChild(totalProductsTitle)

            //Products
            const containerProducts = this.ownerDocument.createElement("div")
            containerProducts.classList.add("infoContainer")
            mainContainer.appendChild(containerProducts)

            const productsTitle = this.ownerDocument.createElement("h3")
            productsTitle.innerText = "Products"
            containerProducts.appendChild(productsTitle)

            const productsCount = this.ownerDocument.createElement("p")
            productsCount.innerText = "10"
            containerProducts.appendChild(productsCount)

            //On Process
            const containerOnProcess = this.ownerDocument.createElement("div")
            containerOnProcess.classList.add("infoContainer")
            mainContainer.appendChild(containerOnProcess)

            const OnProcessTitle = this.ownerDocument.createElement("h3")
            OnProcessTitle.innerText = "On Process"
            containerOnProcess.appendChild(OnProcessTitle)

            const OnProcessPrice = this.ownerDocument.createElement("p")
            OnProcessPrice.innerText = "5"
            containerOnProcess.appendChild(OnProcessPrice)

            //Total Count
            const containerTotal = this.ownerDocument.createElement("div")
            containerTotal.classList.add("infoContainerTotal")
            mainContainer.appendChild(containerTotal)

            const totalTitle = this.ownerDocument.createElement("h3")
            totalTitle.innerText = "Total"
            containerTotal.appendChild(totalTitle)

            const totalCount = this.ownerDocument.createElement("p")
            totalCount.innerText = "15"
            containerTotal.appendChild(totalCount)
        }
    }
}

customElements.define("my_products-total_products", myProductsTotalProducts)