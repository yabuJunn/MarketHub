const enum myProductsTotalProperties {
    total = "total"
}

export class myProductsTotalProducts extends HTMLElement {
    properties: Record<myProductsTotalProperties, string> = {
        total: ""
    }

    static get observedAttributes() {
        const properties: Record<myProductsTotalProperties, null> = {
            total: null
        }
        return Object.keys(properties);
    }

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    attributeChangedCallback(propName: myProductsTotalProperties, oldValue: string, newValue: string) {
        switch (propName) {
            case myProductsTotalProperties.total:
                this.properties.total = newValue
                break;
            default:
                break;
        }
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

            //Total Count
            const containerTotal = this.ownerDocument.createElement("div")
            containerTotal.classList.add("infoContainerTotal")
            mainContainer.appendChild(containerTotal)

            const totalTitle = this.ownerDocument.createElement("h3")
            totalTitle.innerText = "Total"
            containerTotal.appendChild(totalTitle)

            const totalCount = this.ownerDocument.createElement("p")
            totalCount.innerText = this.properties.total
            containerTotal.appendChild(totalCount)
        }
    }
}

customElements.define("my_products-total_products", myProductsTotalProducts)