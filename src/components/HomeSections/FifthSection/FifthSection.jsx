import styles from './FifthSection.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper.css';

import { FreeMode, Navigation, Mousewheel, Keyboard } from 'swiper/modules';

export const FifthSection = () => {
    return (
        <section className={styles.container}>
            <div className={styles.swiperCont}>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={0}
                    freeMode={true}
                    loop={true}
                    navigation={true}
                    keyboard={true}
                    modules={[Navigation, Mousewheel, Keyboard, FreeMode]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className={styles.swiperItem}>
                            <div className={styles.photo}>
                                <img src="https://s3-alpha-sig.figma.com/img/1f9d/82c5/d4b02d3a685eb346301970a1806414b0?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aAYIuIps0d~J50sv06N4a1o4T2H3YHk2lGCXQ7WLOxL-kwb-FdPAq8y~Azqxz-FleVk8YYxaqvUXhoVVELkLimyW3oTvn0P3i4jIL2l-dEu9FM7V48vwO7Ij4oVIybciUD5Pl7Z-JHmyiL8drqAJywf2LRpv-voTi-OEs1NFvuIXmnkjUn3LHmbvL0RDBZFATIPPVsS7hOUcgu~QVUzO9mRmY4yYZ7DNocSucARnNQNy0xs4bBSUw0KHu2YkHWSYHoCbzv5VxN4cjbHVeoc7PuN2t6yuVfKJ3FQYZ~SNAj~ngV517wwJ58QSXb2AlqOeCerA3xhZ40FYh9l0poJISg__" alt="" />
                            </div>
                            
                            <p>Lorem ipsum</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.swiperItem}>
                            <div className={styles.photo}>
                                <img src="https://s3-alpha-sig.figma.com/img/5046/d7a0/f8eb31b7fba0eff6f9c51e124cf06c6a?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NN5sT8RPv5KidJoA9VepCFK7lF09IdpBEAVX9lZOvHyHo71EbHM0nkty5CRRP3wrgRiO8Sz3TZt-OmmxoOh3D6Iv3q30C982YhCa4aWUTzJcBIEpulJGXva9ftYiHY~q9iXHgHnqrPFEzshDSFE-960sH-ryqpXyW2bc9-YkEHnNwRpbq4ahSTnKH-zr-WXAtal856Q1aKFlFkSUUxDjMVRWA-ZVFXybPE1IcrK~Zxu5ekb8FmR9USNypKBj5pX5guanNYcdPkkIgo2yTpEEWTOctdDEemoOB8~hifF21~1ENeay6e6iSbqhrkw20~hD-oVbXfjeiM5DGB0I-547fA__" alt="" />
                            </div>
                            
                            <p>Lorem ipsum</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.swiperItem}>
                            <div className={styles.photo}>
                                <img src="https://s3-alpha-sig.figma.com/img/9c42/d60e/075edcdb27db79df6a8d1bf3416f7aad?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IsjDdQjOGmYCalM467kIhx1Vy0sE5reTJj2WdoMxSf1J-hglHOqwnbbNOYRCc4wAVIP7vtukt~ehrqe2lHFWaPySZ8mQoN6bX9yWYgZr90SeX6eSMuBO0ca2Q9MTNoFcDT-3WN-IHS5zO0aT1ELq5vgFwdI~Nmvm4DCUkwaGgWN8y~Mxa2rsZBKtoYfLsjHZYhcH3mD4zXJaTW1iDks7TfcqsTKaq6rt8bvgTH7ez7mBUhqx7OuGdBLQDufYalw4UHIKIDnDDGtLK1s0phcnZSGVoxDz3rmZrYafodqNFaiKc0PYFoB0NF~rMRm8vZLQqRmpTaF~CC~GMLhmfSsq6Q__" alt="" />
                            </div>
                            
                            <p>Lorem ipsum</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.swiperItem}>
                            <div className={styles.photo}>
                                <img src="https://s3-alpha-sig.figma.com/img/a486/6f51/b5a5cf98f92785b1ea463bdca4bb1db9?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SxyNuW7kzTOEIa4mIGTJGq9WER~OzcWCywuimleSH5SX0rFYOE5vgRED6qnfy0wkQZWcikRsbGiBXlDlBYfazMt22ToC37-r9VCpucihcmKsxC~Lv6kgRhXbl~1c2ZjMt5wJ3P8mcovMq-GkcgogpgFjjSGjgycB0NNW9or-7tvDfkrfwNnQ~rCr5~zeOR-DkKP8jnAGrrDdsz531J7-3Dzbja7aVErjklMyowlBjSXpihzii-SzrWSr4-YF8vpIWgYxPwsY3IPSO~CxySwu0QDx1Xqj3Kjstz~vs2-btn2SIq8KfmQnZqZS7Cf6kalmihhRdYXRjGzGKwuw1L948w__" alt="" />
                            </div>
                            
                            <p>Lorem ipsum</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.swiperItem}>
                            <div className={styles.photo}>
                                <img src="https://s3-alpha-sig.figma.com/img/a486/6f51/b5a5cf98f92785b1ea463bdca4bb1db9?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SxyNuW7kzTOEIa4mIGTJGq9WER~OzcWCywuimleSH5SX0rFYOE5vgRED6qnfy0wkQZWcikRsbGiBXlDlBYfazMt22ToC37-r9VCpucihcmKsxC~Lv6kgRhXbl~1c2ZjMt5wJ3P8mcovMq-GkcgogpgFjjSGjgycB0NNW9or-7tvDfkrfwNnQ~rCr5~zeOR-DkKP8jnAGrrDdsz531J7-3Dzbja7aVErjklMyowlBjSXpihzii-SzrWSr4-YF8vpIWgYxPwsY3IPSO~CxySwu0QDx1Xqj3Kjstz~vs2-btn2SIq8KfmQnZqZS7Cf6kalmihhRdYXRjGzGKwuw1L948w__" alt="" />
                            </div>
                            
                            <p>Lorem ipsum</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.swiperItem}>
                            <div className={styles.photo}>
                                <img src="https://s3-alpha-sig.figma.com/img/1f9d/82c5/d4b02d3a685eb346301970a1806414b0?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aAYIuIps0d~J50sv06N4a1o4T2H3YHk2lGCXQ7WLOxL-kwb-FdPAq8y~Azqxz-FleVk8YYxaqvUXhoVVELkLimyW3oTvn0P3i4jIL2l-dEu9FM7V48vwO7Ij4oVIybciUD5Pl7Z-JHmyiL8drqAJywf2LRpv-voTi-OEs1NFvuIXmnkjUn3LHmbvL0RDBZFATIPPVsS7hOUcgu~QVUzO9mRmY4yYZ7DNocSucARnNQNy0xs4bBSUw0KHu2YkHWSYHoCbzv5VxN4cjbHVeoc7PuN2t6yuVfKJ3FQYZ~SNAj~ngV517wwJ58QSXb2AlqOeCerA3xhZ40FYh9l0poJISg__" alt="" />
                            </div>
                            
                            <p>Lorem ipsum</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

