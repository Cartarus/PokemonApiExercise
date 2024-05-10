import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/pokemons';

interface PokemonsFavouriteState{
    favorites:{[Key:string]:SimplePokemon}
}

// const getInicialState = ():PokemonsFavouriteState => {
//   const favourites = JSON.parse(localStorage.getItem('favourite-pokemons')?? '{}')
//   return favourites;
// }

const initialState: PokemonsFavouriteState = {
  favorites:{},
    // ... getInicialState()
    // '1': {id:'1',name:'bulbasaur'},
    // '6': {id:'6',name:'Charizard'},
    // '9': {id:'9',name:'Blastoise'},
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons(state,action:PayloadAction<{[Key:string]:SimplePokemon}>){
      state.favorites = action.payload
    },
    toogleFavourite(state,action:PayloadAction<SimplePokemon>) {

        const pokemon = action.payload;
        const {id} = pokemon

        if (!!state.favorites[id]) {
            delete state.favorites[id]
            // return;
        }else{
          state.favorites[id] = pokemon;
        }
        localStorage.setItem('favourite-pokemons',JSON.stringify(state.favorites))
    }
  }
});

export const {toogleFavourite, setFavoritePokemons} = pokemonsSlice.actions

export default pokemonsSlice.reducer