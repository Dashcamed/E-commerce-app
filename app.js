export const container = document.getElementById('container-desserts')

export const showProducts = () => {
    fetch('./data.json')
    .then(res => res.json())
    .then(data =>
        data.forEach((product) => {
            const div = document.createElement('div')
            div.className = "card card-compact bg-base-100 w-80  shadow-xl"
            div.innerHTML = `
            <figure>
            <img src="${product.image.desktop}"alt="" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">${product.category}</h2>
                <p>${product.name}</p>
                <p>$ ${product.price}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary"><img class="size-6" src="./images/icon-add-to-cart.svg" alt="">Add to cart</button>
                </div>
            </div>
            `
            container.appendChild(div)
        })
    )
};
