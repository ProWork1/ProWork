import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import CarouselHeader from './CarouselHeader'
import CarouselHeader1 from './CarouselHeader1'
import CarouselHeader2 from './CarouselHeader2'

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'

// import './styles.css'

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core'

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation])

export default function Carousel() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                // centeredSlides={true}
                // autoplay={{
                // delay: 2500,
                // disableOnInteraction: false,
                // }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                // loop={true}
                className='mySwiper'
            >
                <SwiperSlide>
                    <CarouselHeader />
                </SwiperSlide>
                <SwiperSlide>
                    <CarouselHeader1 />
                </SwiperSlide>
                <SwiperSlide>
                    <CarouselHeader2 />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
