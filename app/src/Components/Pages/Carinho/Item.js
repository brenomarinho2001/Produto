

// import Header from "../../Basics/Header/Header";
// import Footers from "../../Basics/Footer/Footers";

import Footers from '../../Basics/Footer/Footers'
import Header from '../../Basics/Header_logada/Header_logada'
import './CarrinhoCss.css'

import imgcamisa from '../../images/Roupas/camisa.png'

export default function Item({id,nome,preco,desc}) {
    return (
       
    <div class="card">
        <div class="card-img">
            <img src={imgcamisa}/>
        </div>
        <div class="card-body">
            <div class="card-title">
                <span>{nome}</span>
                <span>R$ {preco}</span>
            </div>
            <div class="card-desc" style={{padding:'20px'}}>
                <hr/>
                <p>{desc}</p>
                <hr/>
                <div class="desc">Digital</div>
                <div class="desc">01</div>

            </div>
            <div class="delete"></div>
        </div>
    </div>
          
                
           
    )
}