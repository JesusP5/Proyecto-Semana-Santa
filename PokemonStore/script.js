
const PokemonStore = `[
    {
        "name": "Bulbasaur",
        "price": "200",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        "description": "Se puede ver a Bulbasaur durmiendo la siesta a la luz del sol. Hay una semilla en su espalda. Al absorber los rayos del sol, la semilla crece progresivamente más grande.",
        "amount": "10"
    },
    {
        "name": "Charmander",
        "price": "200",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        "description": "La llama que tiene en la punta de la cola es una prueba de su salud. Si la llama está sana y vigorosa, la criatura está en buena forma.",
        "amount": "10"
    },
    {
        "name": "Squirtle",
        "price": "200",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        "description": "Cuando retrae su largo cuello en su caparazón, lo protege de manera eficaz. Además, usa su cola para equilibrarse mientras nada.",
        "amount": "10"
    }
    ]`;
    function Additem(n) {
   
        console.log(n);
        // let singleValue = PokemonData.find((element) => element.name === "Bulbasaur");
        // let cart = localStorage.getItem("cart");
        // if (cart == null) {
        //     let products = [];
        //     products.push(singleValue);
        //     localStorage.setItem("cart", JSON.stringify(products));
        // } else {
        //     let products = JSON.parse(cart);
        //     products.push(singleValue);
        //     localStorage.setItem("cart", JSON.stringify(products));
        // }
        // console.log(singleValue);
    
    }
const PokemonData = JSON.parse(PokemonStore);
console.log(PokemonData);
window.onload = function () {
    var con = document.getElementById("container");
    for (let i = 0; i < PokemonData.length; i++) {
        
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <img src="${PokemonData[i].image}" alt="bulbasaur" width="200px">
            <h2 class="title">${PokemonData[i].name}</h2>
            <p class="subtitle">Price: $${PokemonData[i].price} </p>
            <p class="description">
            ${PokemonData[i].description}
            </p>
            <button class="btn" onclick="Additem(${PokemonData[i].name})">Agregar al carrito</button>
            `;
        con.appendChild(div);
    }
};

