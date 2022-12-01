import Header from '../../Basics/Header_logada/Header_logada'
import Footers from "../../Basics/Footer/Footers";

import './Sobre.css'

export default function Sobre() {
    return (
        <div className="container">
            
                <div className='content'>
                <h3 className='titlepag'> Sobre a verter </h3>

                <div className='containertext'> 
                    <h3 className='subtitle'> Somos uma marca de vestuário digital e físico </h3>

                    <p className='text'>
                    Nosso objetivo é apresentar uma nova maneira de se expressar através da <br/>
                    escolha de  uma roupa, por meio de uma produção sustentável. 
                    <br/>
                    <br/>
                    Além disso, estamos sempre à procura de entregar as melhores peças que <br/>
                    priorizam todos os tamanhos, ampliando as possibilidades de um guarda <br/>
                    roupa para um tom mais ousado e rebelde.
                    </p>
                </div>
                <div className='imagecontainer'>
                    <div className='imagemock' />
                </div>

                <div className='snap'>
                <h3 className='subtitle2'> Experiência Única</h3>
                <p className='text'>
                Oferecemos o serviço onde sem a necesidade de vestir as roupas, você poderá vê-la em sua aparência, 
                por meio de filtros, havendo a opção de compra da roupa física em determinados casos.
                </p>
                <button className='buttonsnap'>
                    Experimente no Snapchat
                </button>
                </div>
                
            </div>
            
        </div>
    )
}