import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import CantidadPokemon from './components/CantidadPokemon'
import CompraPokemon from './components/CompraPokemon'
import ResultadoPokemon from './components/buscardor/ResultadoPokemon';
import BuscadorPokemon from './components/buscardor/BuscadorPokemon';


const App = () => {

  return (
    <Provider store={store}>
      <div className="App container">
        <div className='row'>
          <div className='col 12'>

            <div className='card mt-5' style={{maxWidth: '370px'}}>
              <div className='row no-gutters'>
                <div className='col-4'>
                  <img src={require('./img/imageportada.jpeg')} alt='pokemon' className='card-img' />
                </div>
                <div className='col-8'>
                  <div className='card-body'>
                    <div className='card-title h3 text-center'>
                      <CantidadPokemon />
                    </div>
                    <CompraPokemon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 mt-4 border-top pt-3'>
            <BuscadorPokemon />
          </div>
          <div className='col-12'>
            <ResultadoPokemon />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
