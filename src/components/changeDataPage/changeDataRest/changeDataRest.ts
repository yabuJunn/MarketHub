import { state } from "../../../store"
import "../../export"

export class changeDataRest extends HTMLElement {
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
            link.setAttribute("href", "/src/components/changeDataPage/changeDataRest/changeDataRest.css")
            this.shadowRoot.appendChild(link);

            const mainContainer = this.ownerDocument.createElement("div")
            mainContainer.setAttribute("id", "changeDataRest")
            this.shadowRoot.appendChild(mainContainer)

            //Email section
            const emailContainer = this.ownerDocument.createElement("div")
            emailContainer.classList.add("dataContainer")
            mainContainer.appendChild(emailContainer)

            const emailTitle = this.ownerDocument.createElement("h2")
            emailTitle.innerText = "Email"
            emailContainer.appendChild(emailTitle)

            const emailValue = this.ownerDocument.createElement("input")
            emailValue.value = `${state.logedUserData.email}`
            emailContainer.appendChild(emailValue)

            //Line Email
            const emailLine = this.ownerDocument.createElement("hr")
            emailLine.classList.add("separationLine")
            mainContainer.appendChild(emailLine)

            //Phone Section
            const phoneContainer = this.ownerDocument.createElement("div")
            phoneContainer.classList.add("dataContainer")
            mainContainer.appendChild(phoneContainer)

            const phoneTitle = this.ownerDocument.createElement("h2")
            phoneTitle.innerText = "Phone"
            phoneContainer.appendChild(phoneTitle)

            const phoneValue = this.ownerDocument.createElement("input")
            phoneValue.value = `${state.logedUserData.cellphone}`
            phoneContainer.appendChild(phoneValue)

            //Line Phone
            const phoneLine = this.ownerDocument.createElement("hr")
            phoneLine.classList.add("separationLine")
            mainContainer.appendChild(phoneLine)

            //ID Section
            const idContainer = this.ownerDocument.createElement("div")
            idContainer.classList.add("dataContainer")
            mainContainer.appendChild(idContainer)

            const idTitle = this.ownerDocument.createElement("h2")
            idTitle.innerText = "Identification Document"
            idContainer.appendChild(idTitle)

            const idValue = this.ownerDocument.createElement("input")
            idValue.value = `${state.logedUserData.identificationDocument}`
            idContainer.appendChild(idValue)
        }
    }
}

customElements.define("change_data-rest", changeDataRest)