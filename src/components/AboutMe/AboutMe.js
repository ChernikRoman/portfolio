import './AboutMe.css';
import airportBackground from '../../images/about-me/airport-background.jpg';
import airportFront from '../../images/about-me/airport-front.png';
import airportAirplane from '../../images/about-me/airport-airplane.png';
import pointerLayerOne from '../../images/about-me/pointer-layer-one.jpeg';
import pointerLayerTwo from '../../images/about-me/pointer-layer-two.png';
import pointerLogo from '../../images/about-me/pointer-logo.png';
import ParallaxScroll from '../ParallaxScroll/ParallaxScroll';
import ParallaxPointer from '../ParallaxPointer/ParallaxPointer';
import Notebook from '../Notebook/Notebook';

export default function AboutMe() {

    return (
        <section className="about-me">
            <h2 className="about-me__title">Обо мне</h2>
            <ParallaxPointer images={ { pointerLayerOne, pointerLayerTwo, pointerLogo } }/>
            <ParallaxScroll images={ { airportBackground, airportFront, airportAirplane } } />
            <Notebook />
        </section>
    )
}