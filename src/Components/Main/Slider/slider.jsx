import css from './slider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/scrollbar';
import 'swiper/scss/navigation';
import { Navigation, Scrollbar } from 'swiper/modules';
import map1 from "../../../img/png/Слайд1.png";
import map2 from "../../../img/png/Слайд2.png";
import map3 from "../../../img/png/Слайд3.png";
import map4 from "../../../img/png/Слайд4.png";
import map5 from "../../../img/png/Слайд5.png";
import { useRef } from 'react';
import { IconArrowRight } from '../../../img/svg/Frame-18625159';
import { IconArrowLeft } from '../../../img/svg/Frame-18625158';

export const Slider = () => {

    let slide1 = map1;
    let slide2 = map2;
    let slide3 = map3;
    let slide4 = map4;
    let slide5 = map5;

    const swiperRef = useRef();

    return(
        <>
        <section className={css.slider__container}>
            <h1 className={css.slider__title}>Корпоративная жизнь</h1>
            <div class={css.block__arrow}>
              <div onClick={()=>swiperRef.current?.slidePrev(0)} className="arrow__next">
                  <IconArrowLeft/>
              </div>
              <div onClick={()=>swiperRef.current?.slideNext(0)} className="arrow__next">
                  <IconArrowRight/>
              </div>
            </div>
        </section>
          <section className={css.swiper}>
                <Swiper
                modules={[Navigation, Scrollbar]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                scrollbar={{
                
                dragSize: 214,
                draggable: true}}
                spaceBetween={1110}
                speed={800}
                simulateTouch={false}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide><img src={slide1} alt="Карта всех"/></SwiperSlide>
                <SwiperSlide><img src={slide2} alt="Карта Moscow"/></SwiperSlide>
                <SwiperSlide><img src={slide3} alt="Карта всех" /></SwiperSlide>
                <SwiperSlide><img src={slide4} alt="Карта всех" /></SwiperSlide>
                <SwiperSlide><img src={slide5} alt="Карта всех" /></SwiperSlide>
                </Swiper>
                
        </section>
        </>
    )
}