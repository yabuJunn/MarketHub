import "../../export";
import { dataGeneral } from "../../../../data";
import { state } from "../../../store";
import { pedirProductData } from "../../../firebase/firebase";
import { databaseProduct } from "../../../types/databaseProductsType";

export class ProductDetailCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        pedirProductData(state.viewProduct, this)
    }

    render(dataProducto: databaseProduct) {
        if (this.shadowRoot) {
            console.log(dataProducto)
            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("href", "/src/components/productdetailcomp/productdetailcard/productdetailcard.css");
            this.shadowRoot.appendChild(link);

            const cardContainer = document.createElement("div");
            cardContainer.setAttribute("class", "card-container");
            this.shadowRoot.appendChild(cardContainer);

            // Div para la imagen
            const imageContainer = document.createElement("div");
            imageContainer.setAttribute("class", "image-container");
            imageContainer.style.backgroundImage = `url(${dataProducto.imageURL})`
            cardContainer.appendChild(imageContainer);

            // const image = document.createElement("img");
            // image.setAttribute("src", `${productToShow.img}`);
            // image.setAttribute("alt", "Product Image");
            // imageContainer.appendChild(image);

            // Div para el contenido
            const contentContainer = document.createElement("div");
            contentContainer.setAttribute("class", "content-container");
            cardContainer.appendChild(contentContainer);

            const title = document.createElement("h1");
            title.textContent = dataProducto.name;
            contentContainer.appendChild(title);

            const price = document.createElement("h2");
            price.textContent = dataProducto.price;
            contentContainer.appendChild(price);

            // const ratingContainer = document.createElement("div");
            // ratingContainer.setAttribute("class", "rating-container");
            // contentContainer.appendChild(ratingContainer);

            // Append 5 star images to the rating container
            // for (let i = 0; i < 5; i++) {
            //     const star = document.createElement("img");
            //     star.setAttribute("src", "/src/resources/svg/Star 1.svg");
            //     star.setAttribute("alt", "Star");
            //     ratingContainer.appendChild(star);

            // }

            // const rating = document.createElement("h3");
            // rating.textContent = "4.0";
            // ratingContainer.appendChild(rating);

            const descriptionTitle = document.createElement("h3");
            descriptionTitle.textContent = "Description";
            contentContainer.appendChild(descriptionTitle);

            const description = document.createElement("p");
            description.textContent = dataProducto.description;
            contentContainer.appendChild(description);

            const purchaseButton = document.createElement("button");
            purchaseButton.textContent = "Purchase now";
            contentContainer.appendChild(purchaseButton);

            const addToCartButton = document.createElement("button");
            addToCartButton.textContent = "Add to cart";
            contentContainer.appendChild(addToCartButton);
        }
    }
}
customElements.define('product-detailcard', ProductDetailCard);
