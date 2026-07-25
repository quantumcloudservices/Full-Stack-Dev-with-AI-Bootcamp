const input = document.getElementById("input");
const button = document.getElementById("btn");
const container = document.getElementById("pokemonContainer");

// Fetch the pokemon data
async function fetchPokemon(nameOrId) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId.toLowerCase()}`);
    if (!response.ok) {
        throw new Error("Pokemon not found");
    }
    return await response.json();
}

// Rendering the pokemon
function renderPokemon(pokemon) {
    const types = document.querySelector(".pokemon-types");
    const stats = document.querySelector(".pokemon-stats");
    const nameElement = document.querySelector(".pokemon-name");
    const PokemonID = document.querySelector(".pokemon-id");
    const imageElement = document.querySelector(".pokemon-image");
    types.innerHTML = '';
    stats.innerHTML = '';
    nameElement.textContent = pokemon.name;
    PokemonID.textContent = `#${pokemon.id.toString().padStart(3, '0')}`;
    imageElement.src = pokemon.sprites.front_default;
    imageElement.alt = pokemon.name;
    pokemon.types.forEach(type => {
        const typeBadge = document.createElement('span');
        typeBadge.className = `type-badge type-${type.type.name}`;
        typeBadge.textContent = type.type.name;
        types.appendChild(typeBadge);
    });
    pokemon.stats.forEach(stat => {
        const statItem = document.createElement('div');
        statItem.className = 'stat-item';
        const statName = document.createElement('span');
        statName.className = 'stat-name';
        statName.textContent = stat.stat.name.replace('-', ' ');
        const statValue = document.createElement('span');
        statValue.className = 'stat-value';
        statValue.textContent = stat.base_stat;
        statItem.appendChild(statName);
        statItem.appendChild(statValue);
        stats.appendChild(statItem);
    });
}

// Searching the pokemon
async function handleSearch() {
    const term = input.value.trim();
    if (!term) return;
    container.classList.add('Fetching_Pokémon…');
    const nameElement = document.querySelector(".pokemon-name");
    const PokemonID = document.querySelector(".pokemon-id");
    const imageElement = document.querySelector(".pokemon-image");
    const types = document.querySelector(".pokemon-types");
    const stats = document.querySelector(".pokemon-stats");
    nameElement.textContent = 'Fetching Pokémon…';
    PokemonID.textContent = '';
    imageElement.src = '';
    types.innerHTML = '';
    stats.innerHTML = '';
    try {
        const pokemon = await fetchPokemon(term);
        renderPokemon(pokemon);
    } catch (error) {
        types.innerHTML = '';
        stats.innerHTML = '';
        nameElement.textContent = 'Pokemon not found';
        PokemonID.textContent = '';
        imageElement.src = '';
        stats.innerHTML = `<p class="error-message">Error: ${error.message}</p>`;
    } finally {
        container.classList.remove('Fetching Pokémon...');
    }
}

button.addEventListener("click", handleSearch);
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleSearch();
});
