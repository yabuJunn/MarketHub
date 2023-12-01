import { state } from "../../../store"
import "../../export"

export class changeDataTitle extends HTMLElement {
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
            link.setAttribute("href", "../src/components/changeDataPage/changeDataTitle/changeDataTitle.css")
            this.shadowRoot.appendChild(link);

            const mainContainer = this.ownerDocument.createElement("div")
            mainContainer.setAttribute("id", "changeDataTitleContainer")
            this.shadowRoot.appendChild(mainContainer)

            const userImage = this.ownerDocument.createElement("div")
            userImage.setAttribute("id", "userImage")
            userImage.style.backgroundImage = `url(../src/resources/svg/navIcons/dark/userDark.svg)`
            mainContainer.appendChild(userImage)

            const changeDataTitleInfo = this.ownerDocument.createElement("div")
            changeDataTitleInfo.setAttribute("id", "changeDataTitleInfo")
            mainContainer.appendChild(changeDataTitleInfo)

            const userName = this.ownerDocument.createElement("h1")
            userName.innerText = `${state.logedUserData.name}`
            changeDataTitleInfo.appendChild(userName)

            const userUsername = this.ownerDocument.createElement("h2")
            userUsername.innerText = `@${state.logedUserData.userID}`
            changeDataTitleInfo.appendChild(userUsername)
        }
    }
}

customElements.define("change_data-title", changeDataTitle)