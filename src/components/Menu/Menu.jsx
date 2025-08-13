import "./menu.scss";
import logo from "../../images/logo1.svg";
import logodark from "../../images/logo_dark.svg";
import { useState } from "react";

export default function Menu() {

    const [fix, setFix] = useState(false);

    // useEffect (() => {
    //     const handleScroll = () => {
    //         setFixed(window.scrollY > 20)
    //     }
    // });

    function setFixed () {
        if(window.scrollY > 91) {
            setFix(true)
        } else {
            setFix(false)
        }
        console.log("fixed")
    }

    window.addEventListener("scroll", setFixed);

    const navbarData = [
        {
            href: "#wellcome",
            linkName: "О нас",
        },
        {
            href: "#program",
            linkName: "Программа",
        },
                {
            href: "#gallery",
            linkName: "Галерея",
        },
        {
            href: "#testimonial",
            linkName: "Отзывы",
        },
        {
            href: "#masters",
            linkName: "Мастера",
        },
        {
            href: "#footer",
            linkName: "Контакты",
        },
    ]

    return (
        <div className={`header-menu ${ fix ? "fixed" : "" }`}>
            <div className="header-logo-cont">
                <img src={fix ? logodark : logo} className="header-logo" alt="Women Island logo"/>
            </div>
            <ul className="header-navbar">
                {navbarData.map((item, ind)=> (
                    <li key={ind} className="header-navbar-item header-navbar-item-active">
                        <a className={`link ${ fix ? "link-fixed" : "" }`} href={item.href}>{item.linkName}</a>
                    </li>  
                ))}
            </ul>
            {/* <div>
                <a className="link" href="https://prodschool.ru/">EN</a>
            </div> */}
            <button type="button" className={`header-button ${ fix ? "header-button-fixed" : ""}`}>вступить в клуб</button>
        </div>
    )
}