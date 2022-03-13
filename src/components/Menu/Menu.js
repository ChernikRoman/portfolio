import './Menu.css'
import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import menuLogo from '../../images/menu/menu-logo.png'
import githubLogo from '../../images/menu/github-logo.png'
import instagramLogo from '../../images/menu/instagram-logo.png'
import mailLogo from '../../images/menu/mail-logo.png'
import messageMail from '../../images/menu/message-logo.png'


function Menu () {
    const [scrollY, setScrollY] = useState(0);
    const [isOpen, setIsOpen] = useState(false)

    function openButtonClickHandler() {
        setIsOpen(!isOpen);
    }

    function navLinksClickHandler (evt) {
        if (evt.target.nodeName === 'A') setIsOpen(false);
    }

    useEffect(()=>{
        window.addEventListener('scroll', function() {
            setScrollY(window.scrollY / 3)
        });
    }, [])

    return(
        <div className={`menu ${ isOpen ? 'menu_opened' : '' }`}>
            <div className="menu__button-wrapper">
                <Link to="/">
                    <img className="menu__logo" src={ menuLogo } alt="Menu logo" style={{transform: `rotate(${scrollY}deg)`}} />                
                </Link>
                <button className="menu__open-button" onClick={openButtonClickHandler}>{isOpen ? 'Закрыть' : 'Открыть'}</button>
                <a className="menu__send-email" href="mailto:chernik.r@yandex.ru">
                <img src={messageMail} alt="Message to mail"/>
            </a>
            </div>
            <ul className={`menu__social-links ${ isOpen ? 'menu__social-links_opened' : '' }`}>
                <li>
                    <a href="https://github.com/roman017" target="_blank" rel="noreferrer">
                        <img src={githubLogo} alt="Github logo" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/rmn.0177" target="_blank" rel="noreferrer">
                        <img src={instagramLogo} alt="Instagram logo" />
                    </a>
                </li>
                <li>
                    <a href="mailto:chernik.r@yandex.ru" target="_blank" rel="noreferrer">
                        <img src={mailLogo} alt="Mail logo" />
                    </a>
                </li>
            </ul>
            <nav className="menu__nav">
                <ul className={`menu__nav-links ${ isOpen ? 'menu__nav-links_opened' : '' }`} onClick={navLinksClickHandler}>
                    <li className="menu__nav-link">
                        <NavLink to="/" >Главная</NavLink>
                        <span>Вернуться на домашнюю страницу.</span>
                    </li>
                    <li className="menu__nav-link">
                        <NavLink to="/works">Работы</NavLink>
                        <span>Некоторые мои проекты.</span>
                    </li>
                    <li className="menu__nav-link">
                        <NavLink to="/about-me">Обо мне</NavLink>
                        <span>Здесь я рассказал немного о себе.</span>
                    </li>
                    <li className="menu__nav-link">
                        <NavLink to="/techs">Технологии</NavLink>
                        <span>Технологии с которыми работаю.</span>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Menu
