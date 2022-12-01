import Header from "../../Basics/Header_logada/Header_logada";
import Footers from "../../Basics/Footer/Footers";
import { IoStarOutline } from "react-icons/io5";

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


                        <button className="btnperfil"> 
                        pagamentos
                        </button>

                        <button className="btnperfil"> 
                        endereços
                        </button>

                        <button className="btnperfil"> 
                        <IoStarOutline style={{size: 41, marginRight: 8}}/>
                        favoritos
                        </button>


                    </div>
                    
                </div>
            
        </div>
    )
}