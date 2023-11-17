import "../../components/export"

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
        }
    }
}

customElements.define("userinformationpage-page", userInformationPage)