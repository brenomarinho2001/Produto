import Footers from '../../Basics/Footer/Footers'
import Header from '../../Basics/Header/Header'
import './ProdutosListaCss.css'
import imgcamisa from '../../images/Roupas/camisa.png'

import { FaUser } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";


export default function ProdutosLista(){


    var produtos_no_carrinhos = []

    function adicionar_produto_01(){
        
        var produto_01 = {
            'nome':'Camisa_01',
            'preco':10.00
        }
        produtos_no_carrinhos.push(produto_01)
        console.log(produtos_no_carrinhos)

    }

    function adicionar_produto_02(){
        
        var produto_02 = {
            'nome':'Camisa_02',
            'preco':30.00
        }
        produtos_no_carrinhos.push(produto_02)
        console.log(produtos_no_carrinhos)

    }


    return(
        <>
        <Header/>
        <div class="back-color"></div>
                <div class="filtros">
                    <label>Filtrar por</label>
                    <div class="filtro">Preços</div>
                    <div class="filtro">Tamanhos</div>
        </div>
        <div className='main'>

            
            
                    <aside>
                        <div class="categoria">
                            <h2>Categoria</h2>
                            <ul>
                                <li>
                                    <div class="check-container">
                                        <label for="Carnaval">Roupas de carnaval</label>
                                        <input type="checkbox" id="Carnaval" name="Carnaval" value="Carnaval"/>
                                        <span class="check"></span>
                                    </div>
                                </li>
                                <li>
                                    <div class="check-container">
                                        <label for="Bruxas">Dia das Bruxas</label>
                                        <input type="checkbox" id="Bruxas" name="Bruxas"/>
                                        <span class="check"></span>
                                    </div>
                                </li>
                                <li>
                                    <div class="check-container">
                                        <label for="Casamentos">Casamentos</label>
                                        <input type="checkbox" id="Casamentos" name="Casamentos"/>
                                        <span class="check"></span>
                                    </div>
                                </li>
                                <li>
                                    <div class="check-container">
                                        <label for="Esportes">Esportes</label>
                                        <input type="checkbox" id="Esportes" name="Esportes"/>
                                        <span class="check"></span>
                                    </div>
                                </li>
                            </ul>
                            <h2>Coleção</h2>
                            <ul>
                                <li>
                                    <div class="check-container">
                                        <label for="Politica">Política</label>
                                        <input type="checkbox" id="Politica" name="Politica" value="Politica"/>
                                        <span class="check"></span>
                                    </div>
                                </li>
                                <li>
                                    <div class="check-container">
                                        <label for="Festa">Festa</label>
                                        <input type="checkbox" id="Festa" name="Festa"/>
                                        <span class="check"></span>
                                    </div>
                                </li>
                                <li>
                                    <div class="check-container">
                                        <label for="Tecno">Tecno</label>
                                        <input type="checkbox" id="Tecno" name="Tecno"/>
                                        <span class="check"></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </aside>
                    <div class="produtos">
                        <div class="pro-card">
                            <img src={imgcamisa}/>
                            <div class="card-content">
                                <span>Camisa ALG correntes</span>
                                <p>R$69,90</p>
                                <button onClick={adicionar_produto_01}>Adicionar ao Carrinho</button>
                            </div>
                            
                        </div>

                        <div class="pro-card">
                            <img src={imgcamisa}/>
                            <div class="card-content">
                                <span>Camisa ALG correntes</span>
                                <p>R$69,90</p>
                                <button onClick={adicionar_produto_02}>Adicionar ao Carrinho</button>
                            </div>
                            
                        </div>
                    
                    </div>

        </div>
        
        <Footers/>
        </>
        
    )
}