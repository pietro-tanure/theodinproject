export async function getPokemon() {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon")
  const pokemon = await data.json();
  return pokemon
}

getPokemon()