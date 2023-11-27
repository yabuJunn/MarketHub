import { dispatch } from "../../../store"
import { changeScreen } from "../../../store/actions"
import { Screens } from "../../../types/screens"
import "../../export"

export class purchaseSummaryCartList extends HTMLElement {
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
            link.setAttribute("href", "/src/components/shoopingListPage/purchaseSummary/purchaseSummary.css")
            this.shadowRoot?.appendChild(link)

            const mainContainer = this.ownerDocument.createElement("div")
            mainContainer.setAttribute("id", "mainContainer")
            this.shadowRoot.appendChild(mainContainer)

            const summaryTitle = this.ownerDocument.createElement("h2")
            summaryTitle.innerText = "Summary of purchase"
            mainContainer.appendChild(summaryTitle)

            //Products
            const containerProducts = this.ownerDocument.createElement("div")
            containerProducts.classList.add("infoContainer")
            mainContainer.appendChild(containerProducts)

            const productsTitle = this.ownerDocument.createElement("h3")
            productsTitle.innerText = "Products"
            containerProducts.appendChild(productsTitle)

            const productsPrice = this.ownerDocument.createElement("p")
            productsPrice.innerText = "$76.923"
            containerProducts.appendChild(productsPrice)

            //Shipment
            const containerShipment = this.ownerDocument.createElement("div")
            containerShipment.classList.add("infoContainer")
            mainContainer.appendChild(containerShipment)

            const shipmentTitle = this.ownerDocument.createElement("h3")
            shipmentTitle.innerText = "Shipment"
            containerShipment.appendChild(shipmentTitle)

            const shipmentPrice = this.ownerDocument.createElement("p")
            shipmentPrice.innerText = "$10.900"
            containerShipment.appendChild(shipmentPrice)

            //Total Price
            const containerTotal = this.ownerDocument.createElement("div")
            containerTotal.classList.add("infoContainerTotal")
            mainContainer.appendChild(containerTotal)

            const totalTitle = this.ownerDocument.createElement("h3")
            totalTitle.innerText = "Total"
            containerTotal.appendChild(totalTitle)

            const totalPrice = this.ownerDocument.createElement("p")
            totalPrice.innerText = "$87.823"
            containerTotal.appendChild(totalPrice)

            const purchaseButton = this.ownerDocument.createElement("button")
            purchaseButton.innerText = "PURCHASE"
            mainContainer.appendChild(purchaseButton)
            purchaseButton.addEventListener("click", () => {
                dispatch(
                    changeScreen(Screens.paymentPage)
                )
            })
        }

    }
}

customElements.define("purchase_summary-cart_list", purchaseSummaryCartList)