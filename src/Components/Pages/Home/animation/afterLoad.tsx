import { gsap, Power3 } from 'gsap';
import "../../../../Assets/Styles/index.scss";

const AfterLoad = (origin: any, destination: any, direction: any) => {

  const tl = gsap.timeline({});

  switch (destination.index) {
    case 0:
      gsap.to(".boxContentBanner_both", {
        x:0,
        duration: 1,
        opacity: 1,
        ease: "power4.out",
      });
      gsap.to(".top", {
        y: 0,
        opacity: 1,
        duration: 1,
        delay:.3,
        ease: "power4.out",
      });

       gsap.to(".bot", {
        y: 0,
        opacity: 1,
        duration: 1,
        delay:.3,
        ease: "power4.out",
      });

      gsap.utils.toArray(`.imgBg`).forEach((panel: any, i: any) => {
        tl.to(
            panel, {
              y: 0,
              opacity: 1,
              delay:.3,
              ease: "power4.out",
        }, ">-0.5")
    });
      break;

    case 1:
      gsap.to(".consoleText", {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
      });
      gsap.to(".consoleBox", {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power4.out",
        delay: .5
      });
      break;



    case 2:

      gsap.to(
        '.three-item-wrapper-0',
        { y: 0, opacity: 1, duration: 0.5, delay: .2 }
      );
      gsap.to(
        '.three-item-wrapper-1',
        { y: 0, opacity: 1, duration: 0.5, delay: .5 }
      );
      gsap.to(
        '.three-item-wrapper-2',
        { y: 0, opacity: 1, duration: 0.5, delay: .2 }
      )
      gsap.to(
        '.three-item-wrapper-3',
        { y: 0, opacity: 1, duration: 0.5, delay: .5 }
      );

      break;

    case 3:
        gsap.to(".history",{
          backgroundColor:"#99dd6e",
          duration:.3,
        })

      tl.to(".title", {
        y: 0,
        duration: 0.8,
        opacity: 1,
        ease: Power3.easeOut,
        delay:.3
      })
      .to(
        ".listHistory",
        {
          x: 0,
          duration: 1,
          opacity: 1,
          ease: Power3.easeOut,
        },
        "-=0.3"
      );


      break;


    case 4:
      tl.to(".titleFT", {
        opacity: 1,
        duration: 0.8,
        x: 0,
        ease: Power3.easeOut,
      })
        .to(
          ".infoFT",
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
          },
          "-=0.5"
        )
        .to(
          ".footerText",
          {
            opacity: 1,
            duration: 0.8,
            x: 0,
            ease: Power3.easeOut,
          },
          "-=0.2"
        );


      break;

    default:
      break;
  }

}

export default AfterLoad