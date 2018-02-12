import React from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends  React.Component{
    renderWeather(cityData){
        const temps = cityData.list.map(c => c.main.temp);
        const pressures = cityData.list.map(c => c.main.pressure);
        const humidities = cityData.list.map(c => c.main.humidity);
        const {lon, lat} = cityData.city.coord;

        return (
            <tr key={cityData.city.name}>
                <td><GoogleMap lat={lat} lon={lon}/></td>
                <td><Chart data={temps} color="orange" units="K"/></td>
                <td><Chart data={pressures} color="green" units="hPa"/></td>
                <td><Chart data={humidities} color="black" units="%"/></td>
            </tr>
        );
    }

    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

export default connect(({weather}) => { return {weather};})(WeatherList);
