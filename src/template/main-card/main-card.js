import '../helpers/drop_style.css';
import './main-card.css';

function Card() {
    return (
        <div className="App">
            <div class="main-card">
                <div class="card-header">
                    <h2>Тверской район, Москва</h2>
                    <div class="desc">
                        <h3>Сейчас 20:01</h3>
                        <h3> 25°</h3>
                    </div>
                </div>
                <div class="main-information">
                    <div class="temperature">+21°</div>
                    <div class="attribute">
                        <p class="wind">1.9м/c</p>
                        <p class="wet">74%</p>
                        <div class="tension"> 742 мм рт.ст.</div>
                    </div>
                </div>
                <div class="weather-line">
                    <div class="mini-weather-card">
                        <p class="time">20:00</p>
                        <p><img src={"/img/yandexlogo.svg"} alt="#" /></p>
                        <p class="mini-temperature">+21</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;

