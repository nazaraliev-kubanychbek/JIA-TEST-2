import "./header.scss";
import { Link } from "react-router-dom";
import bifIcon from "./icons/bifIcon.svg";
import greenEconimyIcon from "./icons/greenEconomyIcon.svg";
import arrow from "../../img/header/Icons.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@hooks/usemedia/useMedia";
import { BurgerMenu } from "..";

export const Header = () => {
  const [show, setShow] = useState(false);
  const [lang, setLang] = useState("Рус");

  const languages = ["Рус", "Eng", "Кыр"];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const showLang = () => {
    setShow(!show);
  };

  const changeLang = (lang) => {
    setLang(lang);
  };

  const w = useMediaQuery("(min-width: 1024px)");
  return (
    <header >

        <div className={'header-top'}>
          <div className="container">
        <div className="header-top-container">
        <div className="header-top-img">
            <img src={bifIcon} alt="" />
          </div>
          <div className="header-top-img">
            <img src={greenEconimyIcon} alt="" />
          </div>
        </div>
          </div>

        </div>

        <div className="header">
          <div className="container header-container">
            <div className="header-nav">
              <Link onClick={scrollToTop} to={"/"}>
                Главная
              </Link>
              <Link onClick={scrollToTop} to={"/projects"}>
                О проекте
              </Link>
              <Link onClick={scrollToTop} to={"/funds"}>
                Источники финансирования
              </Link>
              <Link onClick={scrollToTop} to={"/business"}>
                Бизнес проекты
              </Link>
              <Link onClick={scrollToTop} to={"/exhibition"}>
                Выставка
              </Link>
            </div>

            <div className="header-lang">
              <div className="header-lang-text">Рус</div>
              <img src={arrow} alt="" className="header-lang-icon" />
            </div>
          </div>
        </div>

    </header>
  );
};

{
  /* <div className="container">
<div className={styles.header}>
    <div className={styles.links}>
      {!w ? (
        <BurgerMenu />
      ) : (
        <>
          <Link onClick={scrollToTop} to={'/'}>
          Главная
          </Link>
          <Link onClick={scrollToTop} to={'/projects'}>О проекте</Link>
          <Link onClick={scrollToTop} to={'/funds'}>Источники финансирования</Link>
          <Link onClick={scrollToTop} to={'/business'}>Бизнес проекты</Link>
          <Link onClick={scrollToTop} to={'/exhibition'}>Выставка</Link>
        </>
      )}
    </div>

    <div onClick={showLang} style={show ? { position: 'absolute', right: '30px', borderRadius: '20px' } : { backgroundColor: 'none' }} className={styles.language}>
      <div className={styles.mainLang}>
        <p>{lang}</p>
        <img style={show ? { transform: 'rotate(-180deg)' } : { transform: 'rotate(0deg)' }} src={arrow} alt="arrow" />
      </div>

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden' }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.hidden}>
              {languages.map((language, index) => (
                language !== lang ? (
                  <p key={index} onClick={() => changeLang(language)}>{language}</p>
                ) : null
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>
</div> */
}
