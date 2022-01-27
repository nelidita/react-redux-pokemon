import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buy_pokemon_action, return_pokemon_action } from '../redux/actions/gameShopAction'

const CompraPokemon = () => {

  const dispatch = useDispatch();
  const game_shop = useSelector(state => state.game_shop.pokemon);

  // useEffect(() => {
  //   dispatch()
  // });

  return (
    <>
      <button className="btn btn-dark btn-sm mb-2" onClick={() => { dispatch(buy_pokemon_action(5)) }}>Comprar Pokemon</button>
      <button className="btn btn-dark btn-sm" onClick={() => { dispatch(return_pokemon_action(1)) }}>Devolver Pokemon</button>
    </>
  )
};

export default CompraPokemon;
