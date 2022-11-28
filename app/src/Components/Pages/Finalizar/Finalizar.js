

// import Header from "../../Basics/Header/Header";
// import Footers from "../../Basics/Footer/Footers";

import Footers from '../../Basics/Footer/Footers'
import Header from '../../Basics/Header/Header'


export default function Finalizar() {
    return (
        <div>
            <Header/>

        
    
            <div class="progress">
            <h2>Finalizando</h2>
            <div class="progress-bar">
                <span>Passo 3 de 3</span>
            </div>
            
            </div>
            <div class="bar">
                <div class="cor" style={{width:'100%'}}></div>
            </div>
       
        <Footers/>
        </div>
        
    )
}