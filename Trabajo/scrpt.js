function imprimir() {
    let edad = document.getElementById("edad").value;
    let nombre = document.getElementById("name").value;
    let apellido = document.getElementById("lastname").value;
    let correo = document.getElementById("email").value;

    if (edad === "" || nombre === "" || apellido === "" || correo === "") {
        alert(`Por favor ingrese todos los campos`);
    } else if (edad >= 18) {
        alert(`Hola ${nombre} ${apellido} has aplicado correctamente te contactaremos a ${correo}`);
        vaciarcampos();
       
        
    } else {
        alert(`Hola ${nombre} ${apellido} no cumples con la edad requerida`);
    }

}
function vaciarcampos() {
    document.getElementById("edad").value =""
    document.getElementById("name").value =""
    document.getElementById("lastname").value =""
    document.getElementById("email").value =""
}