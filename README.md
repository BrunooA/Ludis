# Sistema de Educação Hospitalar Interativa

Este projeto é um sistema educacional voltado para ambientes hospitalares, com funcionalidades que promovem a aprendizagem, interação e suporte ao usuário no contexto do SUS.

## 📁 Estrutura do Projeto

O sistema é composto pelas seguintes páginas:

---

### 📄 `cadastro.html`
Página para criar um novo usuário.
- Campos: Nome, Email, Senha, Foto de Perfil (upload ou avatar).
- Os dados são salvos no `localStorage`.
- A imagem pode ser carregada do dispositivo ou escolhida entre avatares disponíveis.

---

### 📄 `editar_perfil.html`
Permite alterar dados do usuário.
- Editáveis: Telefone e imagem de perfil.
- Não editáveis: Nome e Email.
- Atualiza as informações no `localStorage`.

---

### 📄 `home.html`
Página principal após o login.
- Exibe o nome e a imagem do usuário.
- Contém menu lateral com links para as demais páginas.
- Acessível somente após login.

---

### 📄 `login.html`
Tela de autenticação.
- Usuário informa email e senha.
- Se válidos, os dados são carregados no `sessionStorage` e o usuário é redirecionado para `home.html`.

---

### 📄 `mapa.html`
Apresenta um mapa interativo.
- Mostra pontos relevantes como hospitais ou centros de apoio.
- Pode utilizar um iframe com Google Maps ou similar.

---

### 📄 `perfil.html`
Exibe as informações do usuário logado.
- Mostra nome e foto de perfil.
- Botão para ir para a edição de perfil.
- Permite escolher avatares como foto de perfil.
- Dados extraídos do `sessionStorage`.

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

### 📄 `redefinir_senha.html`
Permite redefinir a senha do usuário.
- O usuário informa o email e cria uma nova senha.
- Atualiza os dados no `localStorage`.

---

### 📄 `sobre_nos.html`
Página institucional.
- Explica os objetivos do projeto.
- Apresenta a equipe e o contexto (pedagogia hospitalar no SUS).

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
- JavaScript (Vanilla JS)
- Armazenamento via `localStorage` e `sessionStorage`

---