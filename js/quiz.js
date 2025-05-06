document.addEventListener("DOMContentLoaded", () => {
    const quizForm = document.getElementById("quizForm");

    // Verificar se usuário está logado
    const currentUserEmail = sessionStorage.getItem("usuarioLogado");
    if (!currentUserEmail) {
        alert("Você precisa estar logado para acessar o quiz.");
        window.location.href = "login.html";
        return;
    }

    quizForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let pontuacao = 0;

        const respostasCorretas = {
            question1: "Brasília",
            question2: "Machado de Assis",
            question3: "Ásia"
        };

        Object.keys(respostasCorretas).forEach((questionId) => {
            const selected = quizForm.querySelector(`input[name="${questionId}"]:checked`);
            if (selected && selected.value === respostasCorretas[questionId]) {
                pontuacao++;
            }
        });

        // Buscar usuários do localStorage
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        const usuario = usuarios.find(u => u.email === currentUserEmail);

        if (!usuario) {
            alert("Usuário não encontrado.");
            return;
        }

        const novoRegistro = {
            nome: usuario.nome,
            email: usuario.email,
            pontos: pontuacao
        };

        const ranking = JSON.parse(localStorage.getItem("ranking")) || [];

        // Atualizar se já existe o email
        const indexExistente = ranking.findIndex(u => u.email === usuario.email);
        if (indexExistente !== -1) {
            ranking[indexExistente].pontos = Math.max(ranking[indexExistente].pontos, pontuacao);
        } else {
            ranking.push(novoRegistro);
        }

        localStorage.setItem("ranking", JSON.stringify(ranking));

        alert(`Quiz finalizado! Você fez ${pontuacao} ponto(s).`);
        window.location.href = "ranking.html";
    });
});

document.getElementById("quizForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const respostasCorretas = {
        question1: "Brasília",
        question2: "Machado de Assis",
        question3: "Ásia"
    };

    let pontuacao = 0;
    for (let key in respostasCorretas) {
        const respostaSelecionada = document.querySelector(`input[name="${key}"]:checked`);
        if (respostaSelecionada && respostaSelecionada.value === respostasCorretas[key]) {
            pontuacao++;
        }
    }

    // Pegando o usuário logado
    const usuarioLogado = JSON.parse(sessionStorage.getItem("usuarioLogado"));

    if (usuarioLogado) {
        let ranking = JSON.parse(localStorage.getItem("ranking")) || [];

        // Verifica se o usuário já está no ranking
        const index = ranking.findIndex(u => u.email === usuarioLogado.email);
        if (index !== -1) {
            ranking[index].pontuacao = pontuacao; // Atualiza
        } else {
            ranking.push({
                nome: usuarioLogado.name,
                email: usuarioLogado.email,
                pontuacao: pontuacao
            });
        }

        localStorage.setItem("ranking", JSON.stringify(ranking));
        window.location.href = "ranking.html";
    }
});
