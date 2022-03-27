import './Techs.css';
import htmlLogo from '../../images/techs/html.png'
import cssLogo from '../../images/techs/css.png'
import jsLogo from '../../images/techs/js.png'
import reactLogo from '../../images/techs/react.png'
import nodeLogo from '../../images/techs/node.png'
import githubLogo from '../../images/techs/github.png'
import { useState, useEffect } from 'react';
import techs from '../../data/techsContentData';


export default function Techs() {
    const [selectedTech, setSelectedTech] = useState(techs.html);

    function logoClickHandler(evt) {
        if (evt.target.className !== 'techs__logo-container') {
            const selectedTech = evt.target.closest('.techs__logo').getAttribute('data-tech');
            setSelectedTech(techs[selectedTech]);
        }
    }

    useEffect(()=>{
        console.log(selectedTech)
    }, [selectedTech])

    return(
        <section className="techs">
            <h2 className="techs__title">Технологии, которые я использую</h2>
            <article className="techs__logo-container" onClick={logoClickHandler}>
                <figure className={`techs__logo ${ selectedTech.name === 'HTML' ?'techs__logo_active' : '' }`} data-tech="html">
                    <figcaption className="techs__logo-title">HTML</figcaption>
                    <img className="techs__logo-image" src={htmlLogo} alt="HTML" />
                </figure>
                <figure className={`techs__logo ${ selectedTech.name === 'CSS' ?'techs__logo_active' : '' }`} data-tech="css">
                    <figcaption className="techs__logo-title">CSS</figcaption>
                    <img className="techs__logo-image" src={cssLogo} alt="CSS" />
                </figure>
                <figure className={`techs__logo ${ selectedTech.name === 'Java Script' ?'techs__logo_active' : '' }`} data-tech="js">
                    <figcaption className="techs__logo-title">JavaScript</figcaption>
                    <img className="techs__logo-image" src={jsLogo} alt="JS" />
                </figure>
                <figure className={`techs__logo ${ selectedTech.name === 'React' ?'techs__logo_active' : '' }`} data-tech="react">
                    <figcaption className="techs__logo-title">React</figcaption>
                    <img className="techs__logo-image" src={reactLogo} alt="React" />
                </figure>
                <figure className={`techs__logo ${ selectedTech.name === 'Node.js' ?'techs__logo_active' : '' }`} data-tech="node">
                    <figcaption className="techs__logo-title">Node.js</figcaption>
                    <img className="techs__logo-image"  src={nodeLogo} alt="Node.js " />
                </figure>
                <figure className={`techs__logo ${ selectedTech.name === 'GitHub' ?'techs__logo_active' : '' }`} data-tech="github">
                    <figcaption className="techs__logo-title">GitHub</figcaption>
                    <img className="techs__logo-image" src={githubLogo} alt="GitHub" />
                </figure>
                <div className="techs__description" onClick={(evt) => evt.stopPropagation()}>
                    { selectedTech.name === 'github'
                        ? <a href="https://github.com/Roman017/portfolio" target="_blank" rel="noreferrer" style={{color: '#2751b3'}}>GitHub</a> 
                        : ''
                    }
                    { selectedTech.name }
                    <ul className="techs__skill-list">
                        {
                            selectedTech.skills.map((listItem) => <li key={listItem}>{listItem}</li>)
                        }
                    </ul>
                </div>
            </article>
        </section>
    )
}