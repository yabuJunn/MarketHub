import { actualizarDatosDeUsuarioRegistrado } from "../../firebase/firebase"
import { state } from "../../store"
import { changeDataInfo } from "../../utilities/changeDataInfo"

export class changeDataPage extends HTMLElement {
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
            link.setAttribute("href", "../src/pages/changeDataPage/changeDataPage.css")
            this.shadowRoot.appendChild(link);

            const mainContainer = this.ownerDocument.createElement("section");
            mainContainer.setAttribute("id", "changeDataPage");
            this.shadowRoot.appendChild(mainContainer);

            const navBarWhite = this.ownerDocument.createElement('navbar-white');
            mainContainer.appendChild(navBarWhite)

            const changeDataTitle = this.ownerDocument.createElement("change_data-title")
            mainContainer.appendChild(changeDataTitle)

            const changeDataRest = this.ownerDocument.createElement("change_data-rest")
            mainContainer.appendChild(changeDataRest)

            const buttonContainer = this.ownerDocument.createElement("div")
            buttonContainer.setAttribute("id", "buttonContainer")
            mainContainer.appendChild(buttonContainer)

            const acceptChangesButton = this.ownerDocument.createElement("button")
            acceptChangesButton.innerText = "ACCEPT CHANGES"
            buttonContainer.appendChild(acceptChangesButton)

            acceptChangesButton.addEventListener("click", () => {
                if (state.logedUserData.email === changeDataInfo.email && state.logedUserData.cellphone === changeDataInfo.phone && state.logedUserData.identificationDocument === changeDataInfo.identificationDocument) {
                    alert("No hay cambios que subir")
                } else {
                    actualizarDatosDeUsuarioRegistrado(changeDataInfo.email, changeDataInfo.phone, changeDataInfo.identificationDocument, `${state.logedUserData.firebaseID}`)
                }
            })
        }
    }
}

customElements.define("change_data-page", changeDataPage)