import Icons from "../Icons";

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
                <div>
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
                        <p className="bold">{data.weather[0].main}</p>
                        <p>{data.main ?
                        <p className='bold'>{data.main.feels_like.toFixed()}°F</p>
                        : null}</p>
                        <p className="bold">{data.main.humidity}%</p>
                        <p>{data.wind ?
                        <p className='bold'>{data.wind.speed.toFixed()} MPH <i className="fa-solid fa-wind"></i></p>
                        : null}</p>
                    </div>
                </div>
                <div className="metaData">
                    <p>{date}</p>
                    <div className="time">
                        <p>{data.name}</p>
                        <p className="time">{time}</p>
                    </div>
                </div>
            </div>
        </div>
        }
    </div>
    )
}
export default UpperBody
