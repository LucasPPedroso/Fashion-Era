const passwordInput = document.querySelector(".password");
const toggleShowPassword = document.querySelector(".show-password");
const toggleShowPasswordIcon = document.querySelector(".show-password-icon");
const emailInput = document.querySelector(".email-input");

toggleShowPassword.addEventListener("click", showPassword)

function showPassword() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleShowPasswordIcon.classList.remove("fa-eye")
        toggleShowPasswordIcon.classList.add("fa-eye-slash")
    } else {
        passwordInput.type = "password";
        toggleShowPasswordIcon.classList.add("fa-eye")
        toggleShowPasswordIcon.classList.remove("fa-eye-slash")
    }

}

window.addEventListener("click", () => {
    if (emailInput.value) {
        document.querySelector(".email-label").style.cssText =
            "top: -15px !important;" +
            "left: 14px !important;" +
            "opacity: 1 !important;" +
            "font-size: 11px !important;"
    }
})