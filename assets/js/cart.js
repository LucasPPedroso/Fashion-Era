const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const input = document.querySelector(".qty-input");
const cartBadge = document.querySelectorAll(".cart-number-badge")

plus.addEventListener("click", () => {
    input.value++;
    minus.style.opacity = "1";
})
minus.addEventListener("click", () => {
    input.value--;
    minus.style.opacity = "1";
    if (input.value <= 1) {
        input.value = 1;
        minus.style.opacity = "0.4";
    }
})

document.addEventListener("DOMContentLoaded", () => {
    cartBadge.forEach(item => {
        item.innerHTML = JSON.parse(localStorage.getItem("final Products")).length
    })
})

let products = JSON.parse(localStorage.getItem("final Products")).reduce((state, item) => {
    if (item.type === isNaN) {
        let newItems = item.delete(item);
        item = newItems;
    }
    return {...state, item};
})

products.map(item => {
    console.log("boom baby")
})


