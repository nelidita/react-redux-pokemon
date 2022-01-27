import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import fetchPokemon from '../../redux/actions/buscardorAction';

const BuscadorPokemon = () => {

  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState('mewtwo')

  const searchingPokemon = (event) => {
    setPokemonName(event.target.value)
  };

  const actionSearching = () => {
    dispatch(fetchPokemon(pokemonName));
  };

  return (
    <div className="form-group">
      <label htmlFor="buscar_pokemon" className="text-white">Buscar Pokemon</label>
      <input type="text" className="form-control" id="buscar_pokemon"
        value={pokemonName}
        onChange={searchingPokemon}
      />
      <button className="btn btn-primary mt-3" onClick={actionSearching}>Enviar</button>
    </div>
  );
};

export default BuscadorPokemon;
