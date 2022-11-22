import Header from "../../Basics/Header/Header";
import Footers from "../../Basics/Footer/Footers";
import './LoginCss.css'

import { FaUser } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../../service/firebase_config";
import { useState } from 'react';

export default function Login(){
    // Firebase
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, loading, error] = 
    useSignInWithEmailAndPassword(auth);
    
    function handleSignIn(e){
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    if (loading) {
        return window.localtion.href = 'http://localhost:3000/Home:'
    }
    if (error) {
        return window.alert("Senha ou Email Inválido")
    }
    ////////////////
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
                        <input onChange={e => setEmail(e.target.value)} type='text' placeholder='Seu email'></input>
                    </div>
                    <div class="inputs-row">
                        <div class="login-icon">
                            <AiFillLock className='icons'/>
                        </div>
                        <input onChange={e => setPassword(e.target.value)} type='password' placeholder='Sua senha'></input>
                    </div>
                    <a href="">Esqueci minha senha</a>
                </div>
                <div class="login-buttons">
                    <button onClick={handleSignIn} class="btn-entrar">Entrar</button>
                    <button class="btn-cad">Cadastre agora</button>
                </div>
            </div>
        </section>
        
        <Footers/>

        </div>
    )
}