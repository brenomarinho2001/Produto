
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from './Components/Basics/Pages/Cadastro';
import Login from './Components/Basics/Pages/Login/Login';
import Home from './Components/Basics/Pages/Home/Home';
import ProdutosLista from './Components/ProdutosLista';
import Footers from './Components/Basics/Footers';
import DetalheProduto from './Components/Basics/Pages/DetalheProduto/DetalheProduto';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/DetalheProduto" element={<DetalheProduto/>}></Route>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Cadastro" element={<Cadastro/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/produtos" element={<ProdutosLista/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
