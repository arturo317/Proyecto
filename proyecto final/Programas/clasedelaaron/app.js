/*function tabladeMultiplicar(){

}*/

/* Plantillas literales
son cadenas literales que habilitan el uso de expresiones incrustadas.
con ellas es posible utilizar cadenas de caracteres de mas de una linea, y funcionalidades 
de interpolacion de cadenas de caracteres 
LAS PLANTILLAS DE CADENA de caracteres pueden contener marcadores, identidicados por el signo
de dolar($) y envueltos en llaves {exp} ${exp}.

LAS EXPRESIONES CONTENIDAS EN LOS MARCADORES, junto con el texto entre ellas, son enviados como
argumentos a una funcion */
let nombre = "Arturo";
console.log(`
    Saludo:
    ${nombre}
`); 
document.write(nombre + "<br/>")
//alt+96 para sacar comillas invertidas

let nombre1 = "Arturo";
console.log(`
    Saludo:
    ${nombre1}
`);
console.log(`Saludo:${nombre1}`);
console.log(`Nombre:${nombre1.toUpperCase()}`);
document.write(`Saludo:${nombre1}`);
/*uno de los mayores problemas con variables var
es que pueden sobreeescribir las variables sin errores
En una aplicacion pequeña es posible que no se encuentre con este tipo de problema
pero cuando el codigo es grande, puede sobreescribir accidentalmente una varible que no tenia
la intencion de sobreeescribirla debido a este comportamiento nos arroja error recomendacion declar
las variables de tipo var */

let estado = true;
if(estado){
    let estado=false;
    console.log(estado);
    document.write(estado + "<br/>")
}
console.log(estado);
document.write(estado + "<br/>")

/*VARIABLES TIPO SCOPE
en simples palabras el scope de una variable hace referencia al lugar donde va a vivir
o podra ser accesible  */

var estado1 = true;
if(estado1){
    var estado1=false;
    console.log(estado1);
    document.write(estado1 + "<br/>")
}
console.log(estado1);
document.write(estado1 + "<br/>")


const  array =[];
array[0]=["Elemento"];
console.log(array);
document.write(array + "<br/>")
/*ARRAY es importante comprender que los objetos incluidos los arreglos y las funciones asignados
auna varibale mediante el uso de "const" siguen siendo mutables.
EL USO DE CONST SOLO EVITA LA REASIGNACION DEL IDENTIFICADOR DE VARIABLE*/
const frutas=["melon", "manzana",];
frutas.push("sandia")
console.log(frutas)
document.write(frutas + "<br/>")
/*el metodo push añade uno o mas elementos al final del arreglo y devuelve la nueva longitud del arreglo
EL METODOUNSHIFT() Agrega 1 o mas elementos al inicio del arreglo y devuelve la nueva longitud 
del arreglo
 */
const frutas1=["melon", "manzana",];
frutas1.push("sandia")
frutas1.unshift("nada")
console.log(frutas1)
const frutaEliminada=["melon", "manzana",];
frutaEliminada.pop();
console.log(frutaEliminada)
document.write(frutas1 + "<br/>")
/*el metodo pop elimina el ultimo elemento y cambia la longitud del array o del arreglo const*/
/*PRACTICA CARRITO DE COMPRAS 
EL OBJETIVO ES  crear una aplicacion que nos permita ir agregando elementos a un carrito de
compras */
const carrito=[];
let agregar = prompt("elige una fruta");
confirm('Hola')
carrito.push(agregar);
console.log(carrito);
document.write(carrito + "<br/>")



