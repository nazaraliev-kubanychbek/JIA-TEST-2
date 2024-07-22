import { Link } from "react-router-dom";
import styles from './Header.module.scss';
import emblem from '../../img/header/emblem.svg';
import secEmblem from '../../img/header/GreenEconomy1.svg';
import arrow from '../../img/header/Icons.svg';
import { useEffect, useState } from "react";
import {motion, AnimatePresence} from 'framer-motion';

const Header = () => {
    const [show, setShow] = useState(false);
    const [lang, setLang] = useState('Рус');
    const [scrolled, setScrolled] = useState(false);

    const languiages = ['Рус', 'Eng', 'Кыр'];

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
                    <Link to={'/'}>О проекте</Link>
                    <Link to={'/funds'}>Инвестиционные фонды и компании </Link>
                    <Link to={'/projects'}>Инвестиционные проекты</Link>
                    <Link to={'/exhibition'}>Выставка</Link>
                </div>

                <div onClick={showLang} style={show ? { position: 'absolute', right: '30px', borderRadius: '20px' } : {backgroundColor: 'none'}} className={styles.language}>
                    <div className={styles.mainLang}>
                        <p>{lang}</p>
                        <img src={arrow} alt="" />    
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
