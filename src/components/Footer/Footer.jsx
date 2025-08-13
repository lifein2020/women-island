import "./footer.scss";
import logo from "../../images/logo1.svg";
import arrow_up from "../../images/arrow_up.svg";


export default function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className="footer-image-container">
                <div className="footer-image"></div>
            </div>
            <div className="footer-container">
                <h2 className="section-title">напишите, если остались вопросы:</h2>
                <address className="email">
                    <a className="email-name" href="mailto:webmaster@gmail.com">webmaster@gmail.com</a>
                </address>
                <div className="socialmedia">
                    <a href="https://www.instagram.com/ostrovwomen/" target="_blank" rel="noreferrer" className="socialmedia-link-icon instagram">
                        {/* <img src={instagram} className="socialmedia-icon" alt="instagram"/> */}
                    </a>
                    <a href="tg://join?invite=2323804135/1" target="_blank" rel="noreferrer" className="socialmedia-link-icon telegram">
                        {/* <img src={telegram} className="socialmedia-icon" alt="telegram"/> */}
                    </a>
                </div>
                <address className="address">
                    <p className="address-title">
                        Наша локация:
                    </p>
                    <div className="address-container">
                        <a href="http://maps.google.com/?q=34.705528, 33.078694" target="_blank" rel="noreferrer" className="address-link-icon">
                        </a>
                        <a href="http://maps.google.com/?q=34.705528, 33.078694" target="_blank" rel="noreferrer" className="address-link">
                        Box 564, Disneyland<br/>
                        USA</a>
                    </div>
                </address>          
                <img className="footer-logo" src={logo} alt="logo"/>
                <a className="arrow" href="#app">
                    <img src={arrow_up} className="arrow-icon" alt="arrow_up"/>
                </a>
            </div>
            <p className="copyright">© 2025 Все права защищены. Копирование материалов сайта запрещено.</p>
        </footer>
    )
}