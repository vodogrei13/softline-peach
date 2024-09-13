import css from './header.module.scss';
import { IconLogo } from '../../img/svg/logo';

export const Header = () => {
    return (
        <>
            <section className={css.header__container}>
                <div className={css.logo}><IconLogo/></div>
                <div className={css.nav}>
                    <ul className={css.header__nav}>
                        <li className={css.nav__item}><a href="#" className={css.item__link}>Облачные решения</a></li>
                        <li className={css.nav__item}><a href="#" className={css.item__link}>Кибербезопасность</a></li>
                        <li className={css.nav__item}><a href="#" className={css.item__link}>Импортозамещение</a></li>
                        <li className={css.nav__item}><a href="#" className={css.item__link}>Цифровая трансформация</a></li>
                    </ul>
                </div>
            </section>
        </>
    )
}