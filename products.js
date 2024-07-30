import { addCartToHtml, cartListeners, carts } from "./cart";

export const container = document.getElementById('container-desserts')

export let productList = []

export const showProductsToHtml = () => {
    container.innerHTML = '';
    productList.forEach((product) => {
        const div = document.createElement('div')
        div.dataset.id = product.category;
        div.className = "card card-compact bg-base-300 w-80 shadow-xl"
        div.innerHTML = `
        <figure>
        <img src="${product.image.desktop}"alt="" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${product.category}</h2>
            <p>${product.name}</p>
            <p>$ ${product.price}</p>
            <div class="card-actions justify-end">
                <button class="addCart btn btn-primary"><img class="size-6" src="./images/icon-add-to-cart.svg" alt="">Add to cart</button>
            </div>
        </div>
        `
        container.appendChild(div)
    })
    cartListeners()
}

export const showProducts = () => {
    fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        productList = data;
        console.log(productList)
        showProductsToHtml()

        if(localStorage.getItem('cart')){
            carts.length = 0;
            carts.push(...JSON.parse(localStorage.getItem('cart')));
            addCartToHtml();
        }
    })
};
