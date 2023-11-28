import "../../components/export"
import { traerDatosUsuarioRegistrado } from "../../firebase/firebase"
import { dispatch, state } from "../../store"
import { changeScreen } from "../../store/actions"
import { Screens } from "../../types/screens"

export class MainPage extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    async render() {
        if (this.shadowRoot != null || this.shadowRoot != undefined) {
            if (state.logedUserID === "") {
                alert("No hay usuario registrado")
                dispatch(
                    changeScreen(Screens.landingPage)
                )
            }

            await traerDatosUsuarioRegistrado(state.logedUserID)

            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/pages/mainPage/mainPage.css")
            this.shadowRoot.appendChild(link)

            const mainContainer = this.ownerDocument.createElement("section");
            mainContainer.setAttribute("id", "mainPage");
            this.shadowRoot.appendChild(mainContainer);

            const navBar = this.ownerDocument.createElement("navbar-red")
            mainContainer.appendChild(navBar)

            const categoriesSection = this.ownerDocument.createElement("categories-section")
            mainContainer.appendChild(categoriesSection)

            const newsSection = this.ownerDocument.createElement("news-section")
            mainContainer.appendChild(newsSection)

            const salesSection = this.ownerDocument.createElement("sales-section")
            mainContainer.appendChild(salesSection)

            const recommendedSection = this.ownerDocument.createElement("recommended-section")
            mainContainer.appendChild(recommendedSection)
        }

    }
}

customElements.define("main-page", MainPage)