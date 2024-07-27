import styles from './ComplateForm.module.scss';
import graph from '@img/graph.png';

export const ComplateForm = () => {
    return (
        <div className='contianer'>
            <div className={styles.complate}>
                <img src={graph} alt="BgGraph" />
                <h2>Ваш запрос получен, с Вами свяжутся!</h2>
            </div>
        </div>
    );
}
