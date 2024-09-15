import css from './map.module.scss';
import { useState } from 'react';
import { IconChevron } from '../../../img/svg/icon-chevron';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation } from 'swiper/modules';
import map1  from "./img/map-all.png";
import map2 from "./img/map-moscow.png";
import map3 from "./img/map-center.png";
import map4 from "./img/map-west.png";
import map5 from "./img/map-south.png";
import map6 from "./img/map-Volga.png";
import map7 from "./img/map-Ural.png";
import map8 from "./img/map-Siberia.png";
import map9 from "./img/map-east.png";
import { useRef } from 'react';

export const Map = () => {
   
    let slide1 = map1;
    let slide2 = map2;
    let slide3 = map3;
    let slide4 = map4;
    let slide5 = map5;
    let slide6 = map6;
    let slide7 = map7;
    let slide8 = map8;
    let slide9 = map9;

    const swiperRef = useRef();

    //*функции активной кнопки(можно объеденить)*//
    function toggleHandler1(e) {
        e.preventDefault();
        swiperRef.current?.slideTo(0);
        (e.target.classList.contains(`${css.active}`) === true) ? e.target.classList.remove(`${css.active}`) : e.target.classList.add(`${css.active}`);
    }
    function toggleHandler2(e) {
        e.preventDefault();
        swiperRef.current?.slideTo(1);
        (e.target.classList.contains(`${css.active}`) === true) ? e.target.classList.remove(`${css.active}`) : e.target.classList.add(`${css.active}`);
    }
    function toggleHandler3(e) {
        e.preventDefault();
        swiperRef.current?.slideTo(2);
        (e.target.classList.contains(`${css.active}`) === true) ? e.target.classList.remove(`${css.active}`) : e.target.classList.add(`${css.active}`);
    }
    function toggleHandler4(e) {
        e.preventDefault();
        swiperRef.current?.slideTo(3);
        (e.target.classList.contains(`${css.active}`) === true) ? e.target.classList.remove(`${css.active}`) : e.target.classList.add(`${css.active}`);
    }
    function toggleHandler5(e) {
        e.preventDefault();
        swiperRef.current?.slideTo(4);
        (e.target.classList.contains(`${css.active}`) === true) ? e.target.classList.remove(`${css.active}`) : e.target.classList.add(`${css.active}`);
    }
    function toggleHandler6(e) {
        e.preventDefault();
        swiperRef.current?.slideTo(5);
        (e.target.classList.contains(`${css.active}`) === true) ? e.target.classList.remove(`${css.active}`) : e.target.classList.add(`${css.active}`);
    }
    function toggleHandler7(e) {
        e.preventDefault();
        swiperRef.current?.slideTo(6);
        (e.target.classList.contains(`${css.active}`) === true) ? e.target.classList.remove(`${css.active}`) : e.target.classList.add(`${css.active}`);
    }
    function toggleHandler8(e) {
        e.preventDefault();
        swiperRef.current?.slideTo(7);
        (e.target.classList.contains(`${css.active}`) === true) ? e.target.classList.remove(`${css.active}`) : e.target.classList.add(`${css.active}`);
    }
    function toggleHandler9(e) {
        e.preventDefault();
        swiperRef.current?.slideTo(8);
        (e.target.classList.contains(`${css.active}`) === true) ? e.target.classList.remove(`${css.active}`) : e.target.classList.add(`${css.active}`);
    }

    const [isOpen, setIsMenuShown] = useState(false);
    return (
        <>
        <section className={css.nav__container}>
            <div className={css.nav__office}>
            <div className={css.office}
             onClick={() => setIsMenuShown(!isOpen)}>
                <h1 className={css.nav__title}>Офисы Softline</h1>
            <div className={`${css.chevron} ${isOpen ? css.up : ''}`}>
                <IconChevron/>
            </div>
            {isOpen && <div className={css.menu}>
               <ul className={css.menu__list}>
                <li className={css.big__sity_item}>Москва</li>
                <li className={css.big__sity_item}>Центр
                    <ul className={css.sity__center_list}>
                        <li className={css.sity__item}>Воронеж</li>
                        <li className={css.sity__item}>Ярославль</li>
                        <li className={css.sity__item}>Белгород</li>
                    </ul>
                </li>
                <li className={css.big__sity_item}>Северо-Запад
                <ul className={css.sity__center_list}>
                        <li className={css.sity__item}>Санкт-Петербург</li>
                        <li className={css.sity__item}>Калининград</li>
                    </ul>
                </li>
                <li className={css.big__sity_item}>Юг
                <ul className={css.sity__center_list}>
                        <li className={css.sity__item}>Ростов-на-Дону</li>
                        <li className={css.sity__item}>Краснодар</li>
                        <li className={css.sity__item}>Волгоград</li>
                    </ul>
                </li>
                <li className={css.big__sity_item}>Волга
                <ul className={css.sity__center_list}>
                        <li className={css.sity__item}>Казань</li>
                        <li className={css.sity__item}>Самара</li>
                        <li className={css.sity__item}>Уфа</li>
                        <li className={css.sity__item}>Оренбург</li>
                        <li className={css.sity__item}>Нижний Новгород</li>
                    </ul>
                </li>
                <li className={css.big__sity_item}>Урал
                <ul className={css.sity__center_list}>
                        <li className={css.sity__item}>Екатеренбург</li>
                        <li className={css.sity__item}>Челябинск</li>
                        <li className={css.sity__item}>Пермь</li>
                        <li className={css.sity__item}>Сургут</li>
                        <li className={css.sity__item}>Тюмень</li>
                        <li className={css.sity__item}>Ижевск</li>
                    </ul>
                </li>
                <li className={css.big__sity_item}>Сибирь
                <ul className={css.sity__center_list}>
                        <li className={css.sity__item}>Новосибирск</li>
                        <li className={css.sity__item}>Омск</li>
                        <li className={css.sity__item}>Томск</li>
                        <li className={css.sity__item}>Красноярск</li>
                        <li className={css.sity__item}>Иркутск</li>
                    </ul>
                </li>
                <li className={css.big__sity_item}>Дальний восток
                <ul className={css.sity__center_list}>
                        <li className={css.sity__item}>Хабаровск</li>
                        <li className={css.sity__item}>Владивосток</li>
                    </ul>
                </li>
               </ul>
            </div>
            }
            </div>
            <div className={css.nav__item}>
                <ul id="links__block" className={css.block_address_info}>
                    <a href='#!' onClick={toggleHandler1} id="city__link_0" data-index="0" className={`${css.sity__nav_item} ${css.active}`}>Все</a>
                    <a href='#!' onClick={toggleHandler2} id="city__link_1" data-index="1" className={css.sity__nav_item}>Москва</a>
                    <a href='#!' onClick={toggleHandler3} id="city__link_2" data-index="2" className={css.sity__nav_item}>Центр</a>
                    <a href='#!' onClick={toggleHandler4} id="city__link_3" data-index="3" className={css.sity__nav_item}>Северо-Запад</a>
                    <a href='#!' onClick={toggleHandler5} id="city__link_4" data-index="4" className={css.sity__nav_item}>Юг</a>
                    <a href='#!' onClick={toggleHandler6} id="city__link_5" data-index="5" className={css.sity__nav_item}>Волга</a>
                    <a href='#!' onClick={toggleHandler7} id="city__link_6" data-index="6" className={css.sity__nav_item}>Урал</a>
                    <a href='#!' onClick={toggleHandler8} id="city__link_7" data-index="7" className={css.sity__nav_item}>Сибирь</a>
                    <a href='#!' onClick={toggleHandler9} id="city__link_8" data-index="8" className={css.sity__nav_item}>Дальний восток</a>
                </ul>
            </div>
            </div>
        </section>
        <section className={css.swiper}>
                <Swiper
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
            spaceBetween={1190}
            simulateTouch={false}
            slidesPerView={1}
            speed={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide><img src={slide1} alt="Карта всех"/></SwiperSlide>
            <SwiperSlide><img src={slide2} alt="Карта Moscow" /></SwiperSlide>
            <SwiperSlide><img src={slide3} alt="Карта всех" /></SwiperSlide>
            <SwiperSlide><img src={slide4} alt="Карта всех" /></SwiperSlide>
            <SwiperSlide><img src={slide5} alt="Карта всех" /></SwiperSlide>
            <SwiperSlide><img src={slide6} alt="Карта всех" /></SwiperSlide>
            <SwiperSlide><img src={slide7} alt="Карта всех" /></SwiperSlide>
            <SwiperSlide><img src={slide8} alt="Карта всех" /></SwiperSlide>
            <SwiperSlide><img src={slide9}alt="Карта всех" /></SwiperSlide>
            </Swiper>
    </section>
        </>
    )
}