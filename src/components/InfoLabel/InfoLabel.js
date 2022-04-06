import './InfoLabel.css';

export default function InfoLabel(props) {
    return(
        <span className="info-label">
            Интерактивный элемент.
            <br />
            Попробуйте {props.content}.
        </span>
    )
}