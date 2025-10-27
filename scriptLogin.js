function handleLogin(event) {
    if (event && event.preventDefault) event.preventDefault(); // impede envio padrão

    const cpf = document.getElementById("cpf").value;
    const senha = document.getElementById("senha").value;

    console.log("CPF:", cpf, "Senha:", senha);

    if (cpf === "123.456.789-00" && senha === "senha123") {
        alert("Login bem-sucedido!");
        window.location.href = "paginaUsuario.html";
    } else {
        alert("CPF ou senha inválidos. Tente novamente.");
    }
}

document.getElementById("loginForm").addEventListener("submit", handleLogin);

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