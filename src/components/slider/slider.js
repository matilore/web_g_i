import React from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'

import Slider2 from '../../images/slider_2.jpg'
import Slider3 from '../../images/slider_3.jpg'
import Slider4 from '../../images/slider_4.jpg'
import Slider5 from '../../images/slider_5.jpg'
import Slider6 from '../../images/slider_6.jpg'

import { SwiperWrapper, SlideWrapper } from './styled-components'

const SLIDES = [Slider2, Slider3, Slider4, Slider5, Slider6]

SwiperCore.use([Navigation, Pagination])

export default () => {
    const renderSlides = () =>
        SLIDES.map((slide) => (
            <SwiperSlide>
                <SlideWrapper>
                    <img src={slide} />
                </SlideWrapper>
            </SwiperSlide>
        ))

    return (
        <SwiperWrapper>
            <Swiper
                navigation
                pagination={{ clickable: true }}
                spaceBetween={50}
                loop
                slidesPerView={1}
            >
                {renderSlides()}
            </Swiper>
        </SwiperWrapper>
    )
}
