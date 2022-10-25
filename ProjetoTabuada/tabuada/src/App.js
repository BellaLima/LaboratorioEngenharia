
import React from 'react';
import './App.css';
import Tabuada from './Tabuada';
import Titulo from './Titulo';
import Titulo2 from './Titulo2';
import Cores from './Cores';
import Mensagem from './Mensagem';
import Header from './Header';
import Container from './Container';
import Nome from './Nome';
import Should from './Should';
import Snapshot from './Snapshot';
import Did from './Did';


function App() {
  return (
    <center>
    <div>
      <Titulo titulo = "FATEC" texto ="Faculdade de Tecnologia de Presidente Prudente" link = "https://www.fatecpp.edu.br"/>
      <Titulo2 />
      <Tabuada />
      <Cores />
      <Mensagem />
      <Header />
      <Container />
      <Nome />
      <Should />
      <Snapshot />
      <Did />
    </div>
    </center>
  );
}



export default App;


