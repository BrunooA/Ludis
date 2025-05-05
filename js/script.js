document.addEventListener("DOMContentLoaded", function () {
    // === Mostrar/Ocultar senha ===
    function setupTogglePassword(toggleButtonId, passwordFieldId) {
        const toggleButton = document.getElementById(toggleButtonId);
        const passwordField = document.getElementById(passwordFieldId);

        if (toggleButton && passwordField) {
            toggleButton.addEventListener("click", function () {
                const isPassword = passwordField.type === "password";
                passwordField.type = isPassword ? "text" : "password";
                this.querySelector("i").classList.toggle("bi-eye", !isPassword);
                this.querySelector("i").classList.toggle("bi-eye-slash", isPassword);
            });
        }
    }

    setupTogglePassword("togglePassword", "password");
    setupTogglePassword("togglePasswordConfirm", "passwordConfirm");

    // === LocalStorage helpers ===
    function getUsers() {
        return JSON.parse(localStorage.getItem("users")) || [];
    }

    function saveUser(email, password, profileImageBase64) {
        let users = getUsers();
        users.push({ email, password, profileImage: profileImageBase64 });
        localStorage.setItem("users", JSON.stringify(users));
    }

    // === Cadastro ===
    const cadastroForm = document.getElementById("cadastroForm");
    if (cadastroForm) {
        cadastroForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;
            const passwordConfirm = document.getElementById("passwordConfirm").value;
            const profilePicInput = document.getElementById("profilePic");

            if (password !== passwordConfirm) {
                alert("As senhas não coincidem!");
                return;
            }

            let users = getUsers();
            if (users.some(user => user.email === email)) {
                alert("Esse email já está cadastrado!");
                return;
            }

            const file = profilePicInput?.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const profileImageBase64 = e.target.result;
                    saveUser(email, password, profileImageBase64);
                    alert("Cadastro realizado com sucesso! Redirecionando para o login.");
                    window.location.href = "/login.html";
                };
                reader.readAsDataURL(file);
            } else {
                saveUser(email, password, null);
                alert("Cadastro realizado com sucesso! Redirecionando para o login.");
                window.location.href = "/login.html";
            }
        });
    }

    // === Login ===
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;
            let users = getUsers();

            let user = users.find(user => user.email === email && user.password === password);
            if (user) {
                alert("Login bem-sucedido! Redirecionando..");
                sessionStorage.setItem("loggedInUser", email);
                sessionStorage.setItem("userImage", user.profileImage || "");
                window.location.href = "/home.html";
            } else {
                alert("Email ou senha incorretos.");
            }
        });
    }

    // === Verificação de login e exibição de email e imagem ===
    const user = sessionStorage.getItem("loggedInUser");
    const userEmailElement = document.getElementById("userEmail");
    const profileImageElement = document.getElementById("profileImage");

    if (user) {
        if (userEmailElement) {
            userEmailElement.innerText = user;
        }

        if (profileImageElement) {
            const userImage = sessionStorage.getItem("userImage");
            if (userImage) {
                profileImageElement.src = userImage;
            }
        }
    } else if (userEmailElement || profileImageElement) {
        window.location.href = "/login.html";
    }

    // === Logout ===
    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            sessionStorage.removeItem("loggedInUser");
            sessionStorage.removeItem("userImage");
            alert("Você saiu da conta.");
            window.location.href = "/login.html";
        });
    }

    // === Menu lateral toggle ===
    const menuButton = document.getElementById("menuButton");
    const sideMenu = document.getElementById("sideMenu");

    if (menuButton && sideMenu) {
        menuButton.addEventListener("click", function () {
            sideMenu.classList.toggle("open");
        });

        document.addEventListener("click", function (event) {
            if (!sideMenu.contains(event.target) && !menuButton.contains(event.target)) {
                sideMenu.classList.remove("open");
            }
        });
    }

    // === Marcar item ativo do menu lateral ===
    const currentPage = window.location.pathname.split("/").pop();
    const menuItems = document.querySelectorAll("#sideMenu ul li a");

    menuItems.forEach(item => {
        if (item.getAttribute("href") === currentPage) {
            item.classList.add("active");
        }
    });
});
const profileImageElement = document.getElementById("profileImage");

if (profileImageElement) {
    const userImage = sessionStorage.getItem("userImage");
    if (userImage) {
        profileImageElement.src = userImage;
    }
}
