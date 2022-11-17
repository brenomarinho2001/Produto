import Footers from '../../Footers'
import Header from '../../Header'
import './Home.css'

export default function Home () {
    return (
        <div className='container'> 
            <Header style={{height:'20%'}}/>
            <Footers/>
        </div>
        
    )
}