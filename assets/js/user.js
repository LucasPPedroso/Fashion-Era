const formHeader = document.querySelector(".form-header-text");
const passwordInput = document.querySelector(".password");
const toggleShowPassword = document.querySelector(".show-password");
const toggleShowPasswordIcon = document.querySelector(".show-password-icon");
const emailInput = document.querySelector(".email-input");
const nameWrapper = document.querySelector(".name");
const loginWrapper = document.querySelector(".login-wrapper");
const forgotPassword = document.querySelector(".forgot-pass");
const loginBtn = document.querySelector(".login");
const signIn = document.querySelector(".sign-in");

toggleShowPassword.addEventListener("click", () => {

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleShowPasswordIcon.classList.remove("fa-eye")
        toggleShowPasswordIcon.classList.add("fa-eye-slash")
    } else {
        passwordInput.type = "password";
        toggleShowPasswordIcon.classList.add("fa-eye")
        toggleShowPasswordIcon.classList.remove("fa-eye-slash")
    }
});

emailInput.addEventListener("input", () => {

    if (emailInput.value) {
        document.querySelector(".email-label").style.cssText =
            "top: -15px !important;" +
            "left: 14px !important;" +
            "opacity: 1 !important;" +
            "font-size: 11px !important;"
    } else {
        document.querySelector(".email-label").style.cssText =
            "top: 0 !important;" +
            "left: 10px !important;" +
            "opacity: .4 !important;" +
            "font-size: 12px !important;"
    }
})

loginBtn.addEventListener("click", () => {
    formHeader.innerHTML = "Login";
    nameWrapper.style.cssText = "display: none;"
    forgotPassword.style.cssText = "display: block;"
    loginWrapper.innerHTML = "Haven't an Account? <a href='user.html' class='login'> Sign Up</a>."
    signIn.innerHTML = "Sign In";
})
