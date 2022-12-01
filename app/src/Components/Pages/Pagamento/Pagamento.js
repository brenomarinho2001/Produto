

// import Header from "../../Basics/Header/Header";
// import Footers from "../../Basics/Footer/Footers";

import Footers from '../../Basics/Footer/Footers'
import Header from '../../Basics/Header/Header'
import './PagamentoCss.css'

import { Form, Link } from 'react-router-dom'

export default function Pagamento() {
    return (
        <div> 
           
           
            <div class="progress">
                <h2>Pagamento Entrega</h2>
                <div class="progress-bar">
                    <span>Passo 2 de 3</span>
                </div>
            </div>
            <div class="bar">
                <div class="cor" style={{width:'50%'}}></div>
            </div>

            <div class="body">
                <div class='body_center'>
                    <div class='box' style={{marginBottom:'100px'}}>
                        <h3 style={{marginBottom:'20px',fontSize:'30px'}}>Endereço</h3>

                        <p style={{marginBottom:'10px'}}>Entregar neste endereço?</p>
                        <input type="text" placeholder="Insira sua Rua" style={{marginRight:'20px',marginBottom:'10px',width:'50%',height:'35px',backgroundColor:'#492C79',color:'white', border: 'none',paddingLeft:'10px'}}/>
                        <button style={{width:'46%',height:'35px',backgroundColor:'#492C79',color:'white',cursor:'pointer'}}>Sim,está pronto!</button>
                        <p style={{textDecoration: 'underline'}} className='under' >Não, entregar para outro endereço</p>
                    </div>

                    <div class='box' style={{marginBottom:'100px'}}>
                        <h3 style={{marginBottom:'20px',fontSize:'30px'}}>Entrega</h3>

                        <p style={{marginBottom:'10px'}}>Produto Digital:</p>
                        <input type="text" placeholder="Insira sua Email" style={{marginRight:'20px',marginBottom:'10px',width:'100%',height:'35px',backgroundColor:'#492C79',color:'white', border: 'none',paddingLeft:'10px'}}/>
                        
                        <p>Produto Físico:</p>
                        <form>
                        <input type="radio" name="gender" value="male"/> Transportadora - De 01 de Janeiro a 6 de Janeiro<hr/>
                        <input type="radio" name="gender" value="female"/> PAC - De 01 de Janeiro a 6 de Janeiro<hr/>
                        <input type="radio" name="gender" value="other"/> SEDEX - De 01 de Janeiro a 6 de Janeiro
                        </form>

                    </div>

                    <div class='box' style={{marginBottom:'100px'}}>
                        <h3 style={{fontSize:'30px'}}>Pagamento</h3>

                        <form>
                        <input type="radio" name="gender" value="male"/> Pix<hr/>
                        <input type="radio" name="gender" value="female"/> PagSeguro<hr/>
                        <input type="radio" name="gender" value="other"/> Outra Forma
                        </form>

                    </div>


                    <Link to='/Finalizar'><button class='box' style={{width:'400px',height:'45px',backgroundColor:'#33BF5A',color:'white',cursor:'pointer',textAlign:'center'}}>Finalize Sua Compra</button></Link>

                    

                    
                </div>


            </div>
            
           
        </div>
    )
}