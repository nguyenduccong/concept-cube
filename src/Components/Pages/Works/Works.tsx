import { Tabs } from "antd";
import React, { useEffect, useState } from 'react';
import { gsap, Power3 } from 'gsap';

import logoFt from '../../../Assets/Images/works/logoFt.png';
import ListCard from './component/ListCard/index';
import { WorksDataAll } from './data/dataAll.works';
import "./Works.scss";

const { TabPane } = Tabs;

const Works = () => {
  return (
    <div className="boxContainer">
      <div className="Works">
        <div className="wrapper">
          <div className="content">
            <div className="workTitle">WORKS</div>
            <Tabs defaultActiveKey="1" >
              <TabPane tab="ALL" key="1">
                <ListCard data={WorksDataAll} />
              </TabPane>
              <TabPane tab="SHOWREEL" key="2">
                <ListCard data={WorksDataAll} />
              </TabPane>
              <TabPane tab="GAME DEV" key="3">
                <ListCard data={WorksDataAll} />
              </TabPane>

              <TabPane tab="UI DESIGN" key="4">
                <ListCard data={WorksDataAll} />
              </TabPane>

              <TabPane tab="SI" key="5">
                <ListCard data={WorksDataAll} />
              </TabPane>

              <TabPane tab="GAME MARKETING" key="6">
                <ListCard data={WorksDataAll} />
              </TabPane>
            </Tabs>
            <div className="workFooter">
              <div className="footerMenu">
                <a href="/" className="logo" ><img src={logoFt} alt="" /></a>
                <a href="https://vimeo.com/loocreative" target=" _blank">VIMEO</a>
                <a href="https://www.instagram.com/loocreative" target=" _blank">YOUTUBE</a>
                <a href="https://www.instagram.com/loocreative" target=" _blank">INSTAGRAM</a>
                <a href="https://www.facebook.com/loocreativeinc-110670107091286/" target=" _blank">FACEBOOK</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works
