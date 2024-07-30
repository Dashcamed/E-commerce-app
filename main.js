import { addCartToHtml } from "./cart";
import { showProducts } from "./products";

document.addEventListener('DOMContentLoaded', () => {
    showProducts()
    addCartToHtml()
})

