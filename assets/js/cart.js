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