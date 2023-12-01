import { addObserver, dispatch, state } from "../../store"
import { changeScreen, sideMenuVisibility } from "../../store/actions"
import { Screens } from "../../types/screens"
import { logOut } from "../../utilities/logOutUser"

export class sideMenu extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ""
            if (state.sideMenu === true) {
                const link = this.ownerDocument.createElement("link")
                link.setAttribute("rel", "stylesheet")
                link.setAttribute("href", "../src/components/sideMenu/sideMenu.css")
                this.shadowRoot.appendChild(link);

                const mainContainerSideMenu = this.ownerDocument.createElement("div")
                mainContainerSideMenu.setAttribute("id", "sideMenuContainer")
                this.shadowRoot.appendChild(mainContainerSideMenu)

                const sideMenu = this.ownerDocument.createElement("div")
                sideMenu.setAttribute("id", "sideMenu")
                mainContainerSideMenu.appendChild(sideMenu)

                const optionsTitle = this.ownerDocument.createElement("h1")
                optionsTitle.innerText = "Options"
                sideMenu.appendChild(optionsTitle)

                const myProductsOption = this.ownerDocument.createElement("h2")
                myProductsOption.innerText = "My products"
                sideMenu.appendChild(myProductsOption)

                const logOutOption = this.ownerDocument.createElement("h2")
                logOutOption.innerText = "Log Out"
                sideMenu.appendChild(logOutOption)

                mainContainerSideMenu.addEventListener("click", (event) => {
                    dispatch(
                        sideMenuVisibility(false)
                    )
                })

                sideMenu.addEventListener("click", (event) => {
                    event.stopPropagation()
                })

                myProductsOption.addEventListener("click", () => {
                    dispatch(
                        sideMenuVisibility(false)
                    )
                    dispatch(
                        changeScreen(Screens.myProductsPage)
                    )
                })

                logOutOption.addEventListener("click", () => {
                    logOut()
                })
            }
        }
    }
}

customElements.define("side-menu", sideMenu)