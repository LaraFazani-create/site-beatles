// Validação do formulário de contato em JavaScript

function mostrarErro(campo, mensagem) {
  document.getElementById("erro-" + campo).innerHTML = mensagem;
  document.getElementById(campo).style.borderColor = "red";
}

function limparErro(campo) {
  document.getElementById("erro-" + campo).innerHTML = "";
  document.getElementById(campo).style.borderColor = "#ccc";
}

function validarFormulario() {
  var nome = document.getElementById("nome").value.trim();
  var email = document.getElementById("email").value.trim();
  var telefone = document.getElementById("telefone").value.trim();
  var assunto = document.getElementById("assunto").value;
  var mensagem = document.getElementById("mensagem").value.trim();
  var valido = true;

  // Nome
  if (nome == "") {
    mostrarErro("nome", "Preencha o nome.");
    valido = false;
  } else if (nome.length < 3) {
    mostrarErro("nome", "O nome deve ter pelo menos 3 letras.");
    valido = false;
  } else {
    limparErro("nome");
  }

  // E-mail
  if (email == "") {
    mostrarErro("email", "Preencha o e-mail.");
    valido = false;
  } else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
    mostrarErro("email", "Digite um e-mail válido.");
    valido = false;
  } else {
    limparErro("email");
  }

  // Telefone
  if (telefone == "") {
    mostrarErro("telefone", "Preencha o telefone.");
    valido = false;
  } else if (isNaN(telefone) || telefone.length < 10 || telefone.length > 11) {
    mostrarErro("telefone", "Digite só números, com DDD (10 ou 11 dígitos).");
    valido = false;
  } else {
    limparErro("telefone");
  }

  // Assunto
  if (assunto == "") {
    mostrarErro("assunto", "Escolha um assunto.");
    valido = false;
  } else {
    limparErro("assunto");
  }

  // Mensagem
  if (mensagem == "") {
    mostrarErro("mensagem", "Escreva uma mensagem.");
    valido = false;
  } else if (mensagem.length < 10) {
    mostrarErro("mensagem", "A mensagem deve ter pelo menos 10 caracteres.");
    valido = false;
  } else {
    limparErro("mensagem");
  }

  // Resultado
  if (valido) {
    document.getElementById("sucesso").innerHTML = "Mensagem enviada com sucesso!";
    document.getElementById("formContato").reset();
  } else {
    document.getElementById("sucesso").innerHTML = "";
  }

  return false; // não recarrega a página
}
