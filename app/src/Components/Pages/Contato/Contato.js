import './Contato.css'

export default function Contato () {
    return (
        <div className='container'>
            <div className='content'>
                <div>
                    <h1 className='titlepag'> Contato </h1>

                    <h2 className='subtitle'> Via e-mail </h2>
                </div>

                <div className='input'>
                    <div className='inputRow'>
                        <div>
                            <p className='titleinput'>Nome Completo:</p>
                            <input placeholder='Insira seu nome aqui' className="inputsCadastro"/>
                        </div>

                        <div>
                            <p className='titleinput'>Telefone:</p>
                            <input placeholder='+55' className="inputsCadastro"/>
                        </div>
                    </div>

                    <div className="inputRow">
                        <div>
                            <p className='titleinput'>E-mail:</p>
                            <input placeholder='Insira seu e-mail aqui' className="inputsCadastro"/>
                        </div>

                        <div className='fileSelect'>
                            <div>
                                <p className='titleinput'> Arquivo*: </p>
                                <input placeholder='' className="inputsCadastro"/>
                            </div>
                            <button className='btninput'> Escolher arquivo </button>
                        </div>
                    </div>

                    <div>
                        <p className='titleinput'> Mensagem: </p>
                        <input placeholder='Escreva sua mensagem aqui' className="inputsCadastroG"/>
                    </div>
                
                </div>

                <button className='btninput'> Enviar mensagem </button>

            </div>
        </div>
    )
}