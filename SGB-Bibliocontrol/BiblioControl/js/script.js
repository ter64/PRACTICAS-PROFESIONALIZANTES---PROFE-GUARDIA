
const container = document.querySelector(".container")
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");


btnSignIn.addEventListener("click",()=>{
container.classList.remove("toggle")
});
btnSignUp.addEventListener("click",()=>{
    container.classList.add("toggle")
});
/* */
const formLogin = document.getElementById('form-login');
const emailInput = document.getElementById('login-email');
const passwordInput = document.getElementById('login-password');

formLogin.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === "ejemplo@gmail.com" && password === "4444") {
        window.location.href = "administrador/inicio-admin.html";
        
    } else {
        window.location.href = "usuario/inicio.html";
    }
});