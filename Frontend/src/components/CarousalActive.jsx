import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from "../284.jpg";
import image2 from "../1160.jpg";
import image3 from "../1338.jpg" ;
import image4 from "../1657.jpg" ;

export const CarousalActive = () => {
    const imageStyle = {
        maxWidth: '100%',
        height: 'auto',
        maxHeight: '700px',
        margin: 'auto',
    };

    return (
        <Carousel showThumbs={false}>
            <div>
                <img src={image1} alt={image1} style={imageStyle} />
            </div>
            <div>
                <img src={image2} alt={image2} style={imageStyle} />
            </div>
            <div>
                <img src={image3} alt={image3} style={imageStyle} />
            </div>
            <div>
                <img src={image4} alt={image4} style={imageStyle} />
            </div>
        </Carousel>
    );
}

export default CarousalActive;
