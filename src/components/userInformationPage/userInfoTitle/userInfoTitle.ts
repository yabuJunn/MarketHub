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
            link.setAttribute("href", "/src/components/userInformationPage/userInfoTitle/userInfoTitle.css")
            this.shadowRoot.appendChild(link);

            const mainContainer = this.ownerDocument.createElement("div")
            mainContainer.setAttribute("id", "userInfoTitleContainer")
            this.shadowRoot.appendChild(mainContainer)

            const userImage = this.ownerDocument.createElement("div")
            userImage.setAttribute("id", "userImage")
            userImage.style.backgroundImage = `url(https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D)`
            mainContainer.appendChild(userImage)

            const userTitleInfo = this.ownerDocument.createElement("div")
            userTitleInfo.setAttribute("id", "userTitleInfo")
            mainContainer.appendChild(userTitleInfo)

            const userName = this.ownerDocument.createElement("h1")
            userName.innerText = "UserName"
            userTitleInfo.appendChild(userName)

            const userUsername = this.ownerDocument.createElement("h2")
            userUsername.innerText = "@UserName"
            userTitleInfo.appendChild(userUsername)
        }
    }
}

customElements.define("userinfo-title", userInfoTitle)