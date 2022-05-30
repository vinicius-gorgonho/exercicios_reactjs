import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import CampoTexto from './componentes/CampoTexto';


function Home() {
  return (
    <>
      <main>
        <h1>Meus exercicios</h1><main>
        </main>
        <nav>
          <ul>
            <li><Link to="/about">Calculadora</Link></li>
            <li><Link to="/desativar_botao"> Mudar Botão </Link></li>
            <li><Link to="/esconder">Esconder Menu </Link></li>
            <li><Link to="/mostrando_usuarios">Mostrar Usuários </Link></li>
            <li><Link to="/campo_texto">Campo Texto</Link></li>
          </ul>
        </nav>
      </main>
    </>
  );
}

function MostrandoUsuario() {

const Usuarios = 
[  {id: 1, nome: "João"},
   {id: 2, nome: "Marcos"}
];

const UsuariosLista = Usuarios.map(
     (usuario) => <li key={usuario.id}> {usuario.nome} </li>
);

  return (
    <>
      <main>
        <h1>Usuários:</h1>
        <ul>
          {UsuariosLista}
        </ul>
      </main>
      <nav>
        <Link to="/">Início</Link>
      </nav>
    </>
  )
}


function About() {
  return (
    <>
      <main>
        <h1>Calculadora</h1>
      </main>
      <nav>
        <Link to="/">Início</Link>
      </nav>
    </>
  )
}

function DesativarBotao() {
  const [ativo, setAtivo] = useState(false);

  function ativar(){
    if(ativo){
      setAtivo(false);
    }else{
      setAtivo(true);
    }
  }

  return (
    <>
      <main>
        <h1>Desativar Botão</h1>
        <button onClick={ativar}>
          { !ativo ? "Ativar" : "Desativar"}
        </button>
      </main>
      <nav>
        <Link to="/">Início</Link>
      </nav>
    </>
  );
}

function Esconder() {
  const [estado, setEstado] = useState(false);

  function mostrar(){
    if(estado){
      setEstado(false);
      console.log("desativando");
    }else{
      console.log("ativando");
      setEstado(true);
    }
  }
  return (
   (estado) ? 
    <>
      <main>
        <h1>Esconder</h1>
        <img src={logo} id="imagem"></img>
        <button onClick={mostrar}>Esconder</button>
      </main>
      <nav>
        <Link to="/">Início</Link>
      </nav>
    </>
    : <> 
     <main>
        <h1>Esconder</h1>
        <button onClick={mostrar}>
           { (estado) ? "Esconder" : "Mostrar"}
         </button>
      </main>
      <nav>
        <Link to="/">Início</Link>
      </nav>
    </>
  );
}


function App() {

  
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="desativar_botao" element={<DesativarBotao />} />
        <Route path="esconder" element={<Esconder />} />
        <Route path="mostrando_usuarios" element={<MostrandoUsuario />} />
        <Route path="campo_texto" element={<CampoTexto />} />
      </Routes>
    </div>
  )

}

export default App;