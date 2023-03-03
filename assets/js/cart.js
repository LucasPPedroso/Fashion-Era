document.addEventListener("DOMContentLoaded", () => {
    const cartBadge = document.querySelectorAll(".cart-number-badge")
    const getLocal = JSON.parse(localStorage.getItem("final products"));
    cartBadge.forEach(item => {
        getLocal ? item.innerHTML = JSON.parse(localStorage.getItem("final products")).length : item.innerHTML = '0';
    })
})

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const input = document.querySelector(".qty-input");

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

