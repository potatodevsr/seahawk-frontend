// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import React from 'react';


export const Slider = ({ children }) => {
    console.log('children', children)
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {children.map((child, idx) => {
                return <SwiperSlide key={idx}>{React.cloneElement(child, { key: idx })}</SwiperSlide>
            })}

        </Swiper>
    );
};