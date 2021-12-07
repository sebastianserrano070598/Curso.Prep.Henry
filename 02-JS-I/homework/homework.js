// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'sebas';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 1;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  //var nuevastring = str
//return nuevastring;
return str;

}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
//return (x + y);  
var suma = x + y
return suma;

}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  //return x - y;
var resta = x - y
return resta;
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var multiplicar = x * y 
  return multiplicar;
  //return x * y;

}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var división = x / y
  return división;
 // return x / y;

}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  var igualdad = x === y
  return igualdad;
  //return x === y;
 //if (x === y) {    
 // return true;
//} else{
 // return false;
//} 
}
  

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  var mismalongitud = str1.length === str2.length
  return mismalongitud
 //return str1.length === str2.length;
 // if (str1.length === str2.length) return true
  //else{
  //return false
//}
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  //var mayorquenoventa = num < 90
 // return mayorquenoventa;
  
  
  //if (num < 90){
    //return true;
  //}else{
    //return false;
  //}
  return (num < 90); 

}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  //var mayorquecincuenta = num > 50
  //return mayorquecincuenta;
//return (num > 50); 
if (num > 50) {
  return true;
  } else {
  return false;
}
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
//var obtenerresto = x % y
//return obtenerresto;
  return ( x % y);
  
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
 // return (num % 2 === 0);
 //if (num % 2 === 0 ){
  //return true;
 //} else{
 //return false;
 //}
 var espar = (num % 2 === 0)
 return espar;
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  //var esimpar = (num % 2 !== 0)
  //return esimpar;
   return (num % 2 !== 0);

  //if (num % 2 !== 0) return true;
  //return false;
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var cuadrado = Math.pow (num,2)
  return cuadrado;
  //var cuadrado = num** 2
  //return cuadrado;
  //return num**2;
  //return Math.pow (num, 2);
  

}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  //var cubo = Math.pow (num, 3)
  //return cubo;
  //return Math.pow (num, 3);
  return num** 3;
  //var cubo = num**3
  //return cubo;
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  //var elevar = Math.pow (num, exponent)
  //return elevar;
  //return Math.pow (num, exponent);
  //return num ** exponent;
  var elevar = num ** exponent
  return elevar;


}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
 return Math.round (num);
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil (num);
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random ();
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  //if (numero > 0) {  
 //return "Es positivo"
 //}else if (numero < 0) {
 // return "Es negativo"
 //}else {
 //return false;
 //}
 var espositivo = (numero > 0)
 var esnegativo = (numero < 0)
 
 
 
 if (espositivo) {
  return "Es positivo";
 } else if (esnegativo) {
  return "Es negativo";
  } else { 
    return false; 
  }
 
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  
  //var string = str
  //var string2 ="!" 
  //return (string + string2);
  //return str + "!";
  var agregar = str + "!"
  return agregar;
  
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  //return nombre + " " + apellido;
  //var combinar  = nombre + " " + apellido
  //return combinar;
  var combinar1 = nombre   
  var combinar2 = " " + apellido
  return combinar1 + combinar2;
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return "Hola " + nombre + "!";
  //var saludo = ("Hola " + nombre + "!")
  //return saludo;
  



}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  return alto * ancho; 
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  return lado * 4;
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
return (altura * base) / 2;
}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  return euro * 1.20;
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
 //let EsVocal = letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"; 
 //let longitudCorrecta = letra.length > 1;
 //if (EsVocal) {
 //return "Es vocal";
 //} else if (longitudCorrecta) {
  //return "Dato incorrecto";
  //}
 //return "Dato incorrecto";

let esvocal = (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u")
let longitudexacta = letra.length > 1;

if (esvocal) {
  return "Es vocal";
}
else if ( letra != "a", "e", "i", "o", "u") {  
  return "Dato incorrecto";
  } else if (letra === longitudexacta ) {
 return "Dato incorrecto";
} 
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
