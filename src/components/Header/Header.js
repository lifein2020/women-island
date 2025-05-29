// import { Route, Link } from 'react-router-dom';
import logo from "../../images/logo1.svg";
import arrow_down from "../../images/arrow_down.svg";
import lotus2 from "../../images/lotus2.svg";
import community from "../../images/community.svg";
import art from "../../images/art.svg";
import magic1 from "../../images/magic1.svg";
import care1 from "../../images/care1.svg";
import star from "../../images/star.svg";
import women from "../../images/women.svg";
import sun from "../../images/sun.svg";
import olya from "../../images/olya.png";
import dasha from "../../images/dasha.png";
import yulya from "../../images/yulya.png";
import arrow_right from "../../images/arrow_right.svg";
import telegram from "../../images/telegram.svg";
import instagram from "../../images/instagram.svg";
import room from "../../images/room.png";
import window from "../../images/window.png";
import cooking from "../../images/cooking.png";
import cups from "../../images/cups.png";
import girls from "../../images/girls.png";
import lecture from "../../images/lecture.png";
import win from "../../images/win.jpg";
import a from "../../images/a.jpg";
import sea from "../../images/sea.jpg";
import paint from "../../images/paint.png";
import mappoint from "../../images/mappoint.svg";


function Header(props) {
    return(
        <>
            <header className="header">
                <div className="header-menu">
                    <div className="header-logo-cont">
                        <img src={logo} className="header-logo" alt="Women Island logo"/>
                    </div>
                    {/* <img src={logo} className="header-logo" alt="Women Island logo"/> */}
                    <ul className="header-navbar">
                        <li className="header-navbar-item header-navbar-item-active">
                            {/* <Link className="header-navbar-link"></Link> */}
                            <a className="link" href="https://prodschool.ru/">О нас</a>
                        </li>
                        <li className="header-navbar-item">
                            <a className="link" href="https://prodschool.ru/">Программа</a>
                        </li>
                        <li className="header-navbar-item">
                            <a className="link" href="https://prodschool.ru/">Галерея</a>
                        </li>
                        <li className="header-navbar-item">
                            <a className="link" href="https://prodschool.ru/">Отзывы</a>
                        </li>
                        <li className="header-navbar-item">
                            <a className="link" href="https://prodschool.ru/">Мастера</a>
                        </li>
                        <li className="header-navbar-item">
                            <a className="link" href="https://prodschool.ru/">Контакты</a>
                        </li>
                    </ul>
                    <div>
                        <a className="link" href="https://prodschool.ru/">EN</a>
                    </div>
                    <button type="button" className="header-button">вступить в клуб</button>
                </div>
                <div className="header-illustration">
                    <div className="header-text">
                        <h1 className="header-title">Остров женщин</h1>
                        <p className="header-subtitle">Сообщество, где быть женщиной среди женщин безопасно, ресурсно и вкусно.</p>
                    </div>
                    <a className="arrow" href="#wellcome">
                        <img src={arrow_down} className="arrow-icon" alt="arrow_down"/>
                    </a>
                </div>
            </header>
            <main className="main">
                <section id="wellcome" className="wellcome">
                    <h2 className="section-title">добро пожаловать<br/>на
                        <span className="section-title-logo"> остров женщин</span>
                    </h2>
                    <p className="text">
                        Остров Женщин - это пространство исцеления и большое сообщество, в котором каждая женщина сможет лучше себя узнать, почувствовать, выйти на самореализацию, а значит стать увереннее, счастливее, позволить себе проявиться во всех сферах жизни. И смело идти по жизни с улыбкой и ветром в волосах!<br/>
                        Наша миссия - создать сообщество сильных, умных, реализованных, осознанных и счастливых женщин. 
                        Женщин-творцов, готовых брать и отдавать и делать мир лучше!
                    </p>
                </section>
                <section className="foryou">
                    <h2 className="section-title"><span className="section-title-logo"> остров женщин</span> для тебя</h2>
                    <p className="section-subtitle">если ты хочешь</p>
                    <ul className="foryou-cards">
                        <li className="foryou-cards-item">
                            <img className="foryou-card-image" src={lotus2} alt=""/>
                            <h3 className="foryou-card-title">Перезагрузку</h3>
                            <p className="foryou-card-description">Раскрытие женственности, запуск энергии, внутренняя гармония с помощью экологичных практик.</p>
                        </li>
                        <li className="foryou-cards-item">
                            <img className="foryou-card-image" src={community} alt=""/>
                            <h3 className="foryou-card-title">Окружение</h3>
                            <p className="foryou-card-description">Пусть в нашем пространстве тебе будет вкусно, уютно, безопасно.</p>
                        </li>
                        <li className="foryou-cards-item">
                            <img className="foryou-card-image" src={art} alt=""/>
                            <h3 className="foryou-card-title">Творчество</h3>
                            <p className="foryou-card-description">Окунуться в творческий поток, насладиться процессом и раскрыть в себе новые таланты.</p>
                        </li>
                        {/* <li className="foryou-cards-item-container">
                            <ul className="foryou-cards"> */}
                                <li className="foryou-cards-item">
                                    <img className="foryou-card-image" src={magic1} alt=""/>
                                    <h3 className="foryou-card-title">Идеи и вдохновение</h3>
                                    <p className="foryou-card-description">Здесть вы всегда найдёте вдохновение и мотивацию, чтобы меняться и делать свою жизнь ярче.</p>
                                </li>
                                <li className="foryou-cards-item">
                                    <img className="foryou-card-image" src={care1} alt=""/>
                                    <h3 className="foryou-card-title">Поддержку единомышленниц</h3>
                                    <p className="foryou-card-description">Подруги по интересам, с которыми всегда есть время и желание для встречи.</p>
                                {/* </li>
                            </ul> */}
                        </li>

                    </ul>
                </section>
                <section className="benefits">
                    <h2 className="section-title">что ты найдёшь для себя</h2>
                    <p className="section-subtitle">в течение месяца ты можешь посещать разные мероприятия, события, встречи</p>
                    <ul className="benefits-cards">
                        <li className="benefits-cards-item">
                            <div className="card-text paint">
                                <h3 className="card-title">Творческие мастер-классы</h3>
                                <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </li>
                        <li className="benefits-cards-item">
                            <div className="card-text cup">
                                <h3 className="card-title">Звуковая терапия</h3>
                                <p className="card-description">Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.</p>
                            </div>
                            {/* <img className="card-image" src={star} alt="star"/> */}
                        </li>
                        <li className="benefits-cards-item">
                            <div className="card-text psychology">
                                <h3 className="card-title">Психология</h3>
                                <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            {/* <img className="card-image" src={star} alt="star"/> */}
                        </li>
                        <li className="benefits-cards-item">
                            <div className="card-text aromo">
                                <h3 className="card-title">Аромопсихология</h3>
                                <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            {/* <img className="card-image" src={star} alt="star"/> */}
                        </li>
                        <li className="benefits-cards-item">
                            <div className="card-text book">
                                <h3 className="card-title">Книжный клуб</h3>
                                <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            {/* <img className="card-image" src={star} alt="star"/> */}
                        </li>
                        <li className="benefits-cards-item">
                            <div className="card-text practise">
                                <h3 className="card-title">Полезные и развивающие практики</h3>
                                <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            {/* <img className="card-image" src={star} alt="star"/> */}
                        </li>
                        <li className="benefits-cards-item">
                            <div className="card-text master">
                                <h3 className="card-title">Приглашенные мастера</h3>
                                <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            {/* <img className="card-image" src={star} alt="star"/> */}
                        </li>
                        <li className="benefits-cards-item">
                            <div className="card-text stream">
                                <h3 className="card-title">Тематические эфиры</h3>
                                <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            {/* <img className="card-image" src={star} alt="star"/> */}
                        </li>
                    </ul>
                    <button className="benefits-button">хочу к вам</button>
                </section>
                <section className="program">
                    <h2 className="section-title">программа мероприятий на апрель</h2>
                    <p className="section-subtitle">этот месяц будет наполнен вдохновением и трансформацией</p>
                    <ul className="program-items">
                        <li className="program-item">
                            <div className="program-item-data">
                                <div className="date">09.04.2025</div>
                                <div className="time">10:00-12:00
                                </div>
                            </div>
                            <p className="program-item-title">Книжный клуб: обсуждение книги Конкордии Антаровой «Две жизни». 
                            </p>
                            <p className="program-item-price">Участие 25&euro;</p>
                        </li>
                        <li className="program-item">
                            <div className="program-item-data">
                                <div className="date">12.04.2025</div>
                                <div className="time">15:00-19:00</div>
                            </div>
                            <p className="program-item-title">Творческий пикник на природе — время для отдыха и вдохновения. 
                            </p>
                            <p className="program-item-price">Участие 80&euro;</p>
                        </li>
                        <li className="program-item">
                            <div className="program-item-data">
                                <div className="date">15.04.2025</div>
                                <div className="time">18:00-21:00
                                </div>
                            </div>
                            <p className="program-item-title">Трансформационный мастер-класс с расстановочными упражнениями «Папа» —  глубокая работа с внутренними ресурсами. 
                            </p>
                            <p className="program-item-price">Участие 70&euro;</p>
                        </li>
                        <li className="program-item">
                            <div className="program-item-data">
                                <div className="date">25.04.2025</div>
                                <div className="time">10:00-12:00 
                                </div>
                            </div>
                            <p className="program-item-title">Лекция «Эра Огненной Женщины: как 9-й период Ба-Цзы меняет мир».<br/>Приглашенный спикер - астролог китайской астрологии ба-цзы Валерия Колесова.
                            </p>
                            <p className="program-item-price">Участие 30&euro;</p>
                        </li>
                        <li className="program-item">
                            <div className="program-item-data">
                                <div className="date">28.04.2025</div>
                                <div className="time">10:00-11:30
                                </div>
                            </div>
                            <p className="program-item-title">Практика с эфирными маслами и поиск ресурсов.<br/>Тема: «Женские архетипы» — погружение в тонкую энергию женственности. 
                            </p>
                            <p className="program-item-price">Участие 30&euro;</p>
                        </li>
                    </ul>
                    <button className="benefits-button">зарегистрироваться</button>
                </section>
                <section className="gallery">
                    <h2 className="section-title">наши встречи</h2>
                    <div className="photo-grid">
                        <div className="block photo-grid-item-size-big">
                        </div>
                        <div className="block block2">
                        </div>
                        {/* <div className="item">
                            <img className="photo-grid-item" src={girls} alt=""/>
                        </div> */}
                        <div className="item">
                            <img className="photo-grid-item" src={a} alt=""/>
                        </div>
                        <div className="item">
                            <img className="photo-grid-item" src={girls} alt=""/>
                        </div>
                        <div className="item item-size-big">
                            <img className="photo-grid-item" src={win} alt=""/>
                        </div>
                        <div className="item">
                            <img className="photo-grid-item" src={girls} alt=""/>
                        </div>
                        <div className="item">
                            <img className="photo-grid-item" src={girls} alt=""/>
                        </div>
                        <div className="item">
                            <img className="photo-grid-item " src={lecture} alt=""/>
                        </div>
                        <div className="item item-size-large">
                            <img className="photo-grid-item item-size-large" src={cups} alt=""/>
                        </div>
                                                
                        {/* <img className="photo-grid-item" src={cups} alt=""/>
                        <img className="photo-grid-item" src={cooking} alt=""/>
                        <img className="photo-grid-item" src={window} alt=""/>
                        <img className="photo-grid-item" src={lecture} alt=""/>
                        <img className="photo-grid-item" src={girls} alt=""/> */}
                    </div>
                </section>
                <section className="testimonial">
                    <h2 className="section-title">что о нас говорят</h2>
                    <div className="slide"> 
                        <p className="slide-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="slide-container">
                            <div className="slide-container-avatar"></div>
                            <div className="slide-container-person">
                                <h3 className="slide-container-person-name">Имя ревьюера</h3>
                                <p className="slide-container-person-business">род деятельности</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="apply">
                    <div className="wrap">
                        <div className="card">
                            <div className="container">
                                <h3 className="container-title">оставь отзыв</h3>
                                <div className="container-description">
                                    <p className="container-description-text">Нам будет приятно, если ты поделишься с нами обратной связью.</p>
                                </div>
                            </div>
                            <img className="container-image container-image-position" src={women} alt="women" />
                            </div>
                        <buton className="apply-button">отправить</buton>
                    </div>
                    <div className="wrap">
                        <div className="card card-color">
                            <div className="container">
                                <h3 className="container-title">присоединяйся</h3>
                                <div className="container-description">
                                    <p className="container-description-text">Давай вместе создавать наше сообщество, расти, развиваться 
                                    и праздновать эту жизнь!</p>
                                </div>
                            </div>
                            <img className="container-image container-image-position" src={sun} alt="sun"/>
                        </div>
                        <a className="card-link" href="https://www.apple.com/macos/macos-sequoia/">хочу к вам</a>
                    </div>
                </section>
                <section className="masters">
                    <h2 className="section-title">наши мастера</h2>
                    <p className="section-subtitle">твои проводники и вдохновители</p>
                    <ul className="cards">
                        <li className="cards-item">
                            <a href="https://www.instagram.com/elle_art_cyprus/" className="cards-item-link" target="_blank" rel="noreferrer">
                                <img className="card-image" src={olya} alt="olya"/>
                            </a>
                            <h3 className="card-title">Оля</h3>
                            <p className="card-subtitle">Арттерапевт</p>
                            <p className="card-description">Оля очень творческая. Она создает атмосферные свечи, уникальные изделия и картины из эпоксидной смолы. <a href="https://www.instagram.com/elle_art_cyprus/" className="card-description-link" target="_blank" rel="noreferrer">&rarr;</a>
                            </p>
                        </li>
                        <li className="cards-item">
                            <a href="https://www.instagram.com/yuliya.arzhaan/" className="cards-item-link" target="_blank" rel="noreferrer">
                                <img className="card-image" src={yulya} alt="yulya"/>
                            </a>
                            <h3 className="card-title">Юля</h3>
                            <p className="card-subtitle">Психолог</p>
                            <p className="card-description">
                            Юля очень любит людей, помогает им возвращаться на свой путь и кайфует от своей работы. А еще она проводник женщин к самим себе. <a href="https://www.instagram.com/yuliya.arzhaan/" className="card-description-link" target="_blank" rel="noreferrer">&rarr;</a>
                            </p>
                        </li>
                        <li className="cards-item">
                            <a href="https://www.instagram.com/tropchynka/" className="cards-item-link" target="_blank" rel="noreferrer">
                                <img className="card-image" src={dasha} alt="dasha"/>
                            </a>
                            <h3 className="card-title">Даша</h3>
                            <p className="card-subtitle">Звукотерапевт</p>
                            <p className="card-description">Даша наша вдохновительница. Она создает для нас уникальные медитации, умеет управлять пространством и миром звуков. <a href="https://www.instagram.com/yuliya.arzhaan/" className="card-description-link" target="_blank" rel="noreferrer">&rarr;</a>
                            </p>
                        </li>
                    </ul>
                </section>
                <section className="faq">
                    <h2 className="section-title">faq</h2>
                        <details className="panel">
                            <summary className="question">Какой формат участия в мероприятиях клуба?</summary>
                            <p className="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </details>
                        <details className="panel">
                            <summary className="question">Как оплатить участие в мероприятии?</summary>
                            <p className="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </details>
                        <details className="panel">
                            <summary className="question">Что входит в стоимость участия в мероприятии?</summary>
                            <p className="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </details>
                </section>
                {/* <section className="faq-1">
                    <ul className="faq-items">
                        <h2 className="section-title">faq</h2>
                        <li className="faq-item">
                            <div className="container">
                                <p className="faq-item-title">Какой формат участия в мероприятиях клуба?
                                </p>
                                <a href="https://www.instagram.com/yuliya.arzhaan/" className="faq-item-arrow" target="_blank" rel="noreferrer">&#8595;</a>
                            </div>
                            <p className="faq-item-text"></p>
                        </li>
                        <li className="faq-item">
                            <div className="container">
                                <p className="faq-item-title">Как оплатить участие в мероприятии?
                                </p>
                                <a href="https://www.instagram.com/yuliya.arzhaan/" className="faq-item-arrow" target="_blank" rel="noreferrer">&#8595;</a>
                            </div>
                            <p className="faq-item-text"></p>
                        </li>
                        <li className="faq-item">
                            <div className="container">
                                <p className="faq-item-title">Что входит в стоимость участия в мероприятии?
                                </p>
                                <a href="https://www.instagram.com/yuliya.arzhaan/" className="faq-item-arrow" target="_blank" rel="noreferrer">&#8595;</a>
                            </div>
                            <p className="faq-item-text"></p>
                        </li>
                        <li className="faq-item">
                            <div className="container">
                                <p className="faq-item-title">Какой-нибудь вопрос?
                                </p>
                                <a href="https://www.instagram.com/yuliya.arzhaan/" className="faq-item-arrow" target="_blank" rel="noreferrer">&#8595;</a>
                            </div>
                            <p className="faq-item-text"></p>
                        </li>
                    </ul>
                </section> */}
                <section className="connection">
                    <h2 className="section-title">будем на связи</h2>
                    <div className="card card-position animate">
                            <div className="container">
                                <h3 className="container-title">Присоединяйтесь 
                                к телеграм-каналу</h3>
                                <div className="container-description">
                                    <p className="container-description-text">Всё о событиях в сообществе Остров женщин.</p>
                                    <a className="container-description-link" href="https://www.apple.com/macos/macos-sequoia/">
                                        <img className="container-description-arrow" src={arrow_right} alt="arrow-right"/>
                                    </a>
                                </div>
                            </div>
                        <img className="container-image container-image-small" src={telegram} alt="telegram"/>
                    </div>
                </section>
            </main>
            <footer className="footer">
                {/* <img src={sea} className="footer-image" alt="sea"/> */}
                <div className="footer-image"></div>
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
                </div>
                <p className="copyright">© 2025 Все права защищены. Копирование материалов сайта запрещено.</p>
            </footer>
        </>

    )
}
export default Header;