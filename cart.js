import { container, productList } from "./products";

export let carts = [];

export const cartElements = document.getElementById("cartElements");
export const iconCartSpan = document.querySelectorAll(".icon-cart-span");
console.log(iconCartSpan);


export const cartListeners = () => {
    container.addEventListener('click', (e) => {
        let positionClick = e.target;
        if (positionClick.classList.contains('addCart') && positionClick.closest('.addCart')) {
            let product_id = positionClick.closest('.card').dataset.id;
            addToCart(product_id)
            addCartToHtml()
        }
    });
};

export const addToCart = (product_id) => {
    let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);
    if(carts.length <= 0){
        carts = [{
            product_id: product_id,
            quantity: 1
        }]
    } else if(positionThisProductInCart < 0 ) {
        carts.push({
            product_id: product_id,
            quantity: 1
        })
    } else {
        carts[positionThisProductInCart].quantity = carts[positionThisProductInCart].quantity + 1;
    }
    console.log(carts)
};

export const addCartToHtml = () => {
    cartElements.innerHTML = '';
    let totalQuantity = 0;
    if(carts.length > 0){
        carts.forEach(cart => {
            totalQuantity = totalQuantity + cart.quantity;
            let newCart = document.createElement('div')
            newCart.className=('flex flex-row');
            let positionProduct = productList.findIndex((value) => value.category == cart.product_id)
            let info = productList[positionProduct]
            newCart.innerHTML = `
            <img class="size-12" src="${info.image.mobile}" alt="">
            <button class="btn btn-warning"><img src="./images/icon-decrement-quantity.svg" alt=""></button>
            <span class="p-3">${cart.quantity}</span>
            <button class="btn btn-success"><img src="./images/icon-increment-quantity.svg" alt=""></button>
            <h4 class="p-3">${info.category}</h4>
            <span class="totalPrice p-3">${info.price * cart.quantity}</span>
            `
        cartElements.appendChild(newCart);
        })
    }
    iconCartSpan.innerText = totalQuantity;
}