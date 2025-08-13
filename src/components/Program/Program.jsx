import "./program.scss";

const programData = [
    {
        date: "10.08.2025",
        time: "11:00–13:00",
        description: "Тантра в жизни современной женщины",
        price: "Участие 0",
    },
        {
        date: "11.08.2025",
        time: "10:00–12:00",
        description: "Книжный клуб: обсуждение продолжения книги Конкордии Антаровой «Две жизни».",
        price: "Участие 25",
    },
        {
        date: "25.08.2025",
        time: "12:00–14:00",
        description: "Арома-мастер-класс: cоздадим натуральные, ароматические свечи из соевого воска с деревянным фитилем.",
        price: "Участие 50",
    },
    //     {
    //     date: "10.06.2025",
    //     time: "",
    //     description: "",
    //     price: "",
    // },
    //     {
    //     date: "10.06.2025",
    //     time: "",
    //     description: "",
    //     price: "",
    // }
]

export default function Program() {
    return(
        <ul className="program-items">
            {programData.map((item, ind) => (
                <li key={ind} className="program-item">
                    <div className="program-item-box">
                        <div className="date">{item.date}</div>
                        <div className="time">{item.time}
                        </div>
                    </div>
                    <p className="program-item-description">{item.description}</p>
                    <p className="program-item-price">{item.price}&euro;</p>
                </li>
            ))}
        </ul>
    )
}