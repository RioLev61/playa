var nombre = document.getElementById("nombre");
var correo= document.getElementById("correo");
var celu = document.getElementById("celu");
var error = document.getElementById("error");
error.style.color = "red";
function enviarForm(){
    var mensajeError = [];
    if(nombre.value === null || nombre.value === ""){
        mensajeError.push("Ingresa tu nombre");
    }
    if(correo.value === null || correo.value === ""){
        mensajeError.push("Ingresa tu correo electrónico");
    }
   
    if (celu.value === null || celu.value === ""){
        mensajeError.push("Ingresa tu numero de celular");
}
      error.innerHTML = mensajeError.join(". ");

    return false;
}




 