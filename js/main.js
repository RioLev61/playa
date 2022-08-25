var nombre = document.getElementById("nombre");
var correo= document.getElementById("correo");
var celu = document.getElementById("celu");
var error = document.getElementById("error");
var oki = document.getElementById("oki");
oki.style.color = "blue";


/*
function formOki(){
    var mensajeOki = [];
   
    if(nombre.value === null || nombre.value === ""){
        mensajeOki.push("Ingresa tu nombre");
    }
    if(correo.value === null || correo.value === ""){
        mensajeOki.push("Ingresa tu correo electrónico");
    }
   
    if (celu.value === null || celu.value === ""){
        mensajeOki.push("Ingresa tu numero de celular");
}
      error.innerHTML = mensajeOki.join(". ");

    return false;
}
*/
var form = document.getElementById("formulario");
form.addEventListener("submit", function(evt){
    evt.preventDefault();
    var mensajeOki = [];
   
    if(nombre.value === null || nombre.value === ""){
        mensajeOki.push("Ingresa tu nombre");
    }
    if(correo.value === null || correo.value === ""){
        mensajeOki.push("Ingresa tu correo electrónico");
    }
   
    if (celu.value === null || celu.value === ""){
        mensajeOki.push("Ingresa tu numero de celular");
}
      error.innerHTML = mensajeOki.join(". ");


})