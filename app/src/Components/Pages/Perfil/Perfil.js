import Header from "../../Basics/Header_logada/Header_logada";
import Footers from "../../Basics/Footer/Footers";
import { IoStarOutline } from "react-icons/io5";

import './Perfil.css'

export default function Perfil () {
    return (
        <div className="container">
            
                <div className="content">
                    <h3 className="title"> Meu perfil </h3>
                    <div className="buttons">
                        <a className="btnperfil" href='/Perfil/MeusDados'> 
                        meus dados
                        </a>

                        <button className="btnperfil"> 
                        pedidos
                        </button>

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