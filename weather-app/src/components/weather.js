import React from 'react';
// import './styles.css';
import { Card, Image, Button } from 'semantic-ui-react'
import moment from 'moment';

function refresh() {
    window.location.reload();
}


const CardExampleCard = ({weatherData}) => {
    const iconUrl = `https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`
    return (
    <Card color="pink">
        <Card.Content>
            <Card.Header className="header">{weatherData.name}</Card.Header>
            {/* <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} /> */}

            <Image
            centered={true}
            src={iconUrl}
            />
            <p>{`${weatherData.weather[0].description}`}</p>
            <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
            <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
            <p>{`Temperature: ${weatherData.main.temp}`}</p>
            <p>{`Humidity: ${weatherData.main.humidity}`}</p>
            <h5>{moment().format('LL')}</h5>

        </Card.Content>
    </Card>
    )
}

export default CardExampleCard;