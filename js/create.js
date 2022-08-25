function guardar() {
 
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
    let url = "http://localhost:5000/lugares"
    var options = {
        body: JSON.stringify(lugar),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
       // redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
 
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}
