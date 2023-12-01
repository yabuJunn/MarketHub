const enum shoopinListCardProperties {
    title = "title",
    count = "count",
    price = "price"
}

export class shoopinListCard extends HTMLElement {
    properties: Record<shoopinListCardProperties, string> = {
        title: "",
        count: "",
        price: ""
    }

    static get observedAttributes() {
        const properties: Record<shoopinListCardProperties, null> = {
            title: null,
            count: null,
            price: null
        }
        return Object.keys(properties);
    }

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    attributeChangedCallback(propName: shoopinListCardProperties, oldValue: string, newValue: string) {
        switch (propName) {
            case shoopinListCardProperties.title:
                this.properties.title = newValue
                break;
            case shoopinListCardProperties.price:
                this.properties.count = newValue
                break;
            case shoopinListCardProperties.count:
                this.properties.count = newValue
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
            link.setAttribute("href", "../src/components/shoopingListPage/shoopinListCard/shoopinListCard.css")
            this.shadowRoot?.appendChild(link)

            const cardContainer = this.ownerDocument.createElement("div")
            cardContainer.classList.add("shoopinListCard_Container")
            this.shadowRoot.appendChild(cardContainer)

            const cardImage = this.ownerDocument.createElement("div")
            cardImage.classList.add("cardImage")
            cardImage.style.backgroundImage = "url(../src/resources/jpg/platesRecommended.jpg)"
            cardContainer.appendChild(cardImage)

            const infoContainer = this.ownerDocument.createElement("div")
            infoContainer.classList.add("infoContainer")
            cardContainer.appendChild(infoContainer)

            const infoTitle = this.ownerDocument.createElement("h2")
            infoTitle.innerText = "Cookie dough chocolate chips corona 250g"
            infoContainer.appendChild(infoTitle)

            const countTitle = this.ownerDocument.createElement("p")
            countTitle.innerText = "Count 1"
            infoContainer.appendChild(countTitle)

            const priceTitle = this.ownerDocument.createElement("p")
            priceTitle.innerText = "COP $23.500"
            infoContainer.appendChild(priceTitle)

            const buttonsContainer = this.ownerDocument.createElement("div")
            buttonsContainer.classList.add("buttonsContainer")
            infoContainer.appendChild(buttonsContainer)

            const deleteButton = this.ownerDocument.createElement("p")
            deleteButton.innerText = "Delete"
            buttonsContainer.appendChild(deleteButton)

            const purchaseButton = this.ownerDocument.createElement("p")
            purchaseButton.innerText = "Purchase now"
            buttonsContainer.appendChild(purchaseButton)

            const addMoreButton = this.ownerDocument.createElement("p")
            addMoreButton.innerText = "Add more"
            buttonsContainer.appendChild(addMoreButton)
        }

    }
}

customElements.define("shoopin_list-card", shoopinListCard)