const form = document.getElementById("cadastroForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const senha = document.getElementById("senha").value;
  const confirmaSenha = document.getElementById("confirmaSenha").value;

  if (senha !== confirmaSenha) {
    alert("Senha errada!");
    return;
  }

  alert("Cadastro realizado com sucesso!");
  form.reset();
});

loginLink.addEventListener("click", function(event) {
    event.preventDefault();
    alert("Redirecionando para a página de login...");
    window.location.href = "index.html"; //Redireciona para a página de login
  });
