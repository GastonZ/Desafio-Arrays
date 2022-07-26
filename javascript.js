

const pizzas = ["vegana" , "carnivora", "de piña"]


let pizza1 = "vegana";
let precio1 = 100;

let pizza2 = "carnivora";
let precio2 = 120;

let pizza3 = "de piña";
let precio3 = 80;

let pizza4 = "sorpresa";
let precio4 = 99;

let elige = prompt("Bievenido a la Pizzeria \n A continuacion elige la pizza que quieras comprar \n Vegana - Carnivora - Piña - Sorpresa (Pizza Aleatoria)")

function cena() {
    if(elige == "Vegana" || elige == "vegana"){
        alert(`Elegiste la pizza ${pizza1}, su precio es de $${precio1}`)
    }
    else if(elige == "Carnivora" || elige == "carnivora"){
        alert(`Elegiste la pizza ${pizza2}, su precio es de $${precio2}`)
    }
    else if(elige == "Piña" || elige == "piña"){
        alert(`Elegiste la pizza ${pizza3}, es en serio ? su precio es de $${precio3}`)
    }
    else if(elige == "Sorpresa" || elige == "sorpresa"){
        alert(`Dios te bendijo o maldijo con la pizza ${pizzas[Math.floor(Math.random() * pizzas.length)]}, disfrutala! Por tu valor o mala suerte, el precio es de ${precio4}`)
    }
    else{
        alert(`No tenemos esa pizza en el menú`)
    }

}
function mostrarCena() {
    if(elige == "Vegana" || elige == "vegana"){
        document.write(`Aqui tiene su pizza 'Pretenda que aqui esta la imagen de una pizza muy ${pizza1} \n la cuenta es de ${precio1}`)
    }
    else if(elige == "Carnivora" || elige == "carnivora"){
        document.write(`Aqui tiene su pizza 'Pretenda que aqui esta la imagen de una pizza muy ${pizza2} \n la cuenta es de ${precio2}`)        
    }
    else if(elige == "Piña" || elige == "piña"){
        document.write(`Aqui tiene su pizza 'Pretenda que aqui esta la imagen de una bella pizza' \n la cuenta es de ${precio3}`)        
    }
    else if(elige == "Sorpresa" || elige == "sopresa"){
        document.write(`Aqui tiene su pizza 'Pretanda que aqui esta su pizza'`)
    }
    else{
        break_
    }

}

function tengoDemasiadasPizzas() {
    let mas = prompt("Gracias por tu compra, tienes una pizza de regalo, te gustaria agregar una pizza extra ? \n 1 para agregar mas, 2 para terminar el pedido");

    if(mas == 1){
        pizzas.push((document.write)('<br> Tambien estas llevando una pizza extra, muchas gracias !'))
    }
    else{
        document.write('<br> Aun no puedo creer que hayas rechazado mi oferta')
    }
}
cena()
mostrarCena()
tengoDemasiadasPizzas()



/* 1- Si se elige "Vegana", dar su nombre y precio
   2- Si se elige "Carnivora, dar su nombre y precio
   3- Si se elige "Piña", dar aleatoriamente pizza Vegana o Carnivora"  */


  // ${pizzas[Math.floor(Math.random() * pizzas.length)]}  Algoritmo de pizzas aleatorias