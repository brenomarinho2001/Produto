
import './HeaderCss.css'

import { BsBag } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom'

//IMAGEM LOGO
import logo from '../../Resources/logoverter.png';

export default function Header(){

    return(
        <header >
            
        <ul style={{padding:'30px',display:'flex',alignItems:'center'}}>
            <img src={logo} alt="Logo" style={{marginLeft:'20px',cursor:'pointer'}}/>

                <Link to="/Home" class='texto' style={{fontSize:'15px'}}><li >ini­cio</li></Link>
                <Link to="/Produtos" class='texto' style={{fontSize:'15px'}}><li >Produtos</li></Link>
                {/* isso nao eh p ficar assim, coloquei so p gente conseguir ver a pagina de detalhe do produto */}
                <Link to="/Home" class='texto' style={{fontSize:'15px'}}><li >Sobre a Verter</li></Link>
                <Link to="/Home" class='texto' style={{fontSize:'15px'}}><li >Contato</li></Link>
   
            <li><image src="" alt=""/></li>
            
            
        </ul>
        <div class="nav-buttons" style={{padding:'30px'}}>
            <Link to='/Carrinho'><BsBag class='icon'></BsBag></Link>
            <a href='/'><BsSearch class='icon' /></a>

            <a href="/Login" class="login-btn">Login</a>
            <a href="/Cadastro" class="cad-btn">Cadastre agora</a>
        </div>
        </header>
    )
}