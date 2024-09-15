import css from './layout.module.scss';
import { Lineofbussines } from '../Lineofbusiness/lineofbussines';
import { IconDms } from '../../../img/svg/icon-dms';
import { IconBirthday } from '../../../img/svg/icon-birthday';
import { IconPhone } from '../../../img/svg/icon-phone';
import { IconSport } from '../../../img/svg/icon-sport';
import { IconFriend } from '../../../img/svg/icon-friend';
import { IconPrinter } from '../../../img/svg/icon-printer';
import { IconHome } from '../../../img/svg/icon-home';
import { Slider } from '../Slider/slider';
import { Map } from '../Map/map';

export const Layout = () => {
    return(
        <>
        <section className={css.hero__container}>
            <div className={css.hero__img_link}>
                <h1 className={css.img__text}>Поставщик услуг цифровой трансформации <br/>и кибербезопасности</h1>
                <button className={css.img__btn}>На сайт</button>
            </div>
            <div className={css.hero_prev}>
                <h1 className={css.prev__text}><span className={css.prev__title}>Softline</span> – ведущий поставщик IT-решений и сервисов.* Мы предлагаем комплексные IT-решения, облака, программное и аппаратное обеспечение, решения по цифровой трансформации и кибербезопасности, а также широкий спектр IT-услуг.</h1>
            </div>
            <div className={css.hero__info1}>
                <div className={css.info__item1}>
                    <span className={css.info__title}><span className={css.info__title_sign}>{'>'}</span>30 лет</span><br/>
                    <p>на IT-рынке</p>
                </div>
                <div className={css.info__item}>
                    <span className={css.info__title}>4600</span><br/>
                    <p>сотрудников в России</p>
                </div>
                <div className={css.info__item}>
                    <span className={css.info__title}>25</span><br/>
                    <p>городов России</p>
                </div>
                </div>
            <div className={css.hero__info2}>
                <div className={css.info__item4}>
                    <span className={css.info__title}>2000<span className={css.info__title_sign}>{'+'}</span></span><br/>
                    <p>разработчиков</p>
                </div>
                <div className={css.info__item}>
                    <span className={css.info__title}>3000<span className={css.info__title_sign}>{'+'}</span></span><br/>
                    <p>сотрудников ежегодно<br/>проходит оценку и обучения</p>
                </div>
            </div>
            <div className={css.hero__map}>
                <Map/>
            </div>
            <div className={css.mission}>
                <div className={css.mission__info}>
                    <h1 className={css.mission__title}>Миссия Softline</h1>
                    <p className={css.mission__text}>Мы помогаем организациям трансформироваться, работать эффективно и безопасно <br/> в условиях цифровой экономики.</p>
                </div>
            </div>
            <div className={css.lifeofbussines}>
                <Lineofbussines/>
            </div>
            <div className={css.packet__block}>
                <h1 className={css.packet__title}>Компенcационный пакет</h1>
                <div className={css.packet__list}>
                    <div className={css.packet__item}>
                        <IconDms/>
                        <h1 className={css.packet__item_text}>ДМС</h1>
                    </div>
                    <div className={css.packet__item}>
                        <IconBirthday/>
                        <h1 className={css.packet__item_text}>Выходной<br/>в день рождения</h1>
                    </div>
                    <div className={css.packet__item}>
                        <IconPhone/>
                        <h1 className={css.packet__item_text}>Корпоративная<br/>мобильная связь</h1>
                    </div>
                    <div className={css.packet__item}>
                        <IconSport/>
                        <h1 className={css.packet__item_text}>Корпоративные скидки<br/>на спорт</h1>
                    </div>
                    <div className={css.packet__item}>
                        <IconFriend/>
                        <h1 className={css.packet__item_text}>LTI</h1>
                    </div>
                </div>
                <div className={css.packet__block_two}>
                <h1 className={css.packet__title_two}>Программа дополнительной мотивации</h1>
                <h1 className={css.packet__title_red}>доплата 12% от суммы</h1>
                <div className={css.packet__list}>
                <div className={css.packet__item}>
                        <IconPrinter/>
                        <h1 className={css.packet__item_text}>Оргтехники</h1>
                    </div>
                    <div className={css.packet__item}>
                        <IconDms/>
                        <h1 className={css.packet__item_text}>ДМС</h1>
                    </div>
                    <div className={css.packet__item}>
                        <IconHome/>
                        <h1 className={css.packet__item_text}>Ипотеки</h1>
                    </div>
                </div>
                </div>
            </div>
            <section className={css.slider}>
                <Slider/>
            </section>
        </section>
        </>
    )
}