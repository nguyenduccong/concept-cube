import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Contacts.scss";

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <div className="boxContainer">
      <div className="ContactPage">
        <div className="BoxTitle">Contact us</div>
        <div className="BoxContact">
          <div className="BoxInfor">
            <div className="top">
              <div className="GroupInfor">
                <div className="title">Work With Us.</div>
                <div className="mail">looc.tzlee@gmail.com</div>
              </div>

              <div className="GroupInfor">
                <div className="title">Careers.</div>
                <div className="mail">looc.tzlee@gmail.com</div>
              </div>
            </div>

            <p className="bot">
              {t('topContact')}
              <br />
              {t('botContact')}
              <br />
              T 02 543 4983
            </p>
          </div>
          <div className="BoxMap">
            <iframe title="looclocation" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.6611743669755!2d127.0209823151663!3d37.51590877980742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3e9253866e9%3A0xc7c3669311c4500c!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDrhbztmITrj5kg64-E7IKw64yA66GcOOq4uCAxNy0xMCAxRg!5e0!3m2!1sko!2skr!4v1574831755695!5m2!1sko!2skr" frameBorder={0} allowFullScreen style={{ visibility: 'inherit', opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)' }} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contacts