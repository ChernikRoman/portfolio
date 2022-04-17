import './Contacts.css'

export default function Contacts() {
    return(
        <>
            <p>Со мной можно связаться:</p>
            <address className="contacts" style={{textAlign: "center"}}>
                Написать на почту: <a href="mailto:chernik.r@yandex.ru">chernik.r@yandex.ru</a>
                <br />
                Cвязаться по телефону: <a href="tel:+79771811931">+789771811931</a>
                <br />
                Написать в телеграм: <a href="https://t.me/chernikroman">@chernikroman</a>
                <br />
                Написать в What`s App: <a href="https://wa.me/+79999109370">+79999109370</a>
            </address>
        </>
    )
}