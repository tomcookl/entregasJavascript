let divProductos = document.getElementById("productos")


fetch("https://hp-api.herokuapp.com/api/characters/students")
.then((res) => res.json())
.then ((data) =>{
    for(let personaje of data){
        let nuevoProducto = document.createElement("div")
            nuevoProducto.innerHTML = 
            `<div id="" class="card" style="">
            <div class="cardBody">
                <h4 class="title">${personaje.name}</h4>
                <p class="">${personaje.species}</p>
                <p class="">${personaje.house}</p>
                <p class="">${personaje.ancestry}</p>
            </div>
            </div>`
            divProductos.appendChild(nuevoProducto)
    }
})
