import Footers from '../../Footers'
import Header from '../../Header'
import './DetalheProduto.css'

// import qrcode from 'public/qrcode.png'


export default function DetalheProduto () {
    return (
        <div className='container'> 
            <Header style={{height:'20%'}}/>
            <div className='content'>
                <h1 className='title'>Lorem Ipsum</h1>
                <div className='favicon'> </div>

                <h2 className='subtitle'>Escolha o tamanho/tipo</h2>
                <div className='buttoncontainer'>
                    <button className='buttontam'> P </button>
                    <button className='buttontam'> M </button>
                    <button className='buttontam'> G </button>
                    <button className='buttontam'> G1 </button>
                    <button className='buttontam'> G2 </button>
                    <button className='buttontam'> Digital </button>
                </div>

                <div className='buttoncontainer'>
                    <button className='textbutton'>
                        ver tabela de tamanhos
                    </button>
                </div>

                {/* <img className='imgqr' src={qrcode}/> */}

                <h2 className='subtitle2'>taxa de entrega</h2>
                <div className='cepcontainer'>
                    <input placeholder='Seu CEP' className="inputCep"/>
                    <button className='buttoncalc'> Calcular </button>:
                </div>

                <h2 className='subtitle2'>formas de pagamento</h2>

                {/* <img className='pix' src={}/>
                <img className='pagseguro' src={}/> */}

                <div className='buttoncontainer'>
                <button className='buttoncomprar'> Comprar agora </button>
                <button className='buttonadic'> Adicionar ao carrinho </button>
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