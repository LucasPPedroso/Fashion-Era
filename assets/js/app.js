document.addEventListener('DOMContentLoaded', () => {

    const allBtn = document.querySelector(".all-btn");
    const menBtn = document.querySelector(".men-btn");
    const womenBtn = document.querySelector(".women-btn");
    const kidsBtn = document.querySelector(".kids-btn");
    const menItems = document.querySelectorAll(".men");
    const womenItems = document.querySelectorAll(".women");
    const kidsItems = document.querySelectorAll(".kids");

    allBtn.addEventListener("click", () => {
        allBtn.classList.add("btn-active");
        menBtn.classList.remove("btn-active");
        womenBtn.classList.remove("btn-active");
        kidsBtn.classList.remove("btn-active");

        menItems.forEach((item) => {
            item.classList.add("d-block");
            item.classList.remove("d-none")
        })
        kidsItems.forEach(item => {
            item.classList.add("d-block");
            item.classList.remove("d-none")
        })
        womenItems.forEach(item => {
            item.classList.add("d-block");
            item.classList.remove("d-none")
        })
    })

    menBtn.addEventListener("click", () => {
        menBtn.classList.add("btn-active");
        allBtn.classList.remove("btn-active");
        womenBtn.classList.remove("btn-active");
        kidsBtn.classList.remove("btn-active");

        menItems.forEach(item => {
            item.classList.add("d-block");
            item.classList.remove("d-none")
        })
        kidsItems.forEach(item => {
            item.classList.add("d-none");
            item.classList.remove("d-block")
        })
        womenItems.forEach(item => {
            item.classList.add("d-none");
            item.classList.remove("d-block")
        })
    })

    womenBtn.addEventListener("click", () => {
        womenBtn.classList.add("btn-active");
        allBtn.classList.remove("btn-active");
        menBtn.classList.remove("btn-active");
        kidsBtn.classList.remove("btn-active");

        menItems.forEach(item => {
            item.classList.add("d-none");
            item.classList.remove("d-block")
        })
        kidsItems.forEach(item => {
            item.classList.add("d-none");
            item.classList.remove("d-block")
        })
        womenItems.forEach(item => {
            item.classList.add("d-block");
            item.classList.remove("d-none")
        })
    })

    kidsBtn.addEventListener("click", () => {
        kidsBtn.classList.add("btn-active");
        allBtn.classList.remove("btn-active");
        menBtn.classList.remove("btn-active");
        womenBtn.classList.remove("btn-active");

        menItems.forEach(item => {
            item.classList.add("d-none");
            item.classList.remove("d-block")
        })
        kidsItems.forEach(item => {
            item.classList.add("d-block");
            item.classList.remove("d-none")
        })
        womenItems.forEach(item => {
            item.classList.add("d-none");
            item.classList.remove("d-block")
        })
    })
})