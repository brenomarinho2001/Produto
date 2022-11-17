
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from './Components/Basics/Pages/Cadastro';
import Login from './Components/Basics/Pages/Login/Login';
import Home from './Components/Basics/Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Cadastro" element={<Cadastro/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
