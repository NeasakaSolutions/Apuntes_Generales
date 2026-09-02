// Arrays:
const arreglo = [1, 10, 5, 'texto', true, {propiedad: 'valor'}, [1, 2, 3]];

// Objeto:
const persona = {
    nombre: 'Meowchele',
    edad: 24,
    pc: {
        marca: 'hp',
        color: 'azul'
    }
};

// Impresion de resultados:
console.log(arreglo); // Muestra todos los datos del arreglo
console.log(persona); // Mestra los datos del objeto

// Acceder a datos del objeto de forma individual:
console.log(`Nombre: ${persona.nombre} su laptop es de marca ${persona.pc.marca}`)

