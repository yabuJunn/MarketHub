const enum myProductCardProperties {
    title = "title",
    desc = "desc",
    price = "price",
    date = "date",
    image = "image"
}

export class myProductCard extends HTMLElement {
    properties: Record<myProductCardProperties, string> = {
        title: "",
        desc: "",
        price: "",
        date: "",
        image: ""
    }

    static get observedAttributes() {
        const properties: Record<myProductCardProperties, null> = {
            title: null,
            desc: null,
            price: null,
            date: null,
            image: null
        }
        return Object.keys(properties);
    }

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    attributeChangedCallback(propName: myProductCardProperties, oldValue: string, newValue: string) {
        switch (propName) {
            case myProductCardProperties.title:
                this.properties.title = newValue
                break;
            case myProductCardProperties.desc:
                this.properties.desc = newValue
                break;
            case myProductCardProperties.price:
                this.properties.price = newValue
                break;
            case myProductCardProperties.date:
                this.properties.date = newValue
                break;
            case myProductCardProperties.image:
                this.properties.image = newValue
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
            link.setAttribute("href", "/src/components/myProductsPage/myProductCard/myProductCard.css")
            this.shadowRoot?.appendChild(link)

            const myProductCardContainer = this.ownerDocument.createElement("div")
            myProductCardContainer.classList.add("myProductCardContainer")
            this.shadowRoot.appendChild(myProductCardContainer)

            const productImage = this.ownerDocument.createElement("div")
            productImage.classList.add("productImage")
            productImage.style.backgroundImage = `url(${this.properties.image})`
            myProductCardContainer.appendChild(productImage)

            const productInfoContainer = this.ownerDocument.createElement("div")
            productInfoContainer.classList.add("productInfoContainer")
            myProductCardContainer.appendChild(productInfoContainer)

            const productTitle = this.ownerDocument.createElement("h2")
            productTitle.innerText = this.properties.title
            productInfoContainer.appendChild(productTitle)

            const productDesc = this.ownerDocument.createElement("p")
            productDesc.innerText = this.properties.desc
            productInfoContainer.appendChild(productDesc)

            const priceAndInfoContainer = this.ownerDocument.createElement("div")
            priceAndInfoContainer.classList.add("priceAndInfoContainer")
            productInfoContainer.appendChild(priceAndInfoContainer)

            const priceContainer = this.ownerDocument.createElement("div")
            priceContainer.classList.add("priceContainer")
            priceAndInfoContainer.appendChild(priceContainer)

            const priceTitle = this.ownerDocument.createElement("h3")
            priceTitle.innerText = "Price"
            priceContainer.appendChild(priceTitle)
            
            const priceDesc = this.ownerDocument.createElement("p")
            priceDesc.innerText = this.properties.price
            priceContainer.appendChild(priceDesc)

            const dateContainer = this.ownerDocument.createElement("div")
            dateContainer.classList.add("priceContainer")
            priceAndInfoContainer.appendChild(dateContainer)

            const dateTitle = this.ownerDocument.createElement("h3")
            dateTitle.innerText = "Published on"
            dateContainer.appendChild(dateTitle)

            const dateDesc = this.ownerDocument.createElement("p")
            dateDesc.innerText = this.properties.date
            dateContainer.appendChild(dateDesc)

            const buttonContainer = this.ownerDocument.createElement("div")
            buttonContainer.classList.add("buttonContainer")
            productInfoContainer.appendChild(buttonContainer)

            const deleteButton = this.ownerDocument.createElement("p")
            deleteButton.innerText = "Delete"
            buttonContainer.appendChild(deleteButton)

            const viewButton = this.ownerDocument.createElement("p")
            viewButton.innerText = "View"
            buttonContainer.appendChild(viewButton)
        }

    }
}

customElements.define("my_product-card", myProductCard)