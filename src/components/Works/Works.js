import './Works.css';
import howToLearnImage from '../../images/works/1.jpg';
import russianTravelImage from '../../images/works/2.jpg';
import mestoImage from '../../images/works/3.jpg'
import movieExplorer from '../../images/works/4.jpg'

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
                            Одностраничный сайт. Не адаптирован под разные размеры экранов. Расположения элементов
                            выполнено с помощью позиционирования и flexbox. К некоторым элементам применены трансформации.
                            Структура документа соответствует семантике.
                        </p>
                        <div className="works__links-wrapper">
                            <a href="https://roman017.github.io/how-to-learn" target="_blank" rel="noreferrer">Посетить страницу 🌐</a>
                            <br />
                            <a href="https://github.com/Roman017/how-to-learn" target="_blank" rel="noreferrer">Посмотреть на GitHub 🛠</a>
                        </div>
                    </div>
                </article>
                <article className="works__card">
                    <img className="works__front-side" src={russianTravelImage} alt="Russian travel" />
                    <div className="works__back-side">
                        <h3 className="works__back-side-title">Russian travel</h3>
                        <p className="works__back-side-description">
                            Одностраничный сайт выполнен по макету figma. Адаптивная верстка реализована с помощью медиазапросов,
                            flexbox и grid layout. Структура документа соответствует семантике.
                        </p>
                        <div className="works__links-wrapper">
                            <a href="https://roman017.github.io/russian-travel/" target="_blank" rel="noreferrer">Посетить страницу 🌐</a>
                            <br />
                            <a href="https://github.com/Roman017/russian-travel" target="_blank" rel="noreferrer">Посмотреть на GitHub 🛠</a>
                        </div>
                    </div>
                </article>
                <article className="works__card">
                    <img className="works__front-side" src={mestoImage} alt="Mesto" /> 
                    <div className="works__back-side">
                        <h3 className="works__back-side-title">Mesto</h3>
                        <p className="works__back-side-description">
                            Небольшое одностраничное приложение на React. На сайте присутствует возможности регистрации,
                            редактирования профия, добавления фотографий в ленту. Внимание! При первом посещении сайта, происходит старт
                            виртуального сервера. Это займет какое-то время, пожалуйста, подождите.
                            Для входа используйте:
                            <br />
                            Login: email@domen.com
                            <br />
                            Password: Password
                        </p>
                        <div className="works__links-wrapper">
                            <a href="https://frontend-express-mesto.herokuapp.com/" target="_blank" rel="noreferrer">Посетить страницу 🌐</a>
                            <br />
                            <a href="https://github.com/Roman017/react-mesto-api-full" target="_blank" rel="noreferrer">Посмотреть на GitHub 🛠</a>
                        </div>
                    </div>
                </article>
                <article className="works__card">
                    <img className="works__front-side" src={movieExplorer} alt="How to rearn" />
                    <div className="works__back-side">
                        <h3 className="works__back-side-title">Movies explorer</h3>
                        <p className="works__back-side-description">
                            Дипломная работа Яндекс.Практикум. Присутствует возможность регистрации, авторизации.
                            Поиск по названию фильма, сохранения фильма в закладки. Внимание! При первом посещении сайта, происходит старт
                            виртуального сервера. Это займет какое-то время, пожалуйста, подождите.
                            Для входа используйте:
                            <br />
                            Login: email@domen.com
                            <br />
                            Password: Password
                        </p>
                        <div className="works__links-wrapper">
                            <a href="https://frontend-movies-explorer.herokuapp.com/" target="_blank" rel="noreferrer">Посетить страницу 🌐</a>
                            <br />
                            <a href="https://github.com/Roman017/movies-explorer-frontend" target="_blank" rel="noreferrer">Посмотреть на GitHub 🛠</a>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}