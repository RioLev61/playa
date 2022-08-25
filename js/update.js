var args = location.search.substr(1).split('&');
// lee los argumentos pasados a este formulario
var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
console.log(args)
document.getElementById("txtId").value = parts[0][1]
document.getElementById("txtNombre").value = parts[1][1]
document.getElementById("txtImagen").value = parts[2][1]
document.getElementById("txtSubtitulo").value = parts[3][1]
document.getElementById("txtDescripcion").value = parts[4][1]
function modificar() {
    let id = document.getElementById("txtId").value
    let n = document.getElementById("txtNombre").value
    let i = document.getElementById("txtImagen").value
    let s = document.getElementById("txtSubtitulo").value
    let d = document.getElementById("txtDescripcion").value
    let lugar = {
        nombre: n,
        imagen: i,
        subtitulo: s,
        descripcion: d
    }
    let url = "http://localhost:5000/lugares/"+id
    var options = {
        body: JSON.stringify(lugar),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al Modificar")
        })      
}
