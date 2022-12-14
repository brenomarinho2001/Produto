
import './HeaderCss.css'

import { BsBag } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom'
import rochelle from '../../images/rochelle.png'

//IMAGEM LOGO
import logo from '../../Resources/logoverter.png';

export default function Header({log}){

    console.log(log)
    return(
        <header >
            
        <ul style={{padding:'30px',display:'flex',alignItems:'center'}}>
            <img src={logo} alt="Logo" style={{marginLeft:'20px',cursor:'pointer'}}/>

                <Link to="/Home" class='texto' style={{fontSize:'15px'}}><li >ini­cio</li></Link>
                <Link to="/Produtos" class='texto' style={{fontSize:'15px'}}><li >Produtos</li></Link>
                <Link to="/Sobre" class='texto' style={{fontSize:'15px'}}><li >Sobre a Verter</li></Link>
                <a href="https://www.instagram.com/verter.co/" class='texto' style={{fontSize:'15px'}}><li >Contato</li></a>
   

            
            
        </ul>
        <div class="nav-buttons" style={{padding:'30px'}}>
            {log ? (
                <Link to='/Carrinho'><BsBag class='icon'></BsBag></Link>
            ) : (
                <BsBag class='icon'></BsBag>
            )}
            <a href='/'><BsSearch class='icon' /></a>

            {log ? (
                <div className='perfil'> 
                <img src={rochelle} className='foto'/> 
                <Link to='Perfil' className='texto-perfil'><h3>Olá, Rochelle </h3></Link>
                </div>

            ) : (
                <div>
                <Link to="/Login" class="login-btn">Login</Link>
                <Link to="/Cadastro" class="cad-btn">Cadastre agora</Link>
                </div>
            )}

            
        </div>
        </header>
    )
}