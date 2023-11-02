import "../../components/export"

export class MainPage extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot != null || this.shadowRoot != undefined) {
            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/appContainer.css")
            const navBar = this.ownerDocument.createElement("nav-bar")
            const categoriesSection = this.ownerDocument.createElement("categories-section")
            const advertisingSection = this.ownerDocument.createElement("advertising-section")
            const recommendedSection = this.ownerDocument.createElement("recommended-section")

            this.shadowRoot.appendChild(link)
            this.shadowRoot.appendChild(navBar)
            this.shadowRoot.appendChild(categoriesSection)
            this.shadowRoot.appendChild(advertisingSection)
            this.shadowRoot.appendChild(recommendedSection)
        }

    }
}

customElements.define("main-page", MainPage)