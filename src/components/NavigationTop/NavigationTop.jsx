import styles from './NavigationTop.module.scss';
import arrow from '@img/arrow.svg';

export const NavigationTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    };
    return (
        <>
            <aside onClick={scrollToTop} className={styles.navigation}>
                <img src={arrow} alt="navigation" />
            </aside>
            <div className={styles.wave_container}>
                <div className={styles.round}></div>
                <div className={styles.round}></div>
                <div className={styles.round}></div>
            </div>
        </>

    );
}

