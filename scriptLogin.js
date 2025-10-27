document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const cpf = document.getElementById("cpf").value;
    const senha = document.getElementById("senha").value;

    try {
        const response = await fetch(`http://localhost:3000/login?cpf=${encodeURIComponent(cpf)}&senha=${encodeURIComponent(senha)}&operacao=handleLogin`);
        const data = await response.json();

        if (data.status === "sucesso") {
            alert(data.mensagem);
            window.location.href = "paginaUsuario.html";
        } else {
            alert(data.mensagem);
        }
    } catch (error) {
        alert("Erro ao conectar com o servidor.");
        console.error(error);
    }
});

document.getElementById("cadastreSe").addEventListener("click", function(event){
    event.preventDefault();
    alert("Redirecionando para a página de cadastro...");
    window.location.href = "cadastro.html";
});

document.getElementById("esqueceuSenha").addEventListener("click", function(event){
    event.preventDefault();
    alert("Redirecionando para a página de recuperação de senha...");
    window.location.href = "recuperarSenha.html";
});