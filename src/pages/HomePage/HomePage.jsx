import { SwiperSection, FirstSection, VideosSection, AboutForumSectoins, MainBisnesSection } from "@pages/HomePage/HomeSections";
import '../../index.css'

export const HomePage = () => {
    return (
        <div style={{ paddingBottom: '400px', backgroundColor: '#051650'}}>
            <FirstSection />
            <AboutForumSectoins />
            <MainBisnesSection />
            <VideosSection />
            <SwiperSection />
        </div>
    );
}

