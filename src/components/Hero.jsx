import { useState } from 'react';

import styles from '../styles/styles';
import { GetStarted, Button } from '../components';
import { bitcoin } from '../assets';
import { AiOutlineArrowRight } from "react-icons/ai";
import { ContactModal } from '../components';
import { AiFillPhone } from "react-icons/ai";
import { useTranslation } from 'react-i18next';


const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const [t, i18n] = useTranslation("global");

  const openContactModal = () => {
    setShowModal(true);
  }

  const closeContactModal = () => {
    setShowModal(false);
  }
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col`}>

        <div className="flex flex-row items-center py-[6px] px-4 transparent-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">{t("home.subtitle.1")}</span> {t("home.subtitle.2")} {" "}
            <span className="text-white"> {t("home.subtitle.3")} </span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full relative">
          <h1 className="flex-1 font-poppins font-semibold lg:text-[65px] sm:text-[55px] text-[37px] text-white sm:leading-[100.8px] leading-[75px]">
          {t("home.tittle.1")} <br />
            <span className="primary_text_shade break-all">{t("home.tittle.2")} </span>
           
            {t("home.tittle.3")}
          </h1>
          <div className="ss:flex z-10 hidden md:mr-4 mr-0 absolute right-[0] md:right-[-120px]">
            <GetStarted />
          </div>
        </div>

        <p className={`${styles.paragraph} max-w-[80%] md:max-w-[80%] lg:max-w-[85%] mt-5`}>
        {t("home.description")}
        
        </p>
       

        <div className={`md:${styles.flexCenter} inline-block w-full sm:w-auto sm:ml-10 ml-0 sm:mt-0 mt-10`}>
          <Button onclick={openContactModal} title={t("home.button")} icon={<AiOutlineArrowRight></AiOutlineArrowRight>} />
        </div>

        {
          showModal &&
          <ContactModal close={closeContactModal} />
        }

      </div>

      <div className={`flex-1 flex ${styles.flexEnd} relative`}>
        <img src={bitcoin} alt="bitocin" className='h-[280px] ss:h-[450px] object-contain' />

        <div className="hidden sm:flex absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="hidden sm:flex absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="hidden sm:flex absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </section>
  )
}

export default Hero;