
import './HeaderCss.css'

import { BsBag } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

//IMAGEM LOGO
import logo from '../Resources/logoverter.png';

export default function Header(){

    return(
        <header >
            
        <ul style={{padding:'30px',display:'flex',alignItems:'center'}}>
            <img src={logo} alt="Logo" style={{marginLeft:'20px',cursor:'pointer'}}/>
            <div>
                <li><a href="/Home" class='texto' style={{fontSize:'15px'}}>ini­cio</a></li>
                <li><a href="/DetalheProduto" class='texto' style={{fontSize:'15px'}}>produtos</a></li> 
                {/* isso nao eh p ficar assim, coloquei so p gente conseguir ver a pagina de detalhe do produto */}
                <li><a href="www.google.com" class='texto' style={{fontSize:'15px'}}>sobre a verter</a></li>
                <li><a href="www.google.com" class='texto' style={{fontSize:'15px'}}>contato</a></li>
            </div>
            <li><image src="" alt=""/></li>
            
            
        </ul>
        <div class="nav-buttons" style={{padding:'30px'}}>
            <BsBag class='icon' />
            <BsSearch class='icon' />

            <a href="/Login" class="login-btn">Login</a>
            <a href="/Cadastro" class="cad-btn">Cadastre agora</a>
        </div>
        </header>
    )
}