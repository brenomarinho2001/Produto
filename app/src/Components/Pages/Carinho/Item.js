

// import Header from "../../Basics/Header/Header";
// import Footers from "../../Basics/Footer/Footers";

import Footers from '../../Basics/Footer/Footers'
import Header from '../../Basics/Header/Header'
import './CarrinhoCss.css'

export default function Item({nome,preco}) {
    return (
       
    <div class="card">
        <div class="card-img">
            <img src="img/image 18.png" alt=""/>
        </div>
        <div class="card-body">
            <div class="card-title">
                <span>{nome}</span>
                <span>R$ {preco},00</span>
            </div>
            <div class="card-desc">
                <div class="desc">Digital</div>
                <div class="desc">01</div>
            </div>
            <div class="delete"></div>
        </div>
    </div>
          
                
           
    )
}