import Header from '../../Basics/Header_logada/Header_logada'
import Footers from "../../Basics/Footer/Footers";
import './Home.css'
import imgcamisa from '../../images/Roupas/camisa.png'
import home from '../../images/home.png'
import { Link } from "react-router-dom";
import { Zoom } from "react-slideshow-image";

import banner_01 from '../../images/banners/banner1.png'
import banner_02 from '../../images/banners/banner2.png'
import banner_03 from '../../images/banners/banner 3-final.png'
import img_chiclete from '../../images/Roupas/chicletinho.png'
import img_emo from '../../images/Roupas/emo.png'
import img_apocaliotica from '../../images/Roupas/apocaliptica.png'
import img_morcegona from '../../images/Roupas/morcegona.png'


export default function Home () {
    const images = [banner_01, banner_02, banner_03];

    const zoomOutProperties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      scale: 0.4,
      arrows: true
    };
    
    const Slideshow = () => {
      return (
        <div className="slide-container">
          <Zoom {...zoomOutProperties}>
            {images.map((each, index) => (
              <img key={index} style={{ width: "100%" }} src={each} />
            ))}
          </Zoom>
        </div>
      );
    };

    return (
        <div className='container'> 
        
            <div className='banners'>
            <Slideshow />
            </div>

            <div className='lancamentos'>
                <h3 className='tituolo-sessao'>ultímos lançamentos </h3>
                <div class="produtos">
                        <div class="pro-card">
                            <img src={img_chiclete}/>
                            <div class="card-content">
                                <span>Chicletinho</span>
                                <p>R$69,90</p>
                            </div>
                        </div>

                        <div class="pro-card">
                            <img src={img_morcegona}/>
                            <div class="card-content">
                                <span>Morcegona Pokemona</span>
                                <p>R$69,90</p>
                            </div>
                        </div>

                        <div class="pro-card">
                            <img src={img_apocaliotica}/>
                            <div class="card-content">
                                <span>Apocaliptica</span>
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
                            <img src={img_chiclete}/>
                            <div class="card-content">
                                <span>Chicletinho</span>
                                <p>R$59,90</p>
                            </div>
                        </div>

                        <div class="pro-card">
                            <img src={img_morcegona}/>
                            <div class="card-content">
                                <span>Morcegona Pokemona</span>
                                <p>R$69,90</p>
                            </div>
                        </div>

                        <div class="pro-card">
                            <img src={img_apocaliotica}/>
                            <div class="card-content">
                                <span>Apocaliptica</span>
                                <p>R$89,90</p>
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
                        <img src={home}/>

                    </div>

                </div>
            </div>
            
        </div>
        
    )
}