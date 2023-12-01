export class paymentMenu extends HTMLElement {
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
            link.setAttribute("href", "../src/components/paymentPage/paymentMenu/paymentMenu.css")
            this.shadowRoot.appendChild(link);

            const mainContainer = this.ownerDocument.createElement("div");
            mainContainer.setAttribute("id", "paymentMenuContainer");
            this.shadowRoot.appendChild(mainContainer);

            const menuTitle = this.ownerDocument.createElement("h1")
            menuTitle.innerText = "Payment"
            mainContainer.appendChild(menuTitle)

            const selectTitle = this.ownerDocument.createElement("h2")
            selectTitle.innerText = "Select payment method"
            mainContainer.appendChild(selectTitle)

            const paymentTypeSelector = this.ownerDocument.createElement("select")
            mainContainer.appendChild(paymentTypeSelector)

            for (let i = 0; i < 3; i++) {
                const option = this.ownerDocument.createElement("option")
                option.innerText = `Opcion ${i}`
                paymentTypeSelector.appendChild(option)
            }

            const paymentInfoText = this.ownerDocument.createElement("p")
            paymentInfoText.innerText = "You are going to pay $87.823 with your visa card that ends with 2345"
            mainContainer.appendChild(paymentInfoText)

            const buttonAccept = this.ownerDocument.createElement("button")
            buttonAccept.innerText = "Accept"
            mainContainer.appendChild(buttonAccept)
        }
    }
}

customElements.define("payment-menu", paymentMenu)