import Footers from '../../Basics/Footer/Footers'
import Header from '../../Basics/Header_logada/Header_logada'
import './ProdutosListaCss.css'
import imgcamisa from '../../images/Roupas/camisa.png'

import { useState } from 'react'


import { FaUser } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { Link } from 'react-router-dom'


export default function ProdutosLista({valor,valor_carrinho,add_vetor,vetor}){


    var produtos_no_carrinhos = []

    const [valores,setValores] = useState(0)



    function adicionar_produto_01(){
        
        
        var produto_01 = {
            'id':1,
            'nome':'APOCALIPTICA',
            'desc':'"Pandemias? Terremoto ? Bomba atômica? Saudades do mozão?  O look apocalipta resolve amore, aqui você não tem apenas um cropped, mas uma calça assimétrica babado pra agir e enfrentar a vida neste mundo em declínio. Usando tecido 100% reciclável e elástico, é super confortável pra aquele show da sua banda favorita, que parece mais uma maratona de São Silvestre. Fim do mundo sim, mas com estilo né gata?"',
            'preco':89.90,
            "imagem_" : "",
        }
        produtos_no_carrinhos.push(produto_01)
        add_vetor(produtos_no_carrinhos)
        setValores(valores + produto_01.preco)
        valor_carrinho(produto_01.preco)

    }
    

    function adicionar_produto_02(){
        
        var produto_02 = {
            'id':2,
            'nome':'CHICLETINHO',
            'desc':'*mastigando debochada* A chicletinho não gruda em ninguém não viu, a bicha sai solta pelas ruas vivendo a sua vida bélissima, o gloss dela é de babaloo! Feita com um tecido leve e descontraído o rosa desse look faz você estar sempre equilibrada entre a gostosa e a elegante! 100% recicladão tá bom fia? RAAAAAM! ',
            'preco':59.90,
            "imagem_" : "",
        }
        produtos_no_carrinhos.push(produto_02)
        setValores(valores + produto_02.preco)
        add_vetor(produtos_no_carrinhos)
        valor_carrinho(produto_02.preco)
    }

    function adicionar_produto_03(){
        
        var produto_03 = {
            'id':3,
            "nome" : "EMO IS NOT DEAD",
            "desc":"welcome to my life amoreee, é feita pra você que não é apenas emo mas também gótica, vampira e rockeira e pagodeira. É perfeita pra lembrar daquela época em que o Brasil tinha um presidente e você podia sofrer por amor no recreio da escola e não por não ter o minimo e o básico de direitos humanos. Produzida por um jeans recicladão e tecido de algodão reciclado é uma roupa confortável e divertida pra noite! ",
            "preco": 49.90 ,
            "imagem_" : "",
        }
        produtos_no_carrinhos.push(produto_03)
        setValores(valores + produto_03.preco)
        add_vetor(produtos_no_carrinhos)
        valor_carrinho(produto_03.preco)
    }

    function adicionar_produto_04(){
        
        var produto_04 = {
            'id':4,
            "nome" : "MORCEGONA POKEMONA ",
            "desc":"Imagina só tu caçar pokemons durante o intervalo do rolê com essa roupa perfeita e pronta para o ataque! Aqui é close por cima de close, uma quebração de tabu gigante! O material da calça é 100% jeans reciclado com uma brusinha sensual e super confortável de algodão, ou seja você fecha o tempo mas não fica no frio, mas se ainda sentir frio, coloca uma jaqueta que fica um lacry, dica da vovó.",
            "preco": 89.90 ,
            "imagem_" : "",
        }
        produtos_no_carrinhos.push(produto_04)
        setValores(valores + produto_04.preco)
        add_vetor(produtos_no_carrinhos)
        valor_carrinho(produto_04.preco)
    }

    


    return(
        <>
        
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
                                <a href='/Detalhe/Apocaliptica' className='titulo'>APOCALIPTICA</a>
                                <p>R$89.90</p>
                                <button onClick={adicionar_produto_01} style={{backgroundColor:'#492C79',color:'white',cursor:'pointer',padding:'15px'}}>Adicionar ao Carrinho</button>
                            </div>
                            
                        </div>

                        <div class="pro-card">
                            <img src={imgcamisa}/>
                            <div class="card-content">
                                <a href='/Detalhe/Chicletinho' className='titulo'>CHICLETINHO</a>
                                <p>R$59.90</p>
                                <button onClick={adicionar_produto_02} style={{backgroundColor:'#492C79',color:'white',cursor:'pointer',padding:'15px'}}>Adicionar ao Carrinho</button>
                                <p>{valor}</p>
                            </div>
                            
                        </div>

                        <div class="pro-card">
                            <img src={imgcamisa}/>
                            <div class="card-content">
                                <a href='/Detalhe/Emo' className='titulo'>EMO IS NOT DEAD</a>
                                <p>R$49.90</p>
                                <button onClick={adicionar_produto_03} style={{backgroundColor:'#492C79',color:'white',cursor:'pointer',padding:'15px'}}>Adicionar ao Carrinho</button>
                                <p>{valor}</p>
                            </div>
                            
                        </div>

                        <div class="pro-card">
                            <img src={imgcamisa}/>
                            <div class="card-content">
                                <a href='/Detalhe/Morcegona' className='titulo'>MORCEGONA POKEMONA</a>
                                <p>R$89.90</p>
                                <button onClick={adicionar_produto_04} style={{backgroundColor:'#492C79',color:'white',cursor:'pointer',padding:'15px'}}>Adicionar ao Carrinho</button>
                                <p>{valor}</p>
                            </div>
                            
                        </div>
                    
                    </div>

        </div>
        
        
        </>
        
    )
}