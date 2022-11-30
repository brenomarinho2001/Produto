
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from '../src/Components/Pages/Cadastro/Cadastro';
import Login from '../src/Components/Pages/Login/Login';
import Home from '../src/Components/Pages/Home/Home';
import ProdutosLista from '../src/Components/Pages/ProdutosLista/ProdutosLista';
//import Footers from '../src/Components/Basics/Footers';
import DetalheProduto from '../src/Components/Pages/DetalheProduto/DetalheProduto';
import Carrinho from './Components/Pages/Carinho/Carrinho';
import Pagamento from './Components/Pages/Pagamento/Pagamento';
import Finalizar from './Components/Pages/Finalizar/Finalizar';
import Perfil from './Components/Pages/Perfil/Perfil'
import Sobre from './Components/Pages/Sobre/Sobre'

import { useState } from 'react';

function App() {

  const [valor,setValor] = useState(0)

  const [vetor,setVetor] = useState([])

  function aumentar_carrinho(v){
    setValor(valor+v)
  }

  function adicionar_no_vetor(a){
    var adicionar = vetor
    adicionar.push(a)
    setVetor(adicionar)
    console.log(vetor)
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/DetalheProduto" element={<DetalheProduto/>}></Route>
        <Route path="/Perfil" element={<Perfil/>}></Route>
        <Route path="/Cadastro" element={<Cadastro/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Produtos"element={<ProdutosLista valor_carrinho={aumentar_carrinho} add_vetor = {adicionar_no_vetor} vetor={vetor}/>}></Route>
        <Route path="/Carrinho" element={<Carrinho valor={valor} vetor={vetor}/>}></Route>
        <Route path="/Pagamento" element={<Pagamento/>}></Route>
        <Route path="/Finalizar" element={<Finalizar/>}></Route>
        <Route path="/Sobre" element={<Sobre/>}></Route>

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
