function showForm(type) {
    const loginForm = document.getElementById('login');
    const registerForm = document.getElementById('register');
    const tabs = document.querySelectorAll('.tab');

    if (type === 'login') {
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
        tabs[0].classList.add('active');
        tabs[1].classList.remove('active');
    } else {
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
        tabs[0].classList.remove('active');
        tabs[1].classList.add('active');
    }
}

function togglePassword(icon, inputId) {
    const input = document.getElementById(inputId);
    const isHidden = input.type === "password";

    input.type = isHidden ? "text" : "password";
    icon.classList.toggle("bi-eye");
    icon.classList.toggle("bi-eye-slash");
}
function redirectToMain() {
    window.location.href = "principal.html";
}

function toggleMenu() {
    const menu = document.getElementById('main-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

document.getElementById("menu-toggle").addEventListener("click", toggleSidebar);

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("open");
}

function irParaPerfil() {
    window.location.href = "perfil.html"; // ajuste o nome da página conforme seu projeto
  }
  