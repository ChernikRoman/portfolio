import './ParallaxScroll.css';
import { useState, useEffect, useRef } from 'react';
import InfoLabel from '../InfoLabel/InfoLabel';

export default function ParallaxScroll(props) {
    const [scrollY, setScrollY] = useState(0)
    const parallaxBlock = useRef(null);

    function scrollHandler() {
        setScrollY(window.scrollY)
    }

    useEffect(()=>{
        document.addEventListener('scroll', scrollHandler)
        window.scrollTo(0, 0)

        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    useEffect(()=>{
        let start = parallaxBlock.current.offsetTop - document.documentElement.clientHeight
        let end = parallaxBlock.current.offsetTop
            if (scrollY >= start && scrollY <= end) {
                let parallaxEffect = (window.scrollY - start) / (end - start) * 100
                parallaxBlock.current.querySelector('.parallax-scroll__airport-background')
                    .style.transform = `translateY(${parallaxEffect / 8}%)`
                parallaxBlock.current.querySelector('.parallax-scroll__airport-airplane')
                    .style.transform = `translate(-${parallaxEffect * 3.9}%, -${parallaxEffect * 4.3}%)`
                parallaxBlock.current.querySelector('.parallax-scroll__airport-front')
                    .style.transform = `translateY(-${parallaxEffect / 8}%)`
            }
    }, [scrollY])

    return(
        <article className="parallax-scroll" ref={parallaxBlock}>
            <InfoLabel content="скролить" />
            <h3 className="parallax-scroll__header">
                Работа в
                <br />
                ШЕРЕМЕТЬЕВО
            </h3>
            <img className="parallax-scroll__airport-background" src={props.images.airportBackground} alt="Airport background" />
            <img className="parallax-scroll__airport-airplane" src={props.images.airportAirplane} alt="Airplane" />
            <img className="parallax-scroll__airport-front" src={props.images.airportFront} alt="Airport front" />
            <p className="parallax-scroll__description">
                До того как начать разрабатывать сайты, я работал в аэропорту Шереметьево авиамехаником.
            </p>
        </article>
    )
}