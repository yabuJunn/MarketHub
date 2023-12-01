import "../../components/export"

export class paymentPage extends HTMLElement {
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
            link.setAttribute("href", "/src/pages/paymentPage/paymentPage.css")
            this.shadowRoot.appendChild(link);

            const mainContainer = this.ownerDocument.createElement("section");
            mainContainer.setAttribute("id", "paymentPage");
            this.shadowRoot.appendChild(mainContainer);

            const navBarWhite = this.ownerDocument.createElement('navbar-white');
            mainContainer.appendChild(navBarWhite)

            const summaryPaymentContainer = this.ownerDocument.createElement("div")
            summaryPaymentContainer.setAttribute("id", "summaryPaymentContainer")
            mainContainer.appendChild(summaryPaymentContainer)

            const summaryPaymentComponent = this.ownerDocument.createElement("payment_summary-payment_page")
            summaryPaymentContainer.appendChild(summaryPaymentComponent)

            const paymentMenuContainer = this.ownerDocument.createElement("div")
            paymentMenuContainer.setAttribute("id", "paymentMenuContainer")
            mainContainer.appendChild(paymentMenuContainer)

            const paymentMenu = this.ownerDocument.createElement("payment-menu")
            paymentMenuContainer.appendChild(paymentMenu)
        }
    }
}

customElements.define("payment-page", paymentPage)