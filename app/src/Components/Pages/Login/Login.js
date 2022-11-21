import Header from "../../Basics/Header/Header";
import Footers from "../../Basics/Footer/Footers";
import './LoginCss.css'

import { FaUser } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";


export default function Login(){

    return(
        <div style={{height:'100vh'}}>

        <Header style={{height:'20%'}}/>

        <section class="login" style={{height:'90%'}}>
            <div class="login-box" style={{textAlign:'left'}}>
                <h1 class='texto' style={{fontSize:'23px'}}>Realize seu Login</h1>
                <div class="inputs">
                    <div class="inputs-row">
                        <div class="login-icon">
                            <FaUser className='icons'/>
                        </div>
                        <input type='text' placeholder='Seu usuario'></input>
                    </div>
                    <div class="inputs-row">
                        <div class="login-icon">
                            <AiFillLock className='icons'/>
                        </div>
                        <input type='password' placeholder='Sua senha'></input>
                    </div>
                    <a href="">Esqueci minha senha</a>
                </div>
                <div class="login-buttons">
                    <button class="btn-entrar">Entrar</button>
                    <button class="btn-cad">Cadastre agora</button>
                </div>
            </div>
        </section>
        
        <Footers/>

        </div>
    )
}