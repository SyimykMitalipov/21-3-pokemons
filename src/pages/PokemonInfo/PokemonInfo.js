import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPokemon } from '../../api/fetchPokemons';
const PokemonInfo = () => {
  const [ pokemon, setPokemon ] = useState();
  const { id } = useParams();
  

  useEffect(() => {
    getPokemon(id).then((data => setPokemon(data)));
  }, [ id ])
  console.log(pokemon);
  return (
    <div>
      <img src={pokemon?.sprites.other.dream_world.front_default}  alt='fd' />
      <h4>{pokemon?.height}sm</h4>
      <h5>{pokemon?.weight} 
grams</h5>
    </div>
  )
}

export default PokemonInfo


/// rafce;