import { useState } from 'react';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { images } from '../data/images';
import { FreeMode } from 'swiper'

const SwiperUI = function () {

    const swiperRef = useRef(null)

    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    const slides = images.map((image, index) => {
        return (
            <SwiperSlide key={index}>
                <img src={image.url} alt={index} width="300px"></img>
            </SwiperSlide>
        )
    })
    return (
        <div>
            <h1>Day - 60 - Swiper JS with React</h1>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                modules={[FreeMode]}
                onBeforeInit={swiper => (swiperRef.current = swiper)}
            // thumbs={{ swiper: thumbsSwiper }}
            >
                {slides}
            </Swiper>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={setThumbsSwiper}
            >
                {slides}
            </Swiper>
        </div>
    )
}

export { SwiperUI }