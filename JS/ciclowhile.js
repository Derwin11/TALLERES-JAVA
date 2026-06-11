let contraseña
let clave = 123;
do {
    contraseña = parseInt(prompt("Ingrese su contraseña"));
    console.log("contrasña incorrecta: $(contraseña)");

} while (contraseña !== clave);