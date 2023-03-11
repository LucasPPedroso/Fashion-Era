const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const input = document.querySelector(".qty-input");
const header = document.querySelector(".cart-header");
const cartBody = document.querySelector(".cart-body");
const getLocal = JSON.parse(localStorage.getItem("final products"));

document.addEventListener("DOMContentLoaded", () => {
    const cartBadge = document.querySelectorAll(".cart-number-badge")
    cartBadge.forEach(item => {
        getLocal ? item.innerHTML = JSON.parse(localStorage.getItem("final products")).length : item.innerHTML = '0';
    })
    !getLocal ? header.innerHTML = "Your bag is empty." : header.innerHTML = "Your shopping bag";

    if (!getLocal) {
        cartBody.innerHTML = `
        <p>Your Shopping Cart lives to serve. Give it purpose — fill it with our infinite clothing
            collection and more.
            Continue shopping on the <a href="index.html">Fashion Era</a> homepage, or visit your <a
                href="favorites.html">Favorites</a>.</p>
        `
    } else {
        getLocal.forEach(item => {
            cartBody.innerHTML += `
                <div class="cart-item">
                    <div class="item-img">
                        <img src="./assets/images/${item.images}" alt="product">
                    </div>
                    <div class="item-name">
                        <p class="cart-item-name">${item.title}</p>
                        <div class="item-qty">
                            <span title="decrease" class="minus"><i class="fa-solid fa-minus"></i></span>
                            <input title="quantity" readonly value="${item.qty}" class="qty-input" inputmode="numeric" type="number"
                                   name="Quantity">
                            <span title="increase" class="plus"><i class="fa-solid fa-plus"></i></span>
                            <span title="delete" class="trash"><i class="fa-regular fa-trash-can"></i></span>
                        </div>
                    </div>
                    <div class="item-price">
                        <p>$${item.price.new} <span class="old-price">$${item.price.old}</span></p>
                    </div>
                </div>
            `
        })
    }

    plus.addEventListener("click", () => {
        minus.style.opacity = "1";
    })
    minus.addEventListener("click", () => {
        minus.style.opacity = "1";
        if (input.value <= 1) {
            input.value = 1;
            minus.style.opacity = "0.4";
        }
    })

})
