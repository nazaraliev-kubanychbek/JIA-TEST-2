import { FifthSection, FirstSection, FourthSection, SecondSection, ThirdSection } from "@pages/HomePage/HomeSections";
import '../../index.css'

export const HomePage = () => {
    return (
        <div style={{ paddingBottom: '400px', backgroundColor: '#051650'}}>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FifthSection />
        </div>
    );
}

