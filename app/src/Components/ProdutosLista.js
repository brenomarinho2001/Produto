import Footers from '../Components/Basics/Footers'
import Header from '../Components/Basics/Header'
import './ProdutosListaCss.css'
import imgcamisa from './img/image18.png'

import { FaUser } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";


export default function ProdutosLista(){

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

                        <div class="pro-card">
                            <img src={imgcamisa}/>
                            <div class="card-content">
                                <span>Camisa ALG correntes</span>
                                <p>R$69,90</p>
                            </div>
                        </div>



                        

                  
                    </div>

        </div>
        
        <Footers/>
        </>
        
    )
}