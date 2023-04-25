
const PokemonStore = `[
    {
        "name": "Bulbasaur",
        "price": "200",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        "description": "Se puede ver a Bulbasaur durmiendo la siesta a la luz del sol. Hay una semilla en su espalda. Al absorber los rayos del sol, la semilla crece progresivamente más grande.",
        "amount": "10"
    },

    {
        "name": "Venusaur",
        "price": "2000",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        "description": "La planta florece cuando absorbe energía solar, lo cual le obliga a buscar siempre la luz del sol.",
        "amount": "5"
    },

    {
        "name": "Charmander",
        "price": "200",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        "description": "La llama que tiene en la punta de la cola es una prueba de su salud. Si la llama está sana y vigorosa, la criatura está en buena forma.",
        "amount": "10"
    },

    {
        "name": "Charizard ",
        "price": "2000",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        "description": "Escupe un fuego tan caliente que funde las rocas. Causa incendios forestales sin querer.",
        "amount": "5"
    },

    {
        "name": "Squirtle",
        "price": "200",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        "description": "Cuando retrae su largo cuello en su caparazón, lo protege de manera eficaz. Además, usa su cola para equilibrarse mientras nada.",
        "amount": "15"
    },

    {
        "name": "Blastoise ",
        "price": "2000",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
        "description": "Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón.",
        "amount": "5"
    },

{
        "name": "Caterpie",
        "price": "50",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
        "description": "Para protegerse, despide un hedor horrible por las antenas con el que repele a sus enemigos.",
        "amount": "30"
    },
{
        "name": "Gengar",
        "price": "300",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
        "description": "Para quitarle la vida a su presa, se desliza en su sombra y espera su oportunidad en silencio.",
        "amount": "5"
    },

    {
        "name": "Grovyle",
        "price": "300",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png",
        "description": "Las hojas que Grovyle tiene por el cuerpo le resultan muy útiles para camuflarse en el bosque y esconderse de los enemigos. A este Pokémon no hay quien lo supere subiendo a los árboles del bosque.",
        "amount": "10"
    },

    {
        "name": "Nidoking",
        "price": "2000",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
        "description": "Una vez que se desboca, no hay quien lo pare. Solo se calma ante Nidoqueen, su compañera de toda la vida.",
        "amount": "2"
    },

    {
        "name": "Noivern ",
        "price": "2000",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/715.png",
        "description": "Emite ondas ultrasónicas capaces de pulverizar rocas enormes. Posee un carácter cruel.",
        "amount": "5"
    }


    ]`;

    //const carritoAlmacenado = JSON.parse(localStorage.getItem("carrito"));
    const carrito = [];


//anadir un item al carrito
function Additem(n,m) {
    var price1 = m;
    var cantidad1 = 0;
    var img1="";

    console.log(n);
    console.log(m);

    if (carrito.find( item => item.name === n)) { 

        cantidad1 = (carrito.find(item => item.name === n).cantidad) + 1;
        price1 = m*cantidad1;

        carrito.find(item => item.name === n).price = price1; 
        carrito.find(item => item.name === n).cantidad = cantidad1; 
        /*let pkmnItem = {
            name: n,
            price: m,
            cantidad: 1
        };*/

    }
    else{
        const PokemonData = JSON.parse(PokemonStore);
        var img1 = PokemonData.find(item => item.name === n).image;
        let pkmnItem = {
            name: n,
            price: m,
            img:  img1,
            cantidad: 1
        };
        
        carrito.push(pkmnItem);
    }
    console.log(carrito);
    localStorage.setItem("carrito",JSON.stringify(carrito));
    let cantidadtotal=0;
    for(let i = 0; i < carrito.length; i++){
        cantidadtotal += carrito[i].cantidad;
    }
    document.getElementById("contador-carrito").innerText = cantidadtotal;
}
//display carrito

const PokemonData = JSON.parse(PokemonStore);
console.log(PokemonData);

//generar tarjetas con json
window.onload = function () {
    var con = document.getElementById("container");
    for (let i = 0; i < PokemonData.length; i++) {

        const div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <img src = "${PokemonData[i].image}" alt = "bulbasaur" width="200px">
            <h2 class="title">${PokemonData[i].name}</h2>
            <p class="subtitle">Price: $${PokemonData[i].price} </p>
            <p class="description">
            ${PokemonData[i].description}
            </p>
            <button class="btn" onclick="Additem('${PokemonData[i].name}','${PokemonData[i].price}')">Agregar al carrito</button>
            `;

        con.appendChild(div);
    }
};
//Aumenta contador al carrito

