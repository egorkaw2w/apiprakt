import '../helpers/drop_style.css';
import './header.css';

function Header() {
    return (
        <div className="App">
            <nav>
                <ul>
                    <li><img src={"/img/yandexlogo.svg"} alt="#" /></li>
                    <li><img src={"img/pogodalogo.svg"} alt="#" /></li>
                    <ul>
                        <li>Прогноз на 10 дней</li>
                        <li>Прогноз на месяц</li>
                        <li><input type="text" placeholder="Город или район" /></li>
                    </ul>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
