import "./infocard.scss";

export default function InfoCard() {
    return (
        <>
            <ul className="benefits-cards">
                <li className="benefits-cards-item">
                    <div className="card-text-box paint">
                        <h3 className="card-title">Творческие мастер-классы</h3>
                        <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                </li>
                <li className="benefits-cards-item">
                    <div className="card-text-box cup">
                        <h3 className="card-title">Звуковая терапия</h3>
                        <p className="card-description">Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>
                </li>
                <li className="benefits-cards-item">
                    <div className="card-text-box psychology">
                        <h3 className="card-title">Психология</h3>
                        <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </li>
                <li className="benefits-cards-item">
                    <div className="card-text-box aromo">
                        <h3 className="card-title">Аромопсихология</h3>
                        <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </li>
                <li className="benefits-cards-item">
                    <div className="card-text-box book">
                        <h3 className="card-title">Книжный клуб</h3>
                        <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </li>
                <li className="benefits-cards-item">
                    <div className="card-text-box practise">
                        <h3 className="card-title">Полезные и развивающие практики</h3>
                        <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </li>
                <li className="benefits-cards-item">
                    <div className="card-text-box master">
                        <h3 className="card-title">Приглашенные мастера</h3>
                        <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </li>
                <li className="benefits-cards-item">
                    <div className="card-text-box stream">
                        <h3 className="card-title">Тематические эфиры</h3>
                        <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </li>
            </ul>
        </>
    )
}