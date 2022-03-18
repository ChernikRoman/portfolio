import './Works.css';
import howToLearnImage from '../../images/works/1.png';
import russianTravelImage from '../../images/works/2.png';

export default function Works() {
    return (
        <section className="works">
            <h2 className="works__title" >Мои работы</h2>
            <div className="works__collection-cards">
                <article className="works__card">
                    <img className="works__front-side" src={howToLearnImage} alt="How to rearn" />
                    <div className="works__back-side">
                        <h3 className="works__back-side-title">How to learn</h3>
                        <p className="works__back-side-description">
                            Landing page. Адаптивная верстка для разных устройств отсутствует. Расположения элементов
                            выполнено с помощью позиционирования и flexbox. Структура документа соответствует семантике.
                        </p>
                        <div className="works__links-wrapper">
                            <a href="https://roman017.github.io/how-to-learn" target="_blank" rel="noreferrer">Посетить страницу 🌐</a>
                            <br />
                            <a href="https://github.com/Roman017/how-to-learn" target="_blank" rel="noreferrer">Посмотреть репозиторий на GitHub 🛠</a>
                        </div>
                    </div>
                </article>
                <article className="works__card">
                    <img className="works__front-side" src={russianTravelImage} alt="Russian travel" />
                    <div className="works__back-side">
                    <h3 className="works__back-side-title">How to learn</h3>
                        <p className="works__back-side-description">
                            Landing page. Адаптивная верстка для разных устройств отсутствует. Расположения элементов
                            выполнено с помощью позиционирования и flexbox. Структура документа соответствует семантике.
                        </p>
                        <div className="works__links-wrapper">
                            <a href="https://roman017.github.io/how-to-learn" target="_blank" rel="noreferrer">Посетить страницу 🌐</a>
                            <br />
                            <a href="https://github.com/Roman017/how-to-learn" target="_blank" rel="noreferrer">Посмотреть репозиторий на GitHub 🛠</a>
                        </div>
                    </div>
                </article>
                <article className="works__card">
                    <img className="works__front-side" src={howToLearnImage} alt="How to rearn" /> 
                    <div className="works__back-side">
                    <h3 className="works__back-side-title">How to learn</h3>
                        <p className="works__back-side-description">
                            Landing page. Адаптивная верстка для разных устройств отсутствует. Расположения элементов
                            выполнено с помощью позиционирования и flexbox. Структура документа соответствует семантике.
                        </p>
                        <div className="works__links-wrapper">
                            <a href="https://roman017.github.io/how-to-learn" target="_blank" rel="noreferrer">Посетить страницу 🌐</a>
                            <br />
                            <a href="https://github.com/Roman017/how-to-learn" target="_blank" rel="noreferrer">Посмотреть репозиторий на GitHub 🛠</a>
                        </div>
                    </div>
                </article>
                <article className="works__card">
                    <img className="works__front-side" src={howToLearnImage} alt="How to rearn" />
                    <div className="works__back-side">
                    <h3 className="works__back-side-title">How to learn</h3>
                        <p className="works__back-side-description">
                            Landing page. Адаптивная верстка для разных устройств отсутствует. Расположения элементов
                            выполнено с помощью позиционирования и flexbox. Структура документа соответствует семантике.
                        </p>
                        <div className="works__links-wrapper">
                            <a href="https://roman017.github.io/how-to-learn" target="_blank" rel="noreferrer">Посетить страницу 🌐</a>
                            <br />
                            <a href="https://github.com/Roman017/how-to-learn" target="_blank" rel="noreferrer">Посмотреть репозиторий на GitHub 🛠</a>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}