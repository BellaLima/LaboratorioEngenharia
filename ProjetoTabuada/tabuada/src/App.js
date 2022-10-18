
import React from 'react';
import Titulo from './Titulo';
import Titulo2 from './Titulo2';
import Tabuada from './Tabuada';
import Cores from './Cores';

let n = prompt("Digite um número", "5");

function App() {
  return (
    <div>
      <Cores />
      <Titulo titulo = "fatec"
              texto = "Faculdade de tecnologia de Presidente Prudente"
              link = "https://www.fatecpp.edu.br" 
      />
      <Titulo2 />
      <Tabuada numero = {n}/>
    </div>
  );
}

export default App;