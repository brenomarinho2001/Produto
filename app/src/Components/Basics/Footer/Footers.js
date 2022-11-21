
import { FaInstagramSquare } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";

import { BsFillTelephoneFill } from "react-icons/bs";

import { FaFacebookF } from "react-icons/fa";


import { BsTwitter } from "react-icons/bs";

import imgfooterright from '../../images/footer_01.png'

import imgfooterleft from '../../images/footer_02.png'





import './FooterCss.css'

export default function Footers(){

    return(
    <footer>
        <img src={imgfooterright} class='imgfooter'/>
        <img src={imgfooterleft} class='imgfooter2'/>
        <div class="footer-body">
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <div className='footer-left' style={{textAlign:'left',color:'black',display:'flex',alignItems:'flex-end',justifyContent:'space-between',width:'100%',paddingBottom:'60px'}}>
                    
                    <div style={{display:'flex',width:'70%'}}>
                        <div style={{color:'white',width:'40%'}}>
                            <h1 style={{paddingBottom:'30px',fontSize:'20px'}} className="texto" >Fique por dentro</h1>
                            <p style={{paddingBottom:'30px'}} class='texto2'>Assine a newletter da Verter!</p>
                            <input placeholder='Seu e-mail' className="inputs"/>
                            <button className="button">Cadastrar</button>
                        </div>
                        

                        <div style={{textAlign:'left',color:'white',display:'flex',flexDirection:'column',justifyContent:'space-between',}}>
                            <div>
                             <h1 className="texto" style={{fontSize:'20px'}}>Entre em contato</h1>
                            </div>
                            
                            <div>
                                <div style={{display:'flex'}}>
                                    <AiOutlineMail style={{fontSize:'20px',color:'white',paddingRight:'10px'}}/>
                                    <p class='texto2'>fale@verter.com.br</p>
                                </div>
                                
                                <div style={{display:'flex',paddingTop:'20px'}}>
                                    <BsFillTelephoneFill style={{fontSize:'20px',color:'white',paddingRight:'10px'}}/>
                                    <p class='texto2'>(88)9 9999 9999</p>
                                </div>
                                
                            </div>
                            
                            
                        </div>
                    </div>
                    

                    <div style={{display:'flex'}}>
                         <div style={{height:'40px',width:'40px',backgroundColor:'rgba(255,255,255,.3)',display:'flex',alignItems:'center',justifyContent:'center',marginRight:'20px',cursor:'pointer',zIndex:'100'}}>
                            <GrInstagram style={{fontSize:'30px',color:'white'}}/>
                         </div>

                         <div style={{height:'40px',width:'40px',backgroundColor:'rgba(255,255,255,.3)',display:'flex',alignItems:'center',justifyContent:'center',marginRight:'20px',cursor:'pointer',zIndex:'100'}}>
                            <BsTwitter style={{fontSize:'30px',color:'white'}}/>
                         </div>

                         <div style={{height:'40px',width:'40px',backgroundColor:'rgba(255,255,255,.3)',display:'flex',alignItems:'center',justifyContent:'center',marginRight:'20px',cursor:'pointer',zIndex:'100'}}>
                            <FaFacebookF style={{fontSize:'30px',color:'white'}}/>
                         </div>

                 

                         
                        
                   
                    </div>

                
                    
                </div>
                
            </div>
            
            <div style={{color:'black',display:'flex',justifyContent:'space-between',paddingTop:"50px",color:'white'}}>
            <p class='texto2'>© <span style={{fontWeight: "bold"}} class='texto2'>2022 Verter</span> - Feito com orgulho em Quixadá!</p>
            <p class='texto2'>Desenvolvido por <span>VerterLabs</span></p>
            </div>
            
        </div>
            
        
    </footer>
    )
}