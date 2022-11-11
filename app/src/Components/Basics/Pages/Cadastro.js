

import { FaUser } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import Header from "../Header";
import Footers from "../Footers";

import './CadastroCss.css'

//IMAGEM


import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function Cadastro(){

    return(
        <div style={{height:'100vh',backgroundColor:'black',color:'white'}}>

            <Header style={{height:'20%'}}/>
            
                <section class="login" style={{height:'85%',width:'100%',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                    <div style={{height:'10%',textAlign:'left',display:'flex',alignItems:'center',width:'95%'}} className="boxCadastro">
                        <h1 class='texto'> CADASTRE-SE AGORA</h1>
                    </div>
                    <div style={{width:'100%',height:'90%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <div style={{height:'400px',width:'1300px',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>

                            <div style={{width:'100%',display:'flex'}}>

                                <div style={{width:'50%',paddingRight:'20px',textAlign:'left'}}>
                                    <h1 style={{paddingBottom:'10px',marginLeft:'0',fontSize:'20px' }} class='texto'>Dados Pessoais:</h1>
                                    <div style={{display:'flex',flexDirection:'column'}}>
                                        <input placeholder='Seu e-mail' className="inputsCadastro"/>
                                        <input placeholder='Nome Completo' className="inputsCadastro"/>
                                        <input placeholder='Data de Nascimento' className="inputsCadastro"/>
                                        <input placeholder='Sua Senha' className="inputsCadastro"/>
                                        <input placeholder='Confirmar Senha' className="inputsCadastro"/>

                                    </div>
                                    
                                </div>


                                <div style={{width:'50%'}}>


                                    <div style={{width:'99%',marginLeft:'20px',textAlign:'left'}}>
                                        <h1 style={{paddingBottom:'10px',marginLeft:'0',fontSize:'20px'}} class='texto'>Endereço:</h1>
                                        <div style={{display:'flex',flexDirection:'column'}}>
                                            <input placeholder='CEP' className="inputsCadastro"/>
                                            <input placeholder='Endereço' className="inputsCadastro"/>
                                            <input placeholder='Complemento' className="inputsCadastro"/>
                                            <input placeholder='Estados' className="inputsCadastro"/>
                                            <input placeholder='Cidade' className="inputsCadastro"/>
                                            
                                            <button style={{width:'103%',height:'40px',backgroundColor:'#66449c',color:'white',cursor:'pointer'}}>Cadastrar</button>
                                        
                                        </div>

                                    
                                    </div>

                                    
                                </div>
                                
                            </div>
                            

                            
                        </div>
                    </div>
                </section>

            <Footers/>

        </div>
    )
}