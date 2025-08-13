import "./persons.scss";
import olya from "../../images/olya.png";
import yulya from "../../images/yulya.png";
import dasha from "../../images/dasha.png";

const mastersData = [
    {
        href: "https://www.instagram.com/elle_art_cyprus/",
        imgSrc: olya,
        alt: "Оля",
        title: "Оля",
        subtitle: "Арттерапевт",
        description: "Оля очень творческая. Она создает атмосферные свечи, уникальные изделия и картины из эпоксидной смолы. ",
    },
    {
        href: "https://www.instagram.com/yuliya.arzhaan/",
        imgSrc: yulya,
        alt: "Юля",
        title: "Юля",
        subtitle: "Психолог",
        description: "Юля очень любит людей, помогает им возвращаться на свой путь и кайфует от своей работы. А еще она проводник женщин к самим себе. ",
    },
    {
        href: "https://www.instagram.com/tropchynka/",
        imgSrc: dasha,
        alt: "Даша",
        title: "Даша",
        subtitle: "Звукотерапевт",
        description: "Даша наша вдохновительница. Она создает для нас уникальные медитации, умеет управлять пространством и миром звуков. ",
    },
]

export default function Persons() {
    return (
        <ul className="cards">
            {mastersData.map((item, ind) => (
                <li key={ind} className="cards-item">
                    <a href={item.href} className="cards-item-link" target="_blank" rel="noreferrer">
                        <img className="card-image" src={item.imgSrc} alt={item.alt}/>
                    </a>
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-subtitle">{item.subtitle}</p>
                    <p className="card-description">
                        {item.description} 
                        <a href={item.href} className="card-description-link" target="_blank" rel="noreferrer">&rarr;</a>
                    </p>
                </li>
            ))}
        </ul>
    )
}