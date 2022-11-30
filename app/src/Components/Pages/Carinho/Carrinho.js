

// import Header from "../../Basics/Header/Header";
// import Footers from "../../Basics/Footer/Footers";

import Footers from '../../Basics/Footer/Footers'
import Header from '../../Basics/Header_logada/Header_logada'
import './CarrinhoCss.css'
import Item from './Item'

export default function Carrinho({valor,vetor}) {

    

    return (
        <div>
            <Header/>

        
        <div> 
            <div class="progress">
            <h2>Carrinho</h2>
            <div class="progress-bar">
                <span>Passo 1 de 3</span>
            </div>
        </div>
        <div class="bar">
            <div class="cor"></div>
        </div>
        <div class="car-body">
            <div class="car-cards">
                {
                    vetor.map((nomes,i) => <Item key={i} nome={nomes[0].nome} preco={nomes[0].preco}/>)
                }
                
                
            </div>
            <div class="car-pay">
                <div class="pay-tittle">
                    <h2>Subtotal</h2>
                    <span>R${valor}</span>
                </div>
                <div class="entrega">
                    <h2>Calcular entrega</h2>
                    <br/>
                    <input type="text" placeholder="Insira seu CEP" style={{marginRight:'20px'}}/>
                    <button>Calcular</button>
                    <div class="correio">
                        <div class="correio-lista">
                            <input type="radio" id="PAC"/>
                            <div class="radio">
                                <label for="PAC">PAC - CORREIOS</label>
                                <br/>
                                <span>3 dias úteis</span>
                            </div>
                        </div>
                        <span>R$00,00</span>
                    </div>
                </div>
                <div class="cupom">
                    <h2>Cupom de Desconto</h2>
                    <input type="text" placeholder="Insira o cupom" style={{marginRight:'20px'}}/>
                    <button>Inserir</button>
                </div>
                <div class="pay-desc">
                    <span>Cupom</span>
                    <span>R$00,00</span>
                </div>
                <div class="pay-desc">
                    <span>Frete</span>
                    <span>R$00,00</span>
                </div>
                <div class="pay-desc">
                    <span>Total</span>
                    <span>R$00,00</span>
                </div>
                <button class="compra-btn">Finalizar Compra</button>
                <a href='/Pagamento'><button class="continuar-btn">Continuar Comprando</button></a>
            </div>
        </div>
        <h2 class="quemviu">Quem viu comprou</h2>
        <div class="recomendacao">
            <div class="rec-card">
                <img src="./img/image 18.png" alt=""/>
                <div class="card-content">
                    <p>Camisa ALG correntes</p>
                    <p>R$69,90</p>
                </div>
            </div>
            <div class="rec-card">
                <img src="./img/image 18.png" alt=""/>
                <div class="card-content">
                    <p>Camisa ALG correntes</p>
                    <p>R$69,90</p>
                </div>
            </div>
            <div class="rec-card">
                <img src="./img/image 18.png" alt=""/>
                <div class="card-content">
                    <p>Camisa ALG correntes</p>
                    <p>R$69,90</p>
                </div>
            </div>
            <div class="rec-card">
                <img src="./img/image 18.png" alt=""/>
                <div class="card-content">
                    <p>Camisa ALG correntes</p>
                    <p>R$69,90</p>
                </div>
            </div>
            <div class="rec-card">
                <img src="./img/image 18.png" alt=""/>
                <div class="card-content">
                    <p>Camisa ALG correntes</p>
                    <p>R$69,90</p>
                </div>
            </div>
        </div>
        </div>
        <Footers/>
        </div>
    )
}