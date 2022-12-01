import Header from "../../Basics/Header/Header";
import Footers from "../../Basics/Footer/Footers";
import './LoginCss.css'

import { FaUser } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../../service/firebase_config";
import { useState } from 'react';
import { Link } from "react-router-dom";





export default function Login({a}){
    // Firebase
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, loading, error] = 
    useSignInWithEmailAndPassword(auth);
    
    // function handleSignIn(e){
    //     e.preventDefault()
    //     signInWithEmailAndPassword(email, password)
    // }
    // if (loading) {
    //     return window.localtion.href = 'http://localhost:3000/Home:'
    // }
    // if (error) {
    //     return window.alert("Senha ou Email Inválido")
    // }


    function autentic(){
        a(email,password)
    }

    ////////////////
    return(
        <div style={{height:'100vh'}}>

        

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

                    
                    <Link to='/Login' style={{width:'92%'}} ><button onClick={autentic} class="btn-cad">Entrar</button></Link>
                    <Link  to='/Cadastro' style={{width:'92%'}}><button class="btn-cad">Cadastre agora</button></Link>
                </div>
            </div>
        </section>
        
       

        </div>
    )
}