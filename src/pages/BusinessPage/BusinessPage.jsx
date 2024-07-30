import './businessPage.scss';
import BusinessPageHero from './BusinessPageHero';
import BusinessProjects from './BusinessProjects';
import BusinessInfo from './BusinessInfo';

const BusinessPage = () => {
    return (
        <div  style={{ minHeight: "100vh", backgroundColor: "#051650" }}
        className="businessPage">
            <div className="container">
                <BusinessPageHero />
                <BusinessProjects />
                <button className="businessPage-btn">Подать заявку</button>
                <BusinessInfo />
            </div>
        </div>
    );
}

export  {BusinessPage};
