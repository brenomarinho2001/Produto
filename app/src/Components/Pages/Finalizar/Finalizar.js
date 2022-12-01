

// import Header from "../../Basics/Header/Header";
// import Footers from "../../Basics/Footer/Footers";

import Footers from '../../Basics/Footer/Footers'
import Header from '../../Basics/Header_logada/Header_logada'

import './FinalizarCss.css'
import imgcamisa from '../../images/Roupas/camisa.png'

export default function Finalizar() {
    return (
        <div>
            
            <div class="progress">
            <h2>Finalizando</h2>
            <div class="progress-bar">
                <span>Passo 3 de 3</span>
            </div>
            </div>
            <div class="bar">
                <div class="cor" style={{width:'100%'}}></div>
            </div>

            <div class="final-body">
            <div class="pedido">
                <h2 style={{marginLeft:'30px'}}>Agradecemos por realizar sua compra conosco, agora você possui itens totalmente exclusivos verter.</h2>
                <span>Detalhes do pedido:</span>
                <hr/>
            <div class="pedido-box">
                <span>Itens do pedido</span>
                <div class="pedido-content">
                    <div class="pedido-card">
                        <img src={imgcamisa}/>
                        <div class="card-content">
                            <p>Camisa ALG Correntes</p>
                            <div class="div-box">
                                Digital
                            </div>
                            <p>R$40,00</p>
                        </div>
                    </div>
                    <div class="pedido-card">
                        <img src={imgcamisa}/>
                        <div class="card-content">
                            <p>Camisa ALG Correntes</p>
                            <div class="div-box">
                                Digital
                            </div>
                            <p>R$40,00</p>
                        </div>
                    </div>
                    <div class="pedido-card">
                        <img src={imgcamisa}/>
                        <div class="card-content">
                            <p>Camisa ALG Correntes</p>
                            <div class="div-box">
                                Digital
                            </div>
                            <p>R$40,00</p>
                        </div>
                    </div>
                    <div class="pedido-card">
                        <img src={imgcamisa}/>
                        <div class="card-content">
                            <p>Camisa ALG Correntes</p>
                            <div class="div-box">
                                Digital
                            </div>
                            <p>R$40,00</p>
                        </div>
                    </div>
                </div>
                <div class="pedido-detalhes">
                    <div class="detalhes">
                        <p>Todos os itens:</p>
                        <p>R$160,00</p>
                    </div>
                    <div class="detalhes">
                        <p>Entrega via PAC:</p>
                        <p>R$20,00</p>
                    </div>
                    <div class="detalhes total">
                        <p>Total do Pedido:</p>
                        <p>R$160,00</p>
                    </div>
                </div>
                <div class="pedido-entrega">
                    <p>Previsão de entrega: De 01 de Janeiro a 6 de Janeiro</p>
                    <hr/>
                    <p>Produtos Digitais serão entregues entre 5 a 10 minutos no e-mail cadastrado.</p>
                </div>
            </div>
        </div>
    </div>
    <h2 class="quemviu">Quem viu, comprou:</h2>
    <div class="recomendacao">
        <div class="rec-card">
            <img src={imgcamisa}/>
            <div class="card-content">
                <p>Camisa ALG correntes</p>
                <p>R$69,90</p>
            </div>
        </div>
        <div class="rec-card">
          <img src={imgcamisa}/>
            <div class="card-content">
                <p>Camisa ALG correntes</p>
                <p>R$69,90</p>
            </div>
        </div>
        <div class="rec-card">
            <img src={imgcamisa}/>
            <div class="card-content">
                <p>Camisa ALG correntes</p>
                <p>R$69,90</p>
            </div>
        </div>
        <div class="rec-card">
            <img src={imgcamisa}/>
            <div class="card-content">
                <p>Camisa ALG correntes</p>
                <p>R$69,90</p>
            </div>
        </div>
        <div class="rec-card">
        <img src={imgcamisa}/>
            <div class="card-content">
                <p>Camisa ALG correntes</p>
                <p>R$69,90</p>
            </div>
        </div>
    </div>
       
        
        </div>
        
    )
}