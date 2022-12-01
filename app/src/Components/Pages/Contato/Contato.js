import './Contato.css'

export default function Contato () {
    return (
        <div className='container'>
            <div className='content'>
                <h1 className='titlepag'> Contato </h1>

                <h2 className='subtitle'> Via e-mail </h2>

                <div className='input'>
                <p className='titleinput'>Nome Completo:</p>
                <input placeholder='Insira seu nome aqui' className="inputsCadastro"/>

                <p className='titleinput'>Telefone:</p>
                <input placeholder='+55' className="inputsCadastro"/>

                <p className='titleinput'>E-mail:</p>
                <input placeholder='Insira seu e-mail aqui' className="inputsCadastro"/>

                <p className='titleinput'> Arquivo*: </p>
                <input placeholder='' className="inputsCadastro"/>
                <button className='btninput'> Escolher arquivo </button>

                <p className='titleinput'> Mensagem: </p>
                <input placeholder='Escreva sua mensagem aqui' className="inputsCadastroG"/>

                
                </div>

                <button className='btninput'> Enviar mensagem </button>

            </div>
        </div>
    )
}