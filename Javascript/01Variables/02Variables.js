// var se usaba antes:
var nombre = "Meowchele"; // Variable tipo texto
var edad = 24; // Variable tipo numerico 
var acceso = true; // Variable de tipo boleano
var denegacion = null; // Variable nula

// Actualmente se usa let:
let correo = "correo@correo.com";

// Para mayor seguridad se usa const ya que este valor no se puede cambiar:
const login = true;

// Otra forma de declarar variables:
let telefono, pais, id;

telefono = 1234567891
pais = "Mexico"
id = 1234

correo = 1234; // Con let o var, el valor se puede cambiar el valor desde otra parte del codigo, con const no pasa
// login = false;

// Para agregar comillas en las cadenas de texto, se utilizan los dos tipos de comillas:
const parrafo = 'Ijole "Ijole en comillas"';

// Impresion de resultados:
console.log(login);
console.log(correo);

console.log(`Datos usuario: 
    Pais: ${pais}
    Id: ${id}
    Telefono: ${telefono}`);

console.log(parrafo)
