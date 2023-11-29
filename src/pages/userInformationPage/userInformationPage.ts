import "../../components/export"
import { dispatch } from "../../store"
import { changeScreen } from "../../store/actions"
import { Screens } from "../../types/screens"

export class userInformationPage extends HTMLElement {
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
            link.setAttribute("href", "/src/pages/userInformationPage/userInformationPage.css")
            this.shadowRoot.appendChild(link);

            const mainContainer = this.ownerDocument.createElement("section");
            mainContainer.setAttribute("id", "userInformationPage");
            this.shadowRoot.appendChild(mainContainer);

            const navBarRed = this.ownerDocument.createElement('navbar-red');
            mainContainer.appendChild(navBarRed)

            const userInfoTitle = this.ownerDocument.createElement("userinfo-title")
            mainContainer.appendChild(userInfoTitle)

            const userInfoRest = this.ownerDocument.createElement("userinfo-rest")
            mainContainer.appendChild(userInfoRest)

            const buttonsContainer = this.ownerDocument.createElement("div")
            buttonsContainer.setAttribute("id", "buttonsContainer")
            mainContainer.appendChild(buttonsContainer)

            const buttonChangeData = this.ownerDocument.createElement("button")
            buttonChangeData.setAttribute("id", "buttonChangeData")
            buttonChangeData.innerText = "Change your data"
            buttonsContainer.appendChild(buttonChangeData)

            const buttonLogOut = this.ownerDocument.createElement("button")
            buttonLogOut.setAttribute("id", "buttonLogOut")
            buttonLogOut.innerText = "LOG OUT"
            buttonsContainer.appendChild(buttonLogOut)

            buttonChangeData.addEventListener("click", () => {
                dispatch(
                    changeScreen(Screens.changeDataPage)
                )
            })
        }
    }
}

customElements.define("userinformationpage-page", userInformationPage)