import Header from "../../Basics/Header/Header";
import Footers from "../../Basics/Footer/Footers";
import './Home.css'
import imgcamisa from '../../images/Roupas/camisa.png'
import { Link } from "react-router-dom";

export default function Home () {
    return (
        <div className='container'> 

            <div className='banner-todo'>
            <Header style={{height:'20%'}}/>
            <div className='banners'>

                <h3 className='titulo-banner'>Sua Roupa Digital  está aqui</h3>
                <div className='botoes'>
                <Link to="/Produtos" class="botao_produtos">Produtos</Link>
                <Link to="/Login" class="botao_saiba">Saiba Mais</Link>

                </div>

            </div>
            </div>
            <div className='lancamentos'>
                <h3 className='tituolo-sessao'>ultímos lançamentos </h3>
                <div class="produtos">
                        <div class="pro-card">
                            <img src={imgcamisa}/>
                            <div class="card-content">
                                <span>Camisa ALG correntes</span>
                                <p>R$69,90</p>
                            </div>
                        </div>

                        <div class="pro-card">
                            <img src={imgcamisa}/>
                            <div class="card-content">
                                <span>Camisa ALG correntes</span>
                                <p>R$69,90</p>
                            </div>
                        </div>

                        <div class="pro-card">
                            <img src={imgcamisa}/>
                            <div class="card-content">
                                <span>Camisa ALG correntes</span>
                                <p>R$69,90</p>
                            </div>
                        </div>

                    </div>
            </div>

            <div className='anuncio'>
                <h2 className='titulo-central'> VERTER 2023 </h2>
                <h4 className='sub-texto'> Conheça os primeiros <br/>itens da próxima coleção</h4> <br/>
                <a href="/Login" class="botao_saiba">Saiba Mais</a>
            </div>
            <div className='lancamentos'>
                <h3 className='tituolo-sessao'> sucesso de vendas </h3>
                <div class="produtos">
                        <div class="pro-card">
                            <img src={imgcamisa}/>
                            <div class="card-content">
                                <span>Camisa ALG correntes</span>
                                <p>R$69,90</p>
                            </div>
                        </div>

                        <div class="pro-card">
                            <img src={imgcamisa}/>
                            <div class="card-content">
                                <span>Camisa ALG correntes</span>
                                <p>R$69,90</p>
                            </div>
                        </div>

                        <div class="pro-card">
                            <img src={imgcamisa}/>
                            <div class="card-content">
                                <span>Camisa ALG correntes</span>
                                <p>R$69,90</p>
                            </div>
                        </div>

                    </div>
            </div>

            <div className='destaque'>
                <div className='esquerda'>

                <h2 className='titulo-central'> Na medida para <br/> seu corpo </h2>
                <h4 className='sub-texto'> Entenda o conceito das roupas <br/> digitais e fique por dentro</h4> <br/>
                <a href="/Login" class="botao_saiba">Saiba Mais</a>
                </div>

                <div className='direita'>

                    <div className='expositor'>
                        <img src={imgcamisa}/>

                    </div>

                </div>
            </div>
            <Footers/>
        </div>
        
    )
}