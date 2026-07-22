const btn = document.getElementById("btn");
const input = document.getElementById("input");
const pokemonContainer = document.getElementById("pokemonContainer");
btn.addEventListener("click", async function() {
    const url = `https://pokeapi.co/api/v2/pokemon/${input.value}`;
    const response = await fetch(url);
    const data = await response.json();
    return pokemonContainer.innerHTML = `<h1>${data.name}</h1>
    <img src="${data.sprites.front_default}" alt="${data.name}">`;
});
