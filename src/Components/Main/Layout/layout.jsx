import css from './layout.module.scss';

export const Layout = () => {
    return(
        <>
        <section className={css.hero__container}>
            <div className={css.hero__img_link}>
                <img src="../../../img/png/bg.png" width={1250} height={600} alt="Изображение с кнопкой" className={css.img__item} />
                <h1 className={css.img__text}>Поставщик услуг цифровой трансформации и кибербезопасности</h1>
                <button className={css.img__btn}>На сайт</button>
            </div>
        </section>
        </>
    )
}