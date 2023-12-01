import { state } from "../../../store"
import "../../export"

export class userInfoTitle extends HTMLElement {
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
            link.setAttribute("href", "../src/components/userInformationPage/userInfoTitle/userInfoTitle.css")
            this.shadowRoot.appendChild(link);

            const mainContainer = this.ownerDocument.createElement("div")
            mainContainer.setAttribute("id", "userInfoTitleContainer")
            this.shadowRoot.appendChild(mainContainer)

            const userImage = this.ownerDocument.createElement("div")
            userImage.setAttribute("id", "userImage")
            userImage.style.backgroundImage = `url(../src/resources/svg/navIcons/light/userLight.svg)`
            mainContainer.appendChild(userImage)

            const userTitleInfo = this.ownerDocument.createElement("div")
            userTitleInfo.setAttribute("id", "userTitleInfo")
            mainContainer.appendChild(userTitleInfo)

            const userName = this.ownerDocument.createElement("h1")
            userName.innerText = `${state.logedUserData.name}`
            userTitleInfo.appendChild(userName)

            const userUsername = this.ownerDocument.createElement("h2")
            userUsername.innerText = `@${state.logedUserData.userID}`
            userTitleInfo.appendChild(userUsername)
        }
    }
}

customElements.define("userinfo-title", userInfoTitle)