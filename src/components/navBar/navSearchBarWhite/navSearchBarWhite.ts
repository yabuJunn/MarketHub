import { dispatch, state } from "../../../store"
import { changeScreen, changeSeaarchText } from "../../../store/actions"
import { Screens } from "../../../types/screens"
import "../../export"

export class NavSearchBarWhite extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const link = this.ownerDocument.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("href", "/src/components/navBar/navSearchBarWhite/navSearchBarWhite.css")
        this.shadowRoot?.appendChild(link)

        const searchBarContainer = this.ownerDocument.createElement("div")
        searchBarContainer.setAttribute("id", "navSearchBar")
        this.shadowRoot?.appendChild(searchBarContainer)

        const searchLogo = this.ownerDocument.createElement("img")
        searchLogo.setAttribute("id", "navSearchLogo")
        searchLogo.setAttribute("src", "/src/resources/svg/navIcons/searchLight.svg")
        searchBarContainer.appendChild(searchLogo)
        
        const searchInput = this.ownerDocument.createElement("input")
        searchInput.setAttribute("id", "searchInputNav")
        searchInput.setAttribute("placeholder", "Find what you want!")
        searchInput.value = state.searchText
        searchBarContainer.appendChild(searchInput)

        searchLogo.addEventListener("click", () => {
            dispatch(
                changeSeaarchText(searchInput.value)
            )
            dispatch(
                changeScreen(Screens.searchPage)
            )
        })
    }
}

customElements.define("navsearchbar-white", NavSearchBarWhite)