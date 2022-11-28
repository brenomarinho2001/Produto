

// import Header from "../../Basics/Header/Header";
// import Footers from "../../Basics/Footer/Footers";

import Footers from '../../Basics/Footer/Footers'
import Header from '../../Basics/Header/Header'
import './PagamentoCss.css'

export default function Pagamento() {
    return (
        <div> 
           <Header/>
           
            <div class="progress">
                <h2>Pagamento</h2>
                <div class="progress-bar">
                    <span>Passo 2 de 3</span>
                </div>
            </div>
            <div class="bar">
                <div class="cor" style={{width:'50%'}}></div>
            </div>

            <div class="body">
                <div class='body_center'>
                    <div class='box'>
                        <h3>Pagamento</h3>

                        <p>Entregar neste endereço?</p>
                        <input type="text" placeholder="Insira sua Rua" style={{marginRight:'20px'}}/>
                        <button>Sim,está pronto!</button>
                        <p>Não, entregar para outro endereço</p>
                    </div>

                    <div class='box'>
                        <h3>Entrega</h3>

                        <p>Produto Digital:</p>
                        <input type="text" placeholder="Insira sua Rua" style={{marginRight:'20px'}}/>
                        
                        <p>Produto Físico:</p>

                    </div>

                    <div class='box'>
                        <h3>Pagamento</h3>

                    </div>

                    <a href='/Finalizar'><button>Finalize Sua Compra</button></a>
                    
                    

                    
                </div>


            </div>
            
           <Footers/>
        </div>
    )
}