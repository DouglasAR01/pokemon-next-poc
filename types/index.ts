export type Pokemon = {
  id: number,
  pokedex_id: number,
  name: string,
  pokedex: string,
  image: string
}


export interface PokemonWithFav extends Pokemon {
  favorite: boolean
}