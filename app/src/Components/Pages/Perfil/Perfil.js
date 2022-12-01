import Header from "../../Basics/Header_logada/Header_logada";
import Footers from "../../Basics/Footer/Footers";


import './Perfil.css'
import { Link } from "react-router-dom";

export default function Perfil () {
    return (
        <div className="container">
                    <h2 className="titulo"> Meu perfil </h2>
                    <div className="linha"></div>    
                <div className="content">

                    <div className="buttons">
                        <Link className="btnperfil" to={'/Perfil/MeusDados'}> 
                        meus dados
                        </Link>

                        <Link to={'/Perfil/Pedidos'} className='btnperfil'>pedidos</Link>

                        <Link to={'/Perfil/Pagamentos'} className='btnperfil'>pagamentos</Link>

                        <Link to={'/Perfil/Enderecos'} className='btnperfil'>endereços</Link>

                        <Link to={'/Perfil/Favoritos'} className='btnperfil'>favoritos</Link>


                    </div>
                    
                </div>
            
        </div>
    )
}