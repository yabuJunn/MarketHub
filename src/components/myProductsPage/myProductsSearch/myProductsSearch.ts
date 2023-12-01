import { dispatch } from "../../../store"
import { updateMyProductsSearch } from "../../../store/actions"

export class myProductsSearch extends HTMLElement {
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
            link.setAttribute("href", "/src/components/myProductsPage/myProductsSearch/myProductsSearch.css")
            this.shadowRoot.appendChild(link);

            const mainContainer = this.ownerDocument.createElement("div");
            mainContainer.setAttribute("id", "myProductsSearchContainer");
            this.shadowRoot.appendChild(mainContainer);

            const myProductsSearchTitle = this.ownerDocument.createElement("h2")
            myProductsSearchTitle.innerText = "Search"
            mainContainer.appendChild(myProductsSearchTitle)

            const searchContainer = this.ownerDocument.createElement("div")
            searchContainer.setAttribute("id", "searchContainer")
            mainContainer.appendChild(searchContainer)

            const searchIcon = this.ownerDocument.createElement("img")
            searchIcon.setAttribute("src", "/src/resources/svg/navIcons/searchLight.svg")
            searchContainer.appendChild(searchIcon)

            const searchInput = this.ownerDocument.createElement("input")
            searchInput.setAttribute("placeholder", "Find your product")
            searchContainer.appendChild(searchInput)

            const deleteFilter = this.ownerDocument.createElement("p")
            deleteFilter.innerText = "Delete Filter"
            mainContainer.appendChild(deleteFilter)

            searchInput.addEventListener("change", () => {
                dispatch(
                    updateMyProductsSearch(searchInput.value)
                )
            })
        }
    }
}

customElements.define("my_products-search", myProductsSearch)