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
        }
    }
}

customElements.define("userinfo-rest", userInfoRest)