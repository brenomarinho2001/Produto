import './Pedidos.css'


import Header from "../../Basics/Header/Header";
import Footers from "../../Basics/Footer/Footers";

import { FaUser } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../../service/firebase_config";
import { useState } from 'react';
import { Link } from "react-router-dom";
import camisa_foto from '../../images/Roupas/camisa.png'

export default function Pedidos() {
    return (
        <div className='pedidos'>

            <h2 className="titulo" >Pedidos</h2>

            <div className="linha"></div>

            <div className='pedidoss'>
                <div className='pedido_01'>
                    <div className='direita' >
                        <h5 className='texto_pd'>03/12/2022</h5>
                        <div className='d_partedebaixo'>
                            <img src={camisa_foto} />

                            <div className='texto_d'>
                                <br />
                                <br />
                                <br />
                                <br />
                                <h3>CHICLETINHO</h3>
                                <h4> Formato Digital</h4>
                                <div className='estado_p'>

                                    <div className='circulo' />
                                    <h5> Em andamento</h5>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='esquerda'>
                        <h5 className='texto_pe'>#0000A1</h5>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <h3>VER MAIS</h3>
                    </div>


                </div>
            </div>



        </div>


    )
}


