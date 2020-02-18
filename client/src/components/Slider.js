import React from 'react';
import { Slide } from "react-slideshow-image";
import vetement1 from '../img/vetement1.jpg';
import vetement2 from '../img/vetement2.jpg';
import vetement3 from '../img/vetement3.jpg';
import '../App.css';

const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrow: true,
}
const Slideshow = ()  => {
    return (
        <div className= "containerSlide">
            <Slide {...proprietes} styles>
                <div className="each-slide">
                    <div>
                        <img src = {vetement1} alt = "img1" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src = {vetement2} alt = "img2" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src = {vetement3} alt = "img3" />
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;