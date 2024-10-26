import './assets/css/Footer.css'
import footer from './assets/images/footer.png'
import  "./fontawesome-free-6.6.0-web/css/all.min.css"
function Footer(){
    return(
    <>
    <div id="footer">
        <img src={footer} id="image"></img>
        <div id="social_media">
            <a href="#" className="SM"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="SM"><i class="fa-brands fa-instagram"></i></a>
            
        </div>
        <p id="cp">&copy; Copyright 2024</p>
            
        
    </div> 
    </>
    )
}export default Footer