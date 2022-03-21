import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper';

import heroStyles from './Hero.module.scss';

const HeroSlider = ({ content }) => {
    return (
        <>
            <Swiper
                navigation={true}
                modules={{ Navigation }}
                className={`${heroStyles['hero-slider']}`}
            >
                {content.map(({ text }, index) => (
                    <SwiperSlide
                        className={`${heroStyles['hero-slide']}`}
                        key={index}
                    >
                        {text}
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default HeroSlider;
