import { state } from "../../../store"
import "../../export"

export class userInfoRest extends HTMLElement {
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
            link.setAttribute("href", "/src/components/userInformationPage/userInfoRest/userInfoRest.css")
            this.shadowRoot.appendChild(link);

            const mainContainer = this.ownerDocument.createElement("div")
            mainContainer.setAttribute("id", "userInfoRest")
            this.shadowRoot.appendChild(mainContainer)

            //Email section
            const emailContainer = this.ownerDocument.createElement("div")
            emailContainer.classList.add("dataContainer")
            mainContainer.appendChild(emailContainer)

            const emailTitle = this.ownerDocument.createElement("h2")
            emailTitle.innerText = `${state.logedUserData.email}`
            emailContainer.appendChild(emailTitle)

            const emailValue = this.ownerDocument.createElement("h3")
            emailValue.innerText = `${state.logedUserData.email}`
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

            const phoneValue = this.ownerDocument.createElement("h3")
            phoneValue.innerText = `${state.logedUserData.cellphone}`
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
            idTitle.innerText = "id"
            idContainer.appendChild(idTitle)

            const idValue = this.ownerDocument.createElement("h3")
            idValue.innerText = `${state.logedUserData.id}`
            idContainer.appendChild(idValue)
        }
    }
}

customElements.define("userinfo-rest", userInfoRest)