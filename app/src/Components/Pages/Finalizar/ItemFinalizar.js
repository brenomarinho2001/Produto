

// import Header from "../../Basics/Header/Header";
// import Footers from "../../Basics/Footer/Footers";

import Footers from '../../Basics/Footer/Footers'
import Header from '../../Basics/Header_logada/Header_logada'


import imgcamisa from '../../images/Roupas/camisa.png'

export default function ItemFinalizar({id,nome,preco,desc}) {
    return (
       
    <div class="pedido-card">
        <img src={imgcamisa}/>
        <div class="card-content">
            <p>{nome}</p>
            <div class="div-box">
                Digital
            </div>
            <p>R${preco}</p>
        </div>
    </div>
          
                
           
    )
}