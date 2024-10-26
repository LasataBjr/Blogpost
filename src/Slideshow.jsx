import React, {useEffect, useState} from 'react'
import './assets/css/Slideshow.css'
import  Img1 from './assets/images/image1.jpg'
import  Img2 from './assets/images/image2.jpg'
import  Img3 from './assets/images/image3.jpg'


const Slideshow = () =>
{
    const Slides = [
                    {
                        image: Img1,
                        title: 'Title 1',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    },
                    {
                        image: Img2, 
                        title: 'Title 2',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    },
                    {
                        image: Img3, 
                        title: 'Title 3',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'                         
                    }
                   ];
    
    const[currentSlide, setCurrentSlide]   = useState(0);
    //   allows you to perform side effects in your components, like fetching data, setting up subscriptions, or manually changing the DOM
      useEffect(() => {
                        const interval = setInterval(() => {
                            setCurrentSlide((prevSlide) =>
                                prevSlide === Slides.length - 1 ? 0 : prevSlide + 1
                            );
                        }, 5000);// Change image every 5 seconds

            // Cleanup interval on component unmount
                return() => clearInterval(interval);
                            
            }, [Slides.length]);

    return(
        <>
            <div id="Slideshow">
                <div id="img-container">
                    <img src={Slides[currentSlide].image} alt="Slideshow"></img>
                </div>
                <div id="Content">
                    <h2 id="img-title">{Slides[currentSlide].title}</h2>
                    <p id="img-content">{Slides[currentSlide].description}</p>
                </div>

            </div>

        </>
    );
}
export default Slideshow 
