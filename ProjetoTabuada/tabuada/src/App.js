
import React from 'react';
import './App.css';
import Tabuada from './Tabuada';
import Titulo from './Titulo';
import Titulo2 from './Titulo2';
import Cores from './Cores';
import Mensagem from './Mensagem';
import Header from './Header';
import Unmounting from './Unmounting';
import Derived from './Derived';
import Should from './Should';
import Snapshot from './Snapshot';
import Did from './Did';

let n = prompt("Digite um número", "0")

function App() {
  return (
    <center>
    <div>
      <Titulo titulo = "FATEC" texto ="Faculdade de Tecnologia de Presidente Prudente" link = "https://www.fatecpp.edu.br"/>
      <Titulo2/>
      <Tabuada numero = {n}/>
      <Cores/>
      <br></br>
      <Mensagem/>
      <Header/>
      <br></br>
      <Unmounting/>
      <br></br>
      <Derived/>
      <br></br>
      <Should/>
      <br></br>
      <Snapshot/>
      <br></br>
      <Did/>
    </div>
    </center>
  );
}



export default App;


