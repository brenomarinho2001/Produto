

import Header from '../../Basics/Header_logada/Header_logada'
import Footers from "../../Basics/Footer/Footers";
import SelectSize from './components/SelectSize';
import Favorite from './components/Favorite';
import './DetalheProdutoApocaliotica.css'

import qrcode from '../../images/qrcode.png';
import pix from '../../images/pix.png';
import pagseguro from '../../images/pagseguro.png';
import a1 from '../../images/Roupas/a1.png'

//4 IMAGENS
import imgApo from '../../images/Roupas/apocaliptica.png'

import imgApoa1 from '../../images/Roupas/a1.png'
import imgApoa2 from '../../images/Roupas/a2.png'
import imgApoa3 from '../../images/Roupas/a3.png'

import imaApoc1 from '../../images/Roupas/c1.png'
import imaApoc2 from '../../images/Roupas/c2.png'
import imaApoc3 from '../../images/Roupas/c3.png'


export default function DetalheProduto () {
    return (
        <div className='container'> 
            
            <div className='content'>
                <div className='product'>
                    <div className='productinfo'>
                        <div className='titlecontainer'>
                            <h1 className='title'>APOCALIPTICA</h1>
                            <Favorite />
                        </div>

                        <h2 className='subtitle'>Escolha o tamanho/tipo</h2>
                        <SelectSize />

                        <div className='buttoncontainer'>
                            <button className='textbutton'>
                                ver tabela de tamanhos
                            </button>
                        </div>

                        <img className='imgqr' src={qrcode}/>

                        <h2 className='subtitle2'>taxa de entrega</h2>
                        <div className='cepcontainer'>
                            <input placeholder='Seu CEP' className="inputCep"/>
                            <button className='buttoncalc'> Calcular </button>:
                        </div>

                        <h2 className='subtitle2'>formas de pagamento</h2>

                        <div className='paymentcontainer'>
                            <img className='pix' src={pix} alt="Pix" />
                            <img className='pagseguro' src={pagseguro} alt="PagSeguro" />
                        </div>
                        <div className='buttoncontainer'>
                            <button className='buttoncomprar'> Comprar agora </button>
                            <button className='buttonadic'> Adicionar ao carrinho </button>
                        </div>
                    </div>
                    <div className='imagecontainer'>
                        <img className='imagemock' src={imgApo} />
                            
                        <div className='imageslider'>
                            <img className='imagemock' src={imgApoa1}>
                            </img>
                            <img className='imagemock' src={imgApoa2}>
                            </img>
                            <img className='imagemock' src={imgApoa3}>
                            </img>

                        </div>
                    </div>
                </div>

                <h3 className='subtitle3'> Sobre o produto </h3>
                <p className='text'> 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>

                <h3 className='subtitle3'> Quem viu comprou </h3>
            </div>
           
        </div>
    )
}