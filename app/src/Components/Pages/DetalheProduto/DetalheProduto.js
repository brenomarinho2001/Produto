

import Header from "../../Basics/Header/Header";
import Footers from "../../Basics/Footer/Footers";
import SelectSize from './components/SelectSize';
import Favorite from './components/Favorite';
import './DetalheProduto.css'

import qrcode from '../../images/qrcode.png';
import pix from '../../images/pix.png';
import pagseguro from '../../images/pagseguro.png';

export default function DetalheProduto () {
    return (
        <div className='container'> 
            <Header style={{height:'20%'}}/>
            <div className='content'>
                <div className='product'>
                    <div className='productinfo'>
                        <div className='titlecontainer'>
                            <h1 className='title'>Lorem Ipsum</h1>
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
                        <div className='imagemock' />

                        <div className='imageslider'>
                            <div className='imagemock' />
                            <div className='imagemock' />
                            <div className='imagemock' />
                            <div className='imagemock' />
                            <div className='imagemock' />
                        </div>
                    </div>
                </div>

                <h3 className='subtitle3'> Sobre o produto </h3>
                <p className='text'> 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>

                <h3 className='subtitle3'> Quem viu comprou </h3>
            </div>
            <Footers/>
        </div>
    )
}