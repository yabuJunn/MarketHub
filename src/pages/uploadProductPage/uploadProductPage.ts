import "../../components/export"
import { subirProducto } from "../../firebase/firebase"
import { state } from "../../store"

export class uploadProductPage extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ""
            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/pages/uploadProductPage/uploadProductPage.css")
            this.shadowRoot.appendChild(link);

            const mainContainer = this.ownerDocument.createElement("section");
            mainContainer.setAttribute("id", "uploadProductPage");
            this.shadowRoot.appendChild(mainContainer);

            const navBarRed = this.ownerDocument.createElement('navbar-red');
            mainContainer.appendChild(navBarRed)

            const uploadProductContainer = this.ownerDocument.createElement("div")
            uploadProductContainer.setAttribute("id", "uploadProductContainer")
            mainContainer.appendChild(uploadProductContainer)

            const inputImageContainer = this.ownerDocument.createElement("div")
            inputImageContainer.setAttribute("id", "inputImageContainer")
            uploadProductContainer.appendChild(inputImageContainer)

            const divInputImage = this.ownerDocument.createElement("div")
            divInputImage.setAttribute("id", "divInputImage")
            divInputImage.style.backgroundImage = "url(/src/resources/svg/navIcons/dark/uploadDark.svg)"
            inputImageContainer.appendChild(divInputImage)

            const inputImage = this.ownerDocument.createElement("input")
            inputImage.setAttribute("type", "file")
            divInputImage.appendChild(inputImage)

            const inputImageMessage = this.ownerDocument.createElement("p")
            inputImageMessage.innerText = "No file selected"
            inputImageContainer.appendChild(inputImageMessage)

            const containerProductInputs = this.ownerDocument.createElement("div")
            containerProductInputs.setAttribute("id", "containerProductInputs")
            uploadProductContainer.appendChild(containerProductInputs)

            //Name Section
            const nameTitle = this.ownerDocument.createElement("h1")
            nameTitle.innerText = "Name of the product"
            containerProductInputs.appendChild(nameTitle)

            const nameInput = this.ownerDocument.createElement("input")
            nameInput.setAttribute("type", "text")
            nameInput.setAttribute("placeholder", "Enter the name of your new product")
            containerProductInputs.appendChild(nameInput)

            //Description Section
            const descTitle = this.ownerDocument.createElement("h1")
            descTitle.innerText = "Description of the product"
            containerProductInputs.appendChild(descTitle)

            const descInput = this.ownerDocument.createElement("input")
            descInput.setAttribute("type", "text")
            descInput.setAttribute("placeholder", "Describe for what purpose you created the product")
            containerProductInputs.appendChild(descInput)

            //Price Section
            const priceTitle = this.ownerDocument.createElement("h1")
            priceTitle.innerText = "Price of the product"
            containerProductInputs.appendChild(priceTitle)

            const priceContainer = this.ownerDocument.createElement("div")
            priceContainer.setAttribute("id", "priceContainer")
            containerProductInputs.appendChild(priceContainer)

            const priceInput = this.ownerDocument.createElement("input")
            priceInput.setAttribute("type", "number")
            priceInput.setAttribute("placeholder", "Set price")
            priceContainer.appendChild(priceInput)

            const priceUp = this.ownerDocument.createElement("button")
            priceUp.innerText = "+"
            priceUp.setAttribute("id", "priceUp")
            priceContainer.appendChild(priceUp)

            const priceDown = this.ownerDocument.createElement("button")
            priceDown.innerText = "-"
            priceDown.setAttribute("id", "priceDown")
            priceContainer.appendChild(priceDown)

            const uploadButton = this.ownerDocument.createElement("button")
            uploadButton.setAttribute("id", "uploadButton")
            uploadButton.innerText = "UPLOAD PRODUCT"
            containerProductInputs.appendChild(uploadButton)

            inputImage.addEventListener("change", () => {
                inputImageMessage.innerText = inputImage.files![0].name
            })

            uploadButton.addEventListener("click", () => {
                if (inputImage.value === "" || descInput.value === "" || priceInput.value === "" || inputImage.files === null) {
                    alert("Hay campos sin llenar")
                } else {
                    subirProducto(nameInput.value, descInput.value, priceInput.value, inputImage.files[0], `${state.logedUserData.firebaseID}`)
                    this.render()
                }
            })

        }
    }
}

customElements.define("uploadproduct-page", uploadProductPage)