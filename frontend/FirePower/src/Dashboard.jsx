import React, { useEffect ,useState } from 'react'
import Navbar from './components/Navbar';

function Dashboard() {
    const [UserLocation, setUserLocation] = useState({});
    const [Weather, setWeather] = useState('');

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ latitude, longitude });
                },
                (error) => {    
                    console.error('Error getting user location:', error);
                }
            );        }
        else {
            console.error('Geolocation is not supported by this browser.');
        }
    };

    useEffect(() => {
        getUserLocation();
    }, []); 

    useEffect(() => {
        if (UserLocation.latitude && UserLocation.longitude) {
            getWeather(UserLocation.latitude, UserLocation.longitude);
        }
    }, [UserLocation]);

    const getWeather = async (lat, long) => {
        console.log(lat,long)
        const url = `https://api.weather.gov/points/${lat},${long}`;
        try {
            const response = await fetch(url);
            if(!response.ok){
                throw new Error("Failed to fetch weather alerts");
            }
            const data = await response.json();
            
            const forecastUrl = data.properties.forecast;
            const forecastResponse = await fetch(forecastUrl);
            if (!forecastResponse.ok) {
                throw new Error("Failed to fetch forecast data");
            }
            const forecastData = await forecastResponse.json();
            setWeather(forecastData.properties.periods[0].detailedForecast);
        }
        catch(error) {

        };
        
    };


    return (
    <>
    <Navbar/>
<div className="grid grid-cols-6 grid-rows-7 gap-4 min-h-screen">
    <div className="col-span-4 col-start-2 text-center border-2 rounded-sm">DashBoard</div>
    <div className="col-span-2 row-span-2 col-start-2 row-start-2 text-center border-2 rounded-sm">Last Check</div>
    <div className="col-span-2 row-span-2 col-start-4 row-start-2 text-center border-2 rounded-sm">Fire Probability</div>
    <div className="col-span-4 row-span-2 col-start-2 row-start-4 text-center border-2 rounded-sm">
        <h1>Weather</h1>
        <p className="text-white">{Weather}</p>

    </div>
    <div className="col-span-4 row-span-2 col-start-2 row-start-6 text-center border-2 rounded-sm">
        <h1>Authorities</h1> 
        <p className="text-white">Filler</p>
    </div>
</div>
     </>
    )
}

export default Dashboard