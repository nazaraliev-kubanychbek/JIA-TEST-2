import { Link } from 'react-router-dom';
import styles from './FirstSection.module.scss';
import graph from '@img/graph.png';

export const FirstSection = () => {

    const arrTable = [
        {
            firstText: 'Акционерное общество микрокредитная компания «Фонд развития предпринимательства».',
            secondText: 'Компания является финансово-кредитным учреждением, основной целью деятельности которого является поддержка и развитие сферы малого и среднего предпринимательства Кыргызской Республики, при Министерства финансов Кыргызской Республики.',
            thirdText: 'Кредитование ',
        },
        {
            firstText: 'Европейский Банк Реконструкции и развития',
            secondText: '',
            thirdText: '',
        },
        {
            firstText: 'Российско-Кыргызский Фонд Развития',
            secondText: '',
            thirdText: '',
        },
        {
            firstText: 'Accelerate Prosperity (AP) ',
            secondText: '',
            thirdText: '',
        },
        {
            firstText: 'BT Innovations',
            secondText: '',
            thirdText: '',
        },
    ];
    return (
        <section className='contianer'>
            <div className={styles.container}>
                <img src={graph} alt="BgGraph" />
                <table>
                    <tr>
                        <th>Название</th>
                        <th>Описание </th>
                        <th>Виды фин.</th>
                    </tr>
                    {
                        arrTable?.map((item, index) => (
                            <tr key={index}>
                                <td>{item.firstText}</td>
                                <td>{item.secondText}</td>
                                <td>{item.thirdText}</td>
                            </tr>
                        ))
                    }
                </table>

                <Link to={'/fundsForm'}><button className={styles.button}>Связаться</button></Link>
            </div>
            
        </section>
    );
}
