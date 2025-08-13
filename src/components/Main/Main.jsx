import "./main.scss";
import women from "../../images/women.svg";
import sun from "../../images/sun.svg";
import arrow_right from "../../images/arrow_right.svg";
import telegram from "../../images/telegram.svg";
import Slider from "../Slider/Slider";
import Gallery from "../Gallery/Gallery";
// import ImagePopup from "../ImagePopup/ImagePopup";
import DisclosureWidget from "../DisclosureWidget/DisclosureWidget";
import Article from "../Article/Article";
import Infographics from "../Infographics/Infographics";
import InfoCard from "../InfoCard/InfoCard";
import Program from "../Program/Program";
import Persons from "../Persons/Persons";
import CardBlock from "../CardBlock/CardBlock";


const joinCardData = [
    {
        customClass: "card-position",
        title:"Присоединяйтесь к телеграм-каналу",
        description: "Всё о событиях в сообществе Остров женщин.",
        link: {
            icon: arrow_right,
            url: "https://www.apple.com/macos/macos-sequoia/",
            alt: "Стрелка вправо",
        },
        imgSrc: telegram,
        alt: "Телеграм",
        imageSize: "small",
    },
];

const applyCardData = [
    {
        customClass: "",
        title:"оставь отзыв",
        description: "Нам будет приятно, если ты поделишься с нами обратной связью.",
        imgSrc: sun,
        alt: "Солнце",
        imageSize: "",
        buttonText: "отправить",
    },
    {
        customClass: "card-color",
        title:"присоединяйся",
        description: "Давай вместе создавать наше сообщество, расти, развиваться и праздновать эту жизнь!",
        imgSrc: women,
        alt: "Профиль девушки",
        imageSize: "",
        buttonText: "хочу к вам",
    },
]; 

export default function Main() {
    return (
        <main className="main">
            <section id="wellcome" className="wellcome">
                <Article/>
            </section>
            <section className="foryou">
                <h2 className="section-title"><span className="section-title-logo"> остров женщин</span> для тебя</h2>
                <p className="section-subtitle">если ты хочешь</p>
                <Infographics/>
            </section>
            <section className="benefits">
                <h2 className="section-title">что ты найдёшь для себя</h2>
                <p className="section-subtitle">в течение месяца ты можешь посещать разные мероприятия, события, встречи</p>
                <InfoCard/>
                <button className="button button-size-big">хочу к вам</button>
            </section>
            <section id="program" className="program">
                <h2 className="section-title">программа мероприятий на август</h2>
                <p className="section-subtitle">этот месяц будет наполнен вдохновением и трансформацией</p>
                <Program/>
                <button className="button button-size-big">зарегистрироваться</button>
            </section>
            <section id="gallery" className="gallery">
                <h2 className="section-title">наши встречи</h2>
                <Gallery />
            </section>
            <section id="testimonial" className="testimonial">
                <h2 className="section-title">что о нас говорят</h2>
                <Slider />
            </section>
            <section className="apply">
                {applyCardData.map((data, ind) => (
                    <CardBlock key={ind} {...data} />
                ))}
            </section>
            <section id="masters" className="masters">
                <h2 className="section-title">наши мастера</h2>
                <p className="section-subtitle">твои проводники и вдохновители</p>
                <Persons/>
            </section>
            <section className="faq">
                <h2 className="section-title">faq</h2>
                <DisclosureWidget />
            </section>
            <section className="connection">
                <h2 className="section-title">будем на связи</h2>
                {joinCardData.map((data, ind) => (
                    <CardBlock key={ind} {...data} />
                ))}
            </section>
        </main>
    )
}