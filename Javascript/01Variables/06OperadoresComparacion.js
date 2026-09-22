// Variables:
const a = 5;
const b = 1;
const c = 10;
const d = 20;
const e = '10'

// Operaciones:
const resultado_uno = a > b; // True
const resultado_dos = c > d; // False
// El "==" NO verifica el tipo de dato:
const resultado_tres = c == c; // True
// El "===" verifica el tipo de dato:
const resultado_cuatro = c === e; // False
// Operador Terniario es una condicional:
const resultado_cinco = a > b ? `El numero ${a} es mayor al numero ${b}` : `El numero ${b} es mayor al numero ${a}`

// Impresion de resultados:
console.log(`El numero ${a} es mayor a ${b}: ${resultado_uno}`);
console.log(`El numero ${c} es mayor a ${d}: ${resultado_dos}`);
console.log(`El numero ${c} es igual a ${c}: ${resultado_tres}`);
console.log(`El numero ${c} es igual a ${c} en tipo de dato: ${resultado_cuatro}`);
console.log(resultado_cinco)
