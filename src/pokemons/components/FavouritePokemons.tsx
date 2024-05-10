'use client';
import React, { useEffect, useState } from 'react'
import { PokemonGrid } from './PokemonGrid'
import { useAppSelector } from '@/store'
import { IoHeartOutline } from 'react-icons/io5';

export const FavouritePokemons = () => {

    const favPokemons = useAppSelector(state => state.pokemons.favorites)

    const favPokemonsArray = Object.values(favPokemons)

    // const [pokemons, setPokemons] = useState(favPokemonsArray)

    // useEffect(() => {
    //   setPokemons(favPokemonsArray)
      
    // }, [favPokemonsArray]);



  return (

    <>
    
    {/* <PokemonGrid pokemons={favPokemonsArray}/> */}
    {
      favPokemonsArray.length === 0
        ? <NoFavourites/>
        :<PokemonGrid pokemons={favPokemonsArray}/>
    }
  
    </>
  )
}

export const NoFavourites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500"/>
      <span>No hay favoritos</span>
    </div>
  )
}
