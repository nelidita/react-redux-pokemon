import { combineReducers } from "redux";
import buscador from "./buscadorReducer";
import game_shop from "./gameShopReducers";

const rootReducers = combineReducers({
  game_shop,
  buscador
});

export default rootReducers;