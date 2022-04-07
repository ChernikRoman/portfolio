import './Notebook.css';
import notebookPictureS from '../../images/about-me/notebook-small.png';
import notebookPictureL from '../../images/about-me/notebook-large.png';
import browserPicture from '../../images/about-me/browser.jpg';
import notebookContent from '../../data/notebookContent';
import Contacts from '../Contacts/Contacts';
import { useState } from 'react';

export default function Notebook() {
    const [currentTab, setCurrentTab] = useState('web')

    function controlButtonsHandler (evt) {
        setCurrentTab(evt.target.getAttribute('data-name'))
    }

    return (
        <section className="notebook">
            <div className="notebook__content-window" style={{ background: `url(${browserPicture}) #3f3f3f top / 100% no-repeat` }}>
                <ul className="notebook__control-buttons" onClick={controlButtonsHandler}>
                    <li className="notebook__control-buttons-item" data-name="web">Web</li>
                    <li className="notebook__control-buttons-item" data-name="hobby">Хобби</li>
                    <li className="notebook__control-buttons-item" data-name="contacts">Контакты</li>
                </ul>
                { currentTab === 'contacts' ? <Contacts /> : notebookContent[currentTab] }
            </div>
            <img className="notebook__coverPicture" srcSet={` ${notebookPictureS} 550w, ${notebookPictureL} 800w` } alt="Notebook"/>
        </section>
    )
}