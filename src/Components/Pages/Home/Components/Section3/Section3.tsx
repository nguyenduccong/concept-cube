import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { intrduceData } from './data/introduce.data';
import "./Section3.scss"

const Section3 = () => {
  const [IdHover, setIdHover]:any = useState(false);
  const { t } = useTranslation();

  return (
    <div className="introduce">
      <div className="container">

        <div className="introduceBox" >
          {intrduceData.map((item, idx) => (
            <div className={`introduceBoxItem three-item-wrapper-${idx}`} key={item.id} onMouseOver={() => setIdHover(item.id)} onMouseOut={() => setIdHover(false)}>
              <div className="introduceBoxItemTitle">
                <span>{item.titleSpan}</span>
                {item.title}
              </div>

              <div className="introduceBoxItemImage">
                {
                  IdHover === item.id
                    ?
                    <img src={item.imgHover}  alt={item.imgHover}/>
                    :
                    <img src={item.imgHidden} alt={item.imgHover}/>
                }
              </div>

              <div className="introduceBoxItemContent">
                <div className="nameContent">
                  {item.nameContent}
                </div>
                <div className="content">
                {t(`intrduceData.${idx}.content`)}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>

  )
}

export default Section3