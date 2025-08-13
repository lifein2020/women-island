import React from "react";
import "./article.scss";

const dataWelcome = [
    {
        title: "добро пожаловать",
        brokenTitle: "на",
        titleLogo: "остров женщин",
        text: "Остров Женщин - это пространство исцеления и большое сообщество, в котором каждая женщина сможет лучше себя узнать, почувствовать, выйти на самореализацию, а значит стать увереннее, счастливее, позволить себе проявиться во всех сферах жизни. Cмело идти по жизни с улыбкой и ветром в волосах!",
        brokenText: "Наша миссия - создать сообщество сильных, умных, реализованных, осознанных и счастливых женщин. Женщин-творцов, готовых брать и отдавать и делать мир лучше!",
    },
]

export default function Article() {
    return (
        <>
            {dataWelcome.map((item, ind) => (
                <div key={ind} className="article">
                    <h2 className="section-title">{item.title}<br/>{item.brokenTitle}
                        <span className="section-title-logo"> {item.titleLogo}</span>
                    </h2>
                    <p className="text">
                        {item.text}
                        <br className="broken-text"/>
                            {item.brokenText}
                    </p>
                </div>
            ))}
        </>
    )
}