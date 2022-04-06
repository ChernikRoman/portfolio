import './ParallaxPointer.css';
import { useState, useRef, useEffect } from 'react';
import InfoLabel from '../InfoLabel/InfoLabel';

export default function ParallaxPointer(props) {
    const [pointerPosition, setPointerPosition] = useState({});
    const parallaxBlock = useRef(null);

    function mousemoveHandler(evt) {
        setPointerPosition({
            x: evt.clientX - (window.innerWidth / 2),
            y: evt.clientY - (window.innerHeight / 2),
        })
    }
    useEffect(()=>{
        document.addEventListener('mousemove', mousemoveHandler)
        return function () {
            document.removeEventListener('mousemove', mousemoveHandler)
        }
    }, [parallaxBlock])

    useEffect(()=>{
        parallaxBlock.current.querySelector('.parallax-pointer__layer-one')
            .style.transform = `translate(${pointerPosition.x / 500}%, ${pointerPosition.y / 500}%)`
        parallaxBlock.current.querySelector('.parallax-pointer__layer-two')
            .style.transform = `translate(${pointerPosition.x / 700}%, ${pointerPosition.y / 700}%)`
        parallaxBlock.current.querySelector('.parallax-pointer__layer-logo')
            .style.transform = `translate(-50%, -50%) rotate3d(${pointerPosition.y / -10}, ${pointerPosition.x / 10}, 0, 20deg)`
    }, [pointerPosition])

    return(
        <article className="parallax-pointer" ref={parallaxBlock}>
            <InfoLabel content="двигать мышью" />
            <img className="parallax-pointer__layer-one" src={props.images.pointerLayerOne} alt="Parallax background" />
            <img className="parallax-pointer__layer-two" src={props.images.pointerLayerTwo} alt="Parallax background" />
            <img className="parallax-pointer__layer-logo" src={props.images.pointerLogo} alt="Parallax front" />
            <p className="parallax-pointer__description">
                В 2016 году я закончил Государственный морской университет им. Ф.Ф. Ушакова в городе Новороссийске
                по специальности "Технология транспортных процессов"
            </p>
        </article>
    )
}