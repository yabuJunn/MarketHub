import { loginData } from "../../../utilities/loginData";
import { registerData } from "../../../utilities/registerData";
import "../../export";

const enum SignUpInputProperties {
    icon = "icon",
    placeholder = "placeholder"
}

export class SignUpInput extends HTMLElement {
    properties: Record<SignUpInputProperties, string> = {
        icon: "",
        placeholder: ""
    }

    static get observedAttributes() {
        const properties: Record<SignUpInputProperties, null> = {
            icon: null,
            placeholder: null
        }
        return Object.keys(properties);
    }

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    attributeChangedCallback(propName: SignUpInputProperties, oldValue: string, newValue: string) {
        switch (propName) {
            case SignUpInputProperties.icon:
                this.properties.icon = newValue
                break;
            case SignUpInputProperties.placeholder:
                this.properties.placeholder = newValue
                break;
            default:
                break;
        }
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const link = this.ownerDocument.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("href", "../src/components/signUp/signUpInput/signUpInput.css")
        this.shadowRoot?.appendChild(link)

        const inputContainer = this.ownerDocument.createElement("div")
        inputContainer.classList.add("inputSignUp")
        this.shadowRoot?.appendChild(inputContainer)

        const icon = this.ownerDocument.createElement("img")
        icon.setAttribute("src", `${this.properties.icon}`)
        inputContainer.appendChild(icon)

        const input = this.ownerDocument.createElement("input")
        input.setAttribute("type", "text")
        input.setAttribute("placeholder", `${this.properties.placeholder}`)
        inputContainer.appendChild(input)

        switch (this.properties.placeholder) {
            case "Name":
                input.addEventListener("change", () => {
                    registerData.name = input.value
                })
                break;
            case "User ID":
                input.addEventListener("change", () => {
                    registerData.userID = input.value
                })
                break; 
            case "Email":
                input.addEventListener("change", () => {
                    registerData.email = input.value
                })
                break;
            case "Cellphone":
                input.addEventListener("change", () => {
                    registerData.cellphone = input.value
                })
                break;
            case "Identification document":
                input.addEventListener("change", () => {
                    registerData.identificationDocument = input.value
                    console.log(registerData)
                })
                break;
            case "Password":
                input.addEventListener("change", () => {
                    registerData.password = input.value
                })
                break;
            case "Confirm Password":
                input.addEventListener("change", () => {
                    registerData.confirmPassword = input.value
                })
                break;
            case "Enter your email":
                input.addEventListener("change", () => {
                    loginData.email = input.value
                })
                break;
            case "Enter your password":
                input.addEventListener("change", () => {
                    loginData.password = input.value
                })
                break;
            default:
                break;
        }
    }
}

customElements.define("signup-input", SignUpInput)