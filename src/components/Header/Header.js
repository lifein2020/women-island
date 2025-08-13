import "./header.scss";
import arrow_down from "../../images/arrow_down.svg";
// import header_image from "../../images/page_cover9.png";

function Header(props) {
    return(
        <>
            <header id="header" className="header">
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
        </>
    )
}
export default Header;