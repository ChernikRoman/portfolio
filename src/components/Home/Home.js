import './Home.css';
import mainPhoto from '../../images/home/shot.png';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <section className="home">
            <article className="home__intro">
                <div className="home__title-wrapper">
                    <h1 className="home__intro-title">Привет,<br/>меня зовут <b>Роман!</b></h1>
                    <br/>
                    <span className="home__intro-description">Я <b>web-разработчик</b> из Москвы.</span>
                </div>
                <img className="home__intro-photo" src={mainPhoto} alt="Main"/>
            </article>
            <article className="home__greeting">
                <h2 className="home__greeting-header">Давайте знакомиться!</h2>
                <hr />
                <p className="home__greeting-description">Спасибо, что решили посетить мой сайт! Здесь вы найдете немного информации обо мне. А так же сможете ознакомиться с моими работами и
                    посмотреть технологии, с которыми работаю.
                </p>
                <div className="home__links-wrapper">
                    <Link to="/about-me" className="home__link">
                        Обо мне
                    </Link>
                    <Link to="/works" className="home__link">
                        Работы
                    </Link>
                    <Link to="/techs" className="home__link">
                        Технологии
                    </Link>
                </div>
            </article>
        </section>
    )
}