import { addCartToHtml, cartElementsListeners, changeQuantity } from "./cart";
import { showProducts } from "./products";

document.addEventListener('DOMContentLoaded', () => {
    showProducts()
    addCartToHtml()
    cartElementsListeners()
    changeQuantity()
})

