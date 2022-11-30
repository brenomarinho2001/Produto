import Header from "../../Basics/Header/Header";
import Footers from "../../Basics/Footer/Footers";

export default function Sobre () {
    return (
        <div className="container">
            <Header/>
                <div className="content">
                <h3 className="titlepag"> Sobre a verter </h3>
                
                <h3 className="subtitle"> Somos uma marca de vestuário digital e físico </h3>

                <p className="text">
                Nosso objetivo é apresentar uma nova maneira de se expressar através da <br/>
                escolha de  uma roupa, por meio de uma produção sustentável. 
                <br/>
                <br/>
                Além disso, estamos sempre à procura de entregar as melhores peças que <br/>
                priorizam todos os tamanhos, ampliando as possibilidades de um guarda <br/>
                roupa para um tom mais ousado e rebelde.
                </p>
                </div>
            <Footers/>
        </div>
    )
}