// interface PokemonType {
//   type: {
//     name: string;
//   };
// }

// interface PokemonStat {
//   stat: {
//     name: string;
//   };
//   base_stat: number;
// }

// interface PokemonSprites {
//   front_default: string;
// }

// interface Pokemon {
//   id: number;
//   name: string;
//   types: PokemonType[];
//   stats: PokemonStat[];
//   sprites: PokemonSprites;
// }

// const input = document.getElementById("input") as HTMLInputElement;
// const button = document.getElementById("btn") as HTMLButtonElement;
// const container = document.getElementById("pokemonContainer") as HTMLElement;

// async function fetchPokemon(nameOrId: string): Promise<Pokemon> {
//   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId.toLowerCase()}`);
  
//   if (!response.ok) {
//     throw new Error("Pokemon not found");
//   }
  
//   return await response.json();
// }

// function renderPokemon(pokemon: Pokemon): void {
//   container.innerHTML = `
//     <div class="pokemon-info">
//       <h2 class="pokemon-name">${pokemon.name}</h2>
//       <p class="pokemon-id">#${pokemon.id.toString()}</p>
//       <img class="pokemon-image" src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
      
//       <div class="pokemon-types">
//         ${pokemon.types.map(type => 
//           `<span class="type-badge type-${type.type.name}">${type.type.name}</span>`
//         ).join(' ')}
//       </div>
      
//       <div class="pokemon-stats">
//         ${pokemon.stats.map(stat => `
//           <div class="stat-item">
//             <span class="stat-name">${stat.stat.name.replace('-', ' ')}</span>
//             <span class="stat-value">${stat.base_stat}</span>
//           </div>
//         `).join(' ')}
//       </div>
//     </div>
//   `;
// }

// async function handleSearch(): Promise<void> {
//   const term = input.value.trim();
  
//   if (!term) return;
  
//   container.classList.add('loading');
//   container.innerHTML = '<p>Loading...</p>';
  
//   try {
//     const pokemon = await fetchPokemon(term);
//     renderPokemon(pokemon);
//   } catch (error) {
//     container.innerHTML = `<p class="error-message">Error: ${(error as Error).message}</p>`;
//   } finally {
//     container.classList.remove('loading');
//   }
// }

// button.addEventListener("click", handleSearch);
// input.addEventListener("keypress", (e) => {
//   if (e.key === "Enter") handleSearch();
// });

// window.addEventListener("load", () => {
//   input.value = "pikachu";
//   handleSearch();
// });
