///////////////////////////////////7------carrito de frutas-------/////////////////////////////////////7
const carrito=[];
const añadir = prompt("Elige una fruta :) ");
carrito.push(añadir);
while( confirm('deseas agregar esto al carrito')){

    const añadir = prompt("Añade otra fruta");
   
    carrito.push(añadir);
}

console.log(carrito);
document.write(carrito)
