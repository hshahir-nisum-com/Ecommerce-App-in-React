import { Carousel } from 'react-responsive-carousel';
import React from 'react';
import Img1 from './images/cover1.jpg';
import Img2 from './images/cover2.jpg';
import Img3 from './images/cover3.jpg';

export default function slider() {

    return (
        <Carousel autoPlay  showArrows={true} showThumbs={false}>
              
                <div>
                    <img src={Img1} alt="img1" />
                </div>
                <div>
                    <img src={Img2} alt='img2'/>
                </div>
                <div>
                    <img src={Img3} alt='img3'  />
                </div>  
        </Carousel>
    )
}
