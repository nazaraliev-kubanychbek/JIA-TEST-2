import './exhibition.scss';
import ExhibitionSlider from './ExhibitionSlider';

export const ExhibitionPage = () => {
    return (
        <div style={{width: '100%', minHeight: '100vh',  backgroundColor: "#051650"}}
        className='exhibitionPage'
        >
            <div className="container">
                <h1 className="exhibitionPage-title">Выставка</h1>
                <p className="exhibitionPage-text">В рамках Бишкекского Инвестиционного форума и форума «Зеленая Экономика » проводится выставка товаров и услуг компаний из разных отраслей.</p>
                <p className="exhibitionPage-text">Это отличная возможность компаниям презентовать себя перед участниками и гостями форума. 
                В мероприятии принимают участие известные бизнесмены, представители государственных органов, международных организаций, и активные деятели. Гости и участники со всех уголков мира. </p>
                </div>

            <ExhibitionSlider />
            <button className="exhibitionPage-btn">Арендовать стенд</button>

        </div>
    );
}
