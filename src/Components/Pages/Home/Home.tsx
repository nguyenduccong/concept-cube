import React from 'react';
import Section1 from './Components/Section1/Section1';
import Section2 from './Components/Section2/Section2';
import Section3 from './Components/Section3/Section3';
import Section4 from './Components/Section4/Section4';
import Section5 from './Components/Section5/Section5';
import "./Home.scss";

import ReactFullpage from '@fullpage/react-fullpage';
import OnLeave from './animation/onLeave';
import AfterLoad from './animation/afterLoad';

const Home = () => {
  const fullpageOptions = {
    anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "fivePage"],
  };

  return (
    <ReactFullpage
      licenseKey={'263DXXXX-B839XXXX-AE67XXXX-F398XXXX'}
      {...fullpageOptions}
      navigation
      //fullpage options
      scrollingSpeed={700} /* Options here */
      onLeave={OnLeave}
      afterLoad={AfterLoad}
      normalScrollElements={".itemList"}
      render={() => {
        return (
          <>
            <div className="section">
              <Section1 />
            </div>

            <div className="section">
              <Section2 />
            </div>

            <div className="section">
              <Section3 />
            </div>

            <div className="section">
              <Section4 />
            </div>

            <div className="section">
              <Section5 />
            </div>
          </>
        );
      }}
    />
  )
}

export default Home