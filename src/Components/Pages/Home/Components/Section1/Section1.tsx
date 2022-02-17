import React from 'react';
import "./Section.scss";

import Logo from '../../../../../Assets/Images/ConceptCube_Logo.svg';

import obj1 from "../../../../../Assets/Images/bg-object-1.jpg";
import obj2 from "../../../../../Assets/Images/bg-object-2.jpg";
import obj3 from "../../../../../Assets/Images/bg-object-3.jpg";
import obj4 from "../../../../../Assets/Images/bg-object-4.jpg";
import obj5 from "../../../../../Assets/Images/bg-object-5.jpg";

const Section1 = () => {
  return (
    <div className="section1">
    <div className="container h100">
        <div className="boxContentBanner">
            <div className="boxContentBanner_top">
                <img className="logo top" src={Logo} alt="" />
                <div className="text top">About The Project</div>
            </div>
            <div className="boxContentBanner_both">
                everything
                <br />
                is in the
                <br />
                conceptcube
            </div>
            <div className="boxContentBanner_bottom bot">
                ConceptCube Company Introduction
            </div>
        </div>
    </div>

    <div className="BoxBg">
        <img src={obj1} alt="" className="bg_object_1 imgBg" />
        <img src={obj2} alt="" className="bg_object_2 imgBg" />
        <img src={obj3} alt="" className="bg_object_3 imgBg" />
        <img src={obj4} alt="" className="bg_object_4 imgBg" />
        <img src={obj5} alt="" className="bg_object_5 imgBg" />
    </div>

</div>

  )
}

export default Section1