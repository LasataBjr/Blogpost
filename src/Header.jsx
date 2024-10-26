
import logo from "./assets/images/logo.png" 
import "./assets/css/header.css"
import  "./fontawesome-free-6.6.0-web/css/all.min.css"
import './DancingScript-VariableFont_wght.ttf'
import {BrowserRouter as  Router, Link } from 'react-router-dom'
function Head(){
    return(
        <>
        <Router>
            <nav className="curved-top">
                {/* Logo, Menu, and Welcome Text go here*/}
                
                    <div>
                        <Link href="/"><img src={logo} className="logo" ></img></Link>
                    </div>
                    
                    <ul id="navbar">
                        <li><Link to="/" className="active" >Home</Link></li>
                        <li><Link to="/">About Me</Link></li>
                        <li><Link to="/"><i class="fa fa-cog" aria-hidden="true"></i></Link></li>
                        
                    </ul>
                   
            
                    <div id="intro">
                            <h1>Welcome!</h1>
                            <p>Lets explore the world together</p>
                            <button id="btn"><Link to="/">Read More</Link></button>
                    </div>
            </nav>
        </Router>        
                        
                
                
            
        </>
    );
}
export default Head