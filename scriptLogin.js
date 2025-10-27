document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); //Impede o envião padrão do formulário

    //Definindo as variáveis necessárias 
    const cpf = document.getElementById("cpf").value;
    const senha = document.getElementById("senha").value;

   console.log("CPF:", cpf, "Senha:", senha);

   if(cpf == "123.456.789-00" && senha == "senha123"){
    alert("Login bem-sucedido!");
    window.location.href = "paginaUsuario.html"; //Redireciona para a página do dashboard
   } else{
    alert("CPF ou senha inválidos. Tente novamente.");
   }
});

document.getElementById("cadastreSe").addEventListener("click", function(event){
    event.preventDefault();
    alert("Redirecionando para a página de cadastro...");
    window.location.href = "cadastro.html"; //Redireciona para a página de cadastro
});

document.getElementById("esqueceuSenha").addEventListener("click", function(event){
    event.preventDefault();
    alert("Redirecionando para a página de recuperação de senha...");
    window.location.href = "recuperarSenha.html"; //Redireciona para a página de recuperação de senha
})