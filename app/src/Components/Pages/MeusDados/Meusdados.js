import Header from "../../Basics/Header/Header";
import Footers from "../../Basics/Footer/Footers";
import './MeusDados.css'

import { FaUser } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../../service/firebase_config";
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function MeusDados() {

    return (
        <div className="dados">
            <h2 className="titulo" >Meus dados</h2>

            <div className="linha"></div>

            <div style={{ width: '96%', paddingTop: '35px', justifyContent:'center', alignContent:'center', display:'flex' }}>


                <div style={{ width: '99%', marginLeft: '20px', textAlign: 'left' }}>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h1 style={{ paddingBottom: '10px', marginLeft: '0', fontSize: '15px' }} class='texto'>Nome Completo:</h1>
                        <input placeholder='Rochelle Silveira' className="inputsCadastro" />

                        <h1 style={{ paddingBottom: '10px', marginLeft: '0', fontSize: '15px' }} class='texto'>E-mail:</h1>
                        <input placeholder='********@gmail.com' className="inputsCadastro" />

                        

                    </div>



                </div>
                <div style={{  width: '99%', marginLeft: '20px', textAlign: 'right' }}>
                        <h1 style={{ paddingBottom: '10px', marginLeft: '0', fontSize: '15px' }} class='texto'>Data de Nascimento:</h1>
                        <input placeholder='15/03/1998' className="inputsCadastro" />
                        
                        <h1 style={{ paddingBottom: '10px', marginLeft: '0', fontSize: '15px' }} class='texto'>Senha:</h1>
                        <input placeholder='**********' className="inputsCadastro" />

                        <button onClick={<span>Dados Atualizados com sucesso!</span>} style={{
                            width: '50%', height: '40px',
                            backgroundColor: '#66449c', color: 'white',
                            cursor: 'pointer'
                        }
                        }>Atualizar Dados!
                        </button>


                </div>




            </div>

        </div>
    )
}