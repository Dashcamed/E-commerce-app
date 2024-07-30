import { container, productList } from "./products";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export let carts = [];

export const cartElements = document.getElementById("cartElements");
export const iconCartSpan = document.querySelector(".indicator-item");
export const iconCartSpan2 = document.querySelector(".indicator-item-2");
export const subTotal = document.querySelector(".subtotal");
export const subTotal2 = document.querySelector(".subtotal-2");


export const cartListeners = () => {
    container.addEventListener('click', (e) => {
        let positionClick = e.target;
        if (positionClick.classList.contains('addCart') || positionClick.closest('.addCart')) {
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
    Toastify({
        text: "Añadido al carrito",
        className: "info",
        gravity: "top",
        position: "center",
        style: {
            background: "linear-gradient(to right, #3aa4b4 , #1dfd82)",
        }
    }).showToast();
    addCartToStorage();
};

export const addCartToStorage = () => {
    localStorage.setItem('cart', JSON.stringify(carts))
}

export const addCartToHtml = () => {
    cartElements.innerHTML = '';
    let totalQuantity = 0;
    let totalPrice = 0;
    if(carts.length > 0){
        carts.forEach(cart => {
            totalQuantity = totalQuantity + cart.quantity;
            let newCart = document.createElement('div')
            newCart.className=('flex flex-row');
            newCart.dataset.id = cart.product_id;
            let positionProduct = productList.findIndex((value) => value.category == cart.product_id)
            let info = productList[positionProduct]
            totalPrice += info.price * cart.quantity;
            newCart.innerHTML = `
            <img class="size-12" src="${info.image.thumbnail}" alt="">
            <button class="minus btn btn-warning"> - </button>
            <span class="p-3 px-3">${cart.quantity}</span>
            <button class="plus btn btn-success"> + </button>
            <h4 class="p-3">${info.category}</h4>
            <span class="totalPrice p-3">$ ${info.price * cart.quantity}</span>
            `
        cartElements.appendChild(newCart);
        })
    }
    iconCartSpan.innerText = totalQuantity;
    iconCartSpan2.innerText = totalQuantity + " Items";
    subTotal.innerText = `$ ${totalPrice.toFixed(2)}`;
    subTotal2.innerText = `$ ${totalPrice.toFixed(2)}`;
}

export const cartElementsListeners = () => {
    cartElements.addEventListener('click', (e) => {
        let positionClick = e.target;
        if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
            let product_id = positionClick.parentElement.dataset.id;
            let type = 'minus';
            if(positionClick.classList.contains('plus')){
                type = 'plus';
            }
        changeQuantity(product_id, type);
        }
    })
}

export const changeQuantity = (product_id, type) => {
    let positionItemCart = carts.findIndex((value)=> value.product_id == product_id);
    if(positionItemCart >=0){
        switch (type) {
            case 'plus':
                carts[positionItemCart].quantity = carts[positionItemCart].quantity + 1
                break;
            default:
                let valueChange = carts[positionItemCart].quantity -1;
                if(valueChange > 0){
                    carts[positionItemCart].quantity = valueChange;
                } else {
                    carts.splice(positionItemCart, 1);
                }
            break;
        }
        addCartToStorage()
        addCartToHtml()
    }
}