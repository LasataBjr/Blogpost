import Img1 from './assets/images/img1.jpg'
import Img2 from './assets/images/img2.jpg'
import Img3 from './assets/images/img3.jpg'
import Img4 from './assets/images/img4.jpg'
import Img5 from './assets/images/img5.jpg'
import './assets/css/article.css'
function Article()
{
    return (

            <div id="lower-section">
                <div id="shape1"></div>
                <div id="shape2"></div>
                <div id="article">
                    <h3 id="a-tt">Article</h3>
                    <p id="a-p">She didn't like the food. She never did. She made the usual complaints and started the tantrum he knew was coming. But this time was different.
                    She didn't like the food. She never did. She made the usual complaints and started the tantrum he knew was coming. But this time was different.
                    </p>
                </div>
                <div id="img-grid">
                    <img  className="grid img1" src={Img1}/>
                    <img className="grid img2" src={Img2}/>
                    <img className="grid img3" src={Img3}/>
                    <img className="grid img4" src={Img4}/>
                    <img className="grid img5" src={Img5}/>
                </div>

            </div>
    )
}
export default Article