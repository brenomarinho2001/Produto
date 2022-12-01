import Header from "../../Basics/Header/Header";
import Footers from "../../Basics/Footer/Footers";
import './MeusDados.css'

import { FaUser } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../../service/firebase_config";
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function MeusDados(){

    return(
        <div className="dados">
            
        </div>
    )
}