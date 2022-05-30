import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';


function CampoTexto(){
 const [nome, setNome] = useState("");


return (
    <>
    <main>
      <h1>Campo Texto:</h1>
        <input type="text" onChange={ (e) => setNome(e.target.value)}/>
        <p> Bem-Vindo: {nome}</p>
    </main>
    <nav>
      <Link to="/">Início</Link>
    </nav>
  </>
);

}

export default CampoTexto;
