
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copiar  = document.getElementById("copy");
const encriptado  = document.getElementById("encriptado");
const encriptar  = document.getElementById("encriptar");
const div = document.getElementById("txt")
function validateTextarea(event) {

  // Obtenemos el valor del campo de texto
  const texto = event.target.value;

  // Expresión regular que solo permite caracteres alfabéticos minúsculos y espacios
  const regex = /^[a-z\s]+$/;

  // Comprobamos si el valor del campo de texto cumple con la expresión regular
  if (!regex.test(texto)) {
    // Si no cumple, mostramos un mensaje de error
    alert("Solo se permiten caracteres alfabéticos minúsculas y espacios");

    // Limpiamos el campo de texto
    event.target.value = "";
  }
}

// Asociamos la función a el evento "keyup" del campo de texto
document.getElementById("texto").addEventListener("keyup", validateTextarea);

//creamos funciones para los botones
function btnEncriptar(){
  const textoEncriptado = encriptador(textArea.value)
  mensaje.value = textoEncriptado
  textArea.value="";
  mensaje.style.backgroundImage ="none";
  copiar.style.visibility="visible";
  div.style.display="none"; 
}
function btnDesencriptar(){
  const textoDesencriptar = desencriptar(textArea.value)
  mensaje.value = textoDesencriptar
  textArea.value="";
  encriptar.style.visibility="visible";
}
function btncopiar(){
  const copiar = mensaje.value;
  navigator.clipboard.writeText(copiar);
  alert("Texto copiado al portapapeles");
  mensaje.value = ""
  encriptado.style.visibility= "visible";
}
/* Creamos una funcion para tomar el texto y encripatrlo segun platemiento del problem  
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/
function encriptador(textArea) {
  let resultado = "";
  for (const letra of textArea) {
    switch (letra) {
      case "a":
        resultado += "ai";
        break;
      case "e":
        resultado += "enter";
        break;
      case "i":
        resultado += "imes";
        break;
      case "o":
        resultado += "ober";
        break;
      case "u":
        resultado += "ufat";
        break;
      default:
        resultado += letra;
    }
  }
  return resultado;
}
//creamos funcion para tomar texto encrptado y desencriptar vocales 
function desencriptar(mensaje) {
  return mensaje.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
}