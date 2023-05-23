import React from 'react';
import Banner1 from "../../../assets/home/01.jpg"
import Banner2 from "../../../assets/home/02.jpg"
import Banner3 from "../../../assets/home/03.png"
import Banner4 from "../../../assets/home/04.jpg"
import Banner5 from "../../../assets/home/05.png"
import Banner6 from "../../../assets/home/06.png"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={Banner1} />
            
            </div>
            <div>
                <img src={Banner2} />
                
            </div>
            <div>
                <img src={Banner3} />
                
            </div>
            <div>
                <img src={Banner4} />
                
            </div>
            <div>
                <img src={Banner5} />
                
            </div>
            <div>
                <img src={Banner6} />
                
            </div>
        </Carousel>
    );
};

export default Banner;