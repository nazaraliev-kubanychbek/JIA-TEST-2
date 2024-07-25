import { Link } from "react-router-dom";
import styles from './Header.module.scss';
import emblem from '../../img/header/emblem.png';
import secEmblem from '../../img/header/GreenEconomy1.png';
import arrow from '../../img/header/Icons.svg';
import { useEffect, useState } from "react";
import {motion, AnimatePresence} from 'framer-motion';

const Header = () => {
    const [show, setShow] = useState(false);
    const [lang, setLang] = useState('Рус');
    const [scrolled, setScrolled] = useState(false);
    const [route, setRoute] = useState(true);

    const languiages = ['Рус', 'Eng', 'Кыр'];

    const changeRoute = () => {
        setRoute(!route)
    }

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    };

    const showLang = () => {
        setShow(!show)
    }
    const changLang = (lang) => {
        setLang(lang);
    }

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 150) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={styles.container}>
            <div className={styles.headerTop}>
                <img src={emblem} alt="" />
                <img src={secEmblem} alt="" />
            </div>

            <div style={scrolled ? {position: 'fixed', top: '20px'} : {position: 'absolute'}} className={styles.header}>
                <div className={styles.links}>
                    {
                        route === true ? (<Link onClick={() => {scrollToTop(); changeRoute()}} to={'/'}>Главная</Link>) 
                        : ( <Link onClick={() => {scrollToTop(); changeRoute()}} to={'/aboutProject'}>О проекте</Link>)
                    }
                    <Link onClick={scrollToTop} to={'/funds'}>Источники Финонсирование</Link>
                    <Link onClick={scrollToTop} to={'/projects'}>Бизнес проекты</Link>
                    <Link onClick={scrollToTop} to={'/exhibition'}>Выставка</Link>
                </div>

                <div onClick={showLang} style={show ? { position: 'absolute', right: '30px', borderRadius: '20px' } : {backgroundColor: 'none'}} className={styles.language}>
                    <div className={styles.mainLang}>
                        <p>{lang}</p>
                        <img src={arrow} alt="arrow" />    
                    </div>
                   
                    <AnimatePresence>
                        {
                            show && (
                            <motion.div
                                initial={{height: 0, opacity: 0}}
                                animate={{height: 'auto', opacity: 1}}
                                exit={{height: 0, opacity: 0}}
                                style={{overflow: 'hidden'}}
                                transition={{duration: .5}}
                            >
                                <div className={styles.hidden}>
                                    {languiages?.map((language, index) => 
                                        language !== lang ? (<p key={index} onClick={() => changLang(language)}>{language}</p>) : ''
                                    )}
                                </div>
                            </motion.div>
                            )
                        }
                    </AnimatePresence>        
                </div>
            </div>
            
        </header>
    );
}

export default Header;