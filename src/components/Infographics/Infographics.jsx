import "./infographics.scss";
import lotus2 from "../../images/lotus2.svg";
import community from "../../images/community.svg";
import art from "../../images/art.svg";
import magic1 from "../../images/magic1.svg"; 
import care1 from "../../images/care1.svg";

const dataInfographics = [
    {
        imgSrc: lotus2,
        alt: "",
        title: "Перезагрузку",
        description: "Раскрытие женственности, запуск энергии, внутренняя гармония с помощью экологичных практик.",
    },
    {
        imgSrc: community,
        alt: "",
        title: "Окружение",
        description: "Пусть в нашем пространстве тебе будет вкусно, уютно, безопасно.",
    },
    {
        imgSrc: art,
        alt: "",
        title: "Творчество",
        description: "Окунуться в творческий поток, насладиться процессом и раскрыть в себе новые таланты.",
    },
    {
        imgSrc: magic1,
        alt: "",
        title: "Идеи и вдохновение",
        description: "Здесь ты всегда найдёшь вдохновение и мотивацию, чтобы меняться и делать свою жизнь ярче.",
    },
    {
        imgSrc: care1,
        alt: "",
        title: "Поддержку единомышленниц",
        description: "Подруги по интересам, с которыми всегда есть время и желание для встречи.",
    },
]

export default function Infographics() {
    return (
        <ul className="infographics-cards">
            {dataInfographics.map((item, ind) => (
                <li className="infographics-card" key={ind}>
                    <img className="infographics-card-image" src={item.imgSrc} alt={item.alt}/>
                    <h3 className="infographics-card-title">{item.title}</h3>
                    <p className="infographics-card-description">{item.description}</p>
                </li>
            ))}
        </ul>
    )
}