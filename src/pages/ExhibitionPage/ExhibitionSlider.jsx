import './exhibition.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { useRef } from 'react';
import img1 from './img/slider1.png';
import img2 from './img/slider2.png';
import img3 from './img/slider3.png';
import img4 from './img/slider4.png';
const sliderList = [
    {
        id: 1,
        img1: img1,
        img2: img2
    },
    {
        id: 2,
        img1: img3,
        img2: img4,
    },
    {
        id: 3,
        img1: img1,
        img2: img2
    },
    {
        id: 4,
        img1: img3,
        img2: img4
    },
]

const ExhibitionSlider = () => {
    const swiperRef = useRef(null);
    return (
        <div className='exhibitionPage-slider'>
            <div className="container">


            <Swiper
ref={swiperRef}
slidesPerView={2}
freeMode={true}
loop={true}
navigation={false}
keyboard={true}
autoplay={{
    delay: 3000,
    disableOnInteraction: false,
}}
modules={[Navigation, Mousewheel, Keyboard, FreeMode, Autoplay]}
>
    {
        sliderList.map(item =>{
            return <SwiperSlide key={item.id}>

                    <div className="exhibitionPage-slider-slide">
                        <img src={item.img1} alt="" className="exhibitionPage-slider-slide-img" />
                        <img src={item.img2} alt="" className="exhibitionPage-slider-slide-img" />
                    </div>

            </SwiperSlide>
        })
    }


</Swiper>

            </div>
        </div>
    );
}

export default ExhibitionSlider;
