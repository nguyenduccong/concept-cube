import { gsap, Power3 } from 'gsap';

const cancelSection = (index: number) => {
  switch (index) {
    case 1:
      gsap.to(".boxContentBanner_both", { x: "-100%",opacity:0,duration:1 });
      gsap.to(".top", { y: "-100%",opacity:0 });
      gsap.to(".bot", { y: "100%",opacity:0 });
      gsap.to(".imgBg", { y: "-100%",opacity:0 });

      break;

    case 2:
      gsap.to(".consoleText", { opacity: 0, x: -880, duration: 1, ease: "power4.out", });
      gsap.to(".consoleBox", { opacity: 0, duration: 1, ease: "power4.out", });
      break;

    case 3:
      gsap.to(".three-item-wrapper-0", { opacity: 0, y: "-100%" });
      gsap.to(".three-item-wrapper-1", { opacity: 0, y: "100%" });
      gsap.to(".three-item-wrapper-2", { opacity: 0, y: "-100%" });
      gsap.to(".three-item-wrapper-3", { opacity: 0, y: "100%" });
      break;

    case 4:
      gsap.to(".history", { backgroundColor:"transparent" });
      gsap.to(".title", { opacity: 0, duration: 1, ease: "power4.out", y: -100 });
      gsap.to(".listHistory", { opacity: 0, duration: 1, ease: "power4.out", x: "-100%" });
      break;

    case 5:
      gsap.to(".titleFT", { opacity: 0, x: 300 });
      gsap.to(".infoFT", { opacity: 0, y: -50 });
      gsap.to(".footerText", { opacity: 0, x: 200 });

      break;
    default: break
  }
}

const OnLeave = (origin: any, destination: any, direction: any) => {

  switch (destination.index) {

    // section 1
    case 0:
      //exa,ple

      cancelSection(2)
      gsap.from(".firstpage-tit", {
        autoAlpha: 0,
        y: -980,
        duration: 1,
        ease: "power4.out",
      });
      gsap.from(".firstpage-detail", {
        autoAlpha: 0,
        x: -280,
        duration: 1,
        ease: "power4.out",
        delay: 0.7,
      });
      gsap.from(".firstpage-sub", {
        autoAlpha: 0,
        x: -780,
        duration: 1.2,
        ease: "power4.out",
      });


      break;
    //section 2
    case 1:
      // cancel animation section 1
      cancelSection(1)

      // cancel animation section 3
      cancelSection(3)

      break;

    // section 3 
    case 2:
      // cancel animation section 2
      cancelSection(2)
      // cancel animation section 4
      cancelSection(4)

      break;

    // section 4
    case 3:

      // cancel animation section 3
      cancelSection(3)
      // cancel animation section 5
      cancelSection(5)
      break;

    // section 5
    case 4:

      // cancel animation section 4
      cancelSection(4)
      break;

    default:
      break;
  }

}

export default OnLeave