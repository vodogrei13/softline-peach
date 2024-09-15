import css from './lineofbussines.module.scss';

export const Lineofbussines = () => {
    return(
        <>
        <div className={css.hero__title}>Направления бизнеса</div>
        <article className={css.hero__cards}>
            <div className={css.card__one}></div>
            <div className={css.card__two}></div>
            <div className={css.card__three}></div>
            <div className={css.card__for}></div>
            <div className={css.card__five}></div>
            <div className={css.card__six}></div>
        </article>
        </>
    )
}