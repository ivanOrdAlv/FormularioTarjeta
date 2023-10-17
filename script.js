const form = document.getElementById("formulario");
const nombreInput = document.getElementById("nombre");
const numeroInput = document.getElementById("numero");
const fechaInput = document.getElementById("fecha");
const cvvInput = document.getElementById("cvv");
const botonEnviar = document.getElementById("boton");
let now = new Date();

const formatDate = (now)=>{
    let formatted_date =  (now.getMonth() + 1) + "-" + now.getFullYear()
     return formatted_date;
    }

const tarjetaRegex = /^(51|52|53|54|55|4|34|37)\d{13,16}$/;
const fechaRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
const cvvRegex = /^\d{3}$/;

function validar() {
  const nombreValido = /^[a-zA-Z\s]{1,20}$/.test(nombreInput.value);
  const tarjetaValido = tarjetaRegex.test(numeroInput.value);
  const fechaValida = fechaRegex.test(fechaInput.value);
  const cvvValido = cvvRegex.test(cvvInput.value);

  if (nombreValido) {
    nombreInput.style.border = "1px solid green";
  } else {
    nombreInput.style.border = "1px solid red";
  }

  if (tarjetaValido) {
    numeroInput.style.border = "1px solid green";
  } else {
    numeroInput.style.border = "1px solid red";
  }

  if (fechaValida) {
    // Obtén la fecha actual en el mismo formato (MM-YY)
    const nowFormatted = formatDate(now);
    // Compara las fechas
    if (fechaInput.value >= nowFormatted) {
      fechaInput.style.border = "1px solid green";
    } else {
      fechaInput.style.border = "1px solid red";
    }
  } else {
    fechaInput.style.border = "1px solid red";
  }

  if (cvvValido) {
    cvvInput.style.border = "1px solid green";
  } else {
    cvvInput.style.border = "1px solid red";
  }

  if (nombreValido && tarjetaValido && fechaValida && cvvValido) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

form.addEventListener("input", validar);


form.addEventListener("input", validar);