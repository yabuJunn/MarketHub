import "../../components/export"
import { traerDatabaseProducts, traerDatosUsuarioRegistrado } from "../../firebase/firebase"
import { dispatch, state } from "../../store"
import { changeScreen } from "../../store/actions"
import { Screens } from "../../types/screens"
import { reiniciarDatabaseProducts } from "../../utilities/databaseProducts"

export class MainPage extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    async connectedCallback() {
        if (localStorage.getItem("logedFirebaseID") === null) {
            alert("No hay usuario registrado")
            dispatch(
                changeScreen(Screens.landingPage)
            )
        }

        if (state.logedUserData.firebaseID === null) {
            await traerDatosUsuarioRegistrado(`${localStorage.getItem("logedFirebaseID")}`)
        }
        this.render()
    }

    async render() {
        if (this.shadowRoot != null || this.shadowRoot != undefined) {
            console.log("Render MainPage")
            //Especificamente primero el traerDatabaseProducts y luego el reiniciarDatabaseProducts para que no se dupliquen los productos
            await traerDatabaseProducts()
            reiniciarDatabaseProducts()

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