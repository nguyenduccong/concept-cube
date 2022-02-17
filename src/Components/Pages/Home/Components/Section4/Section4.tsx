import React from 'react'
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import { historyData } from './data/history.data';
import "./Section4.scss"

const Section4 = () => {
  const { t } = useTranslation();

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="history">
      <div className="container">
        <div className="boxHistory">
          <div className="title">History</div>
          <div className="boxContent listHistory">
            <Slider {...settings}>
              {historyData.map((item, idx) => (
                <div className="boxContent_item">
                  <div className="year">{item.year}</div>
                  <div className="itemList">
                    {item.listItem.map((list, idxs) => (
                      <div className="box">
                        {/* <h2>{list.nameProduct}</h2> */}
                        <h2>{t(`historyData.${idx}.listItem.${idxs}.nameProduct`)}</h2>
                        <p>{list.nameJob}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Slider>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Section4