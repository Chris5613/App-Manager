import Icons from "./Icons";
import LowerBody from './LowerBody';


const today = new Date();
const day = today.toLocaleDateString('en', { weekday: 'long' });
const date = `${day}, ${today.getDate()} ${today.toLocaleDateString('en', { month: 'long' })}\n\n`;
const time = today.toLocaleTimeString('en', { hour: 'numeric', hour12: true, minute: 'numeric' });
const UpperBody = ({data}) => {
    return (
    <div className="container">
        {data.name !== undefined &&
        <div className="top">
            <div className="selectedWeather">
                <div className="weatherData">
                    <div className="iconAndTemp">
                        <Icons description={data.weather[0].main}/>
                        <p className="temp bold">{data.main ?
                        <p>  {data.main.temp.toFixed()}°F</p>
                        : null}</p>
                    </div>
                    <div className="text">
                        <p>Current: </p>
                        <p>Feels like:</p>
                        <p>Humidity:</p>
                        <p>Wind Speed:</p>
                    </div>
                    <div className="variables">
                        <p className="current bold">{data.weather[0].main}</p>
                        <p className="pop">{data.main ?
                        <p className='bold'>{data.main.feels_like.toFixed()}°F</p>
                        : null}</p>
                        <p className="humidity bold">{data.main.humidity}%</p>
                        <p className="wind">{data.wind ?
                        <p className='bold'>{data.wind.speed.toFixed()} MPH <i className="fa-solid fa-wind"></i></p>
                        : null}</p>
                    </div>
                </div>
                <div className="metaData">
                    <p className="date">{date}</p>
                    <div className="time">
                        <p className="city">{data.name}</p>
                        <p className="time">{time}</p>
                    </div>
                </div>
            </div>
            <LowerBody time={time}/>
        </div>
        }
    </div>
    )
}
export default UpperBody
