import React from 'react'
import Slider from 'react-slick'
import "./Section2.scss"

import console1 from "../../../../../Assets/Images/console-img-1.png";
import console2 from "../../../../../Assets/Images/console-img-2.png";
import console3 from "../../../../../Assets/Images/console-img-3.png";
import console4 from "../../../../../Assets/Images/console-img-4.png";
import console5 from "../../../../../Assets/Images/console-img-5.png";
import console6 from "../../../../../Assets/Images/console-img-6.png";


const Section2 = () => {
  // setting Slick
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  
  return (
    <div className="console">
      <div className="consoleText">
        Creative,<br />
        Fun and- <br />
        Enjoyable <br />
        work <br />
        Impressive <br />
      </div>
      <div className="consoleBox">
        <div className="container">
          <Slider {...settings}>
            <div className="consoleBoxItem">
              <img src={console1} alt="" />
            </div>

            <div className="consoleBoxItem">
              <img src={console2} alt="" />
            </div>

            <div className="consoleBoxItem">
              <img src={console3} alt="" />
            </div>

            <div className="consoleBoxItem">
              <img src={console4} alt="" />
            </div>

            <div className="consoleBoxItem">
              <img src={console5} alt="" />
            </div>

            <div className="consoleBoxItem">
              <img src={console6} alt="" />
            </div>

          </Slider>
        </div>
      </div>
    </div>

  )
}

export default Section2