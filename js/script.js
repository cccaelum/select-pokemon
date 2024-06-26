const urlBase= "https://pokeapi.co/api/v2/pokemon/"; 
const fichaPokemon = document.querySelector(".fichaPokemon") 
const getPokemonBtn = document.getElementById("get-pokemon"); 

function obtenerPokemon (nombrePokemon){
fetch(urlBase + nombrePokemon)
  .then(response => response.json())
  .then(data => {
    const template = `
  <div>
    <img src="${data.sprites.front_default}" alt="${data.name}"></img>
  <ul>
    <li>
        Name: ${data.name}
    </li>
    <li>
        Type: ${data.types[0].type.name}
    </li>
    <li>
        Weight: ${data.weight}
    </li>
    <li>
        Height: ${data.height}
    </li>
  </ul>
  </div>
  `
  fichaPokemon.innerHTML = template})}

getPokemonBtn.addEventListener("click", ()=>{
    let valuePokemon = document.getElementById('pokemon-select').value
    obtenerPokemon(valuePokemon)
})

