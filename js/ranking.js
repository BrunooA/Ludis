document.addEventListener("DOMContentLoaded", () => {
    const rankingBody = document.getElementById("rankingBody");

    const ranking = JSON.parse(localStorage.getItem("ranking")) || [];

    ranking.sort((a, b) => b.pontos - a.pontos);

    ranking.forEach((user, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>
                <img src="${user.profileImage || 'default-avatar.png'}" alt="Foto de ${user.nome}" class="rounded-circle" width="50" height="50">
            </td>
            <td>${index + 1}º ${user.nome}</td>
            <td>${user.email}</td>
            <td>${user.pontos}</td>
        `;

        rankingBody.appendChild(row);
    });
});
