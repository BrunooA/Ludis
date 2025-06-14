LUDIS - Mulheres em Situação de Vulnerabilidade

Integrantes do grupo: Adryel, Amanda Rosário, Bruno, Larissa e Raissa


## 📁 Estrutura do Projeto

O sistema é composto pelas seguintes páginas:

---

### 📄 `cadastro.html`
Página para criar um novo usuário.
- Campos: Nome, Email e Senha.
- Os dados são salvos no `localStorage`.
- A imagem pode ser carregada do dispositivo ou escolhida entre avatares disponíveis.

---

### 📄 `editar_perfil.html`
Permite alterar dados do usuário.
- Editáveis: Imagem de perfil.
- Não editáveis: Nome e Email.
- Atualiza as informações no `localStorage`.

---

### 📄 `home.html`
Página principal após o login.
- Exibe a imagem do usuário.
- Contém menu lateral com links para as demais páginas.
- Contém botões que levam para mapa, rankimg e perfil.
- Acessível somente após login.

---

### 📄 `login.html`
Tela de autenticação.
- Usuário informa email e senha.
- Se válidos, os dados são carregados no `LocalStorage` e o usuário é redirecionado para `home.html`.

---

### 📄 `mapa.html`
Apresenta um mapa interativo.
- Contém botões para iniciar o quiz.

---

### 📄 `perfil.html`
Exibe as informações do usuário logado.
- Mostra nome e foto de perfil.
- Botão para ir para a edição de perfil.
- Permite escolher avatares como foto de perfil.
- Dados extraídos do `LocalStorage`.

---

### 📄 `quiz.html`
Página de quiz com perguntas de múltipla escolha.
- Ao finalizar, a pontuação do usuário é salva no `localStorage`.

---

### 📄 `ranking.html`
Mostra a classificação dos usuários com base na pontuação do quiz.
- Lista todos os usuários ordenados da maior para a menor pontuação.
- Dados extraídos do `localStorage`.

---

### 📄 `suporte.html`
Página de contato.
- Formulário para envio de dúvidas ou sugestões.
- Campos: Nome, Email, Mensagem.

---

### 📄 `tutorial.html`
Página explicativa sobre como usar o sistema.
- Explica o fluxo de navegação.
- Pode conter imagens ou vídeos de orientação.

---

## 🧠 Tecnologias Utilizadas

- HTML5
- CSS3 (incluindo Bootstrap 5)
- JavaScript
- Armazenamento via `localStorage`.
