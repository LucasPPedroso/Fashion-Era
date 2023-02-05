const passwordInput = document.querySelector(".password");
const toggleShowPassword = document.querySelector(".show-password");

toggleShowPassword.addEventListener("click", showPassword)

function showPassword() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}