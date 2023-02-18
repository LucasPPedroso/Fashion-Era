const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const input = document.querySelector(".qty-input");
const cardBadge = document.querySelectorAll(".card-number-badge")

document.addEventListener("DOMContentLoaded", () => {
    cardBadge.forEach(item => {
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

