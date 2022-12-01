
import './Header_logadaCss.css'

import { BsBag } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom'
import rochelle from '../../images/rochelle.png'

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

                <Link to="/Sobre" class='texto' style={{fontSize:'15px'}}><li >Sobre a Verter</li></Link>
                <Link to="/Home" class='texto' style={{fontSize:'15px'}}><li >Contato</li></Link>
   

            
            
        </ul>
        <div class="nav-buttons" style={{padding:'40px'}}>
            <img src={rochelle} className='foto'/> 
            <a href="/Perfil" class="texto">   Olá, Rochelle</a>
        </div>
        </header>
    )
}