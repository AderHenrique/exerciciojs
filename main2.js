function validaN(a, b) {
  if (a >= b) {
    return false;
  } else {
    return true;
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const mensagemSucesso = `Formulário valido , parabéns!!`;

  let numero1 = document.getElementById("n1");
  let numero2 = document.getElementById("n2");

  const valueN1 = numero1.value;
  const valueN2 = numero2.value;

  formValidation = validaN(valueN1, valueN2);
  if (formValidation && true) {
    const containerMensagemSucesso = document.querySelector(`.success-message`);
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = "block";
  } else {
    alert("Formulário inválido, por favor tente novamente");
  }
});
