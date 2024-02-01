import React,{useState, useEffect} from 'react'
import { FaSun } from "react-icons/fa";


function Weather() {
  const [location, setLocation] = useState('')
  const [weatherData, setWeatherData] = useState([])
  const [toggleInfo, setToggleInfo] = useState(false)
  const API_KEY = '8eac27510f85d3709e21f7ab7d843d0a'

  function handleToggle(){
    setToggleInfo(weatherInfo => !weatherInfo)
  }
  
  
  useEffect((e) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => setWeatherData(data))
  }, [location]);
  
  
  return (
    <div className=' w-screen text-white'>
       <div className='bg-black/50 p-10'>
        <h1 className='text-[#F21D1D] text-center font-bold text-xl'>Weather Forecast</h1>
       </div>
       <form  className='flex flex-col mx-[300px]'>
        <input 
        type="text" 
        required
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder='Location' 
        className='p-3 h-12 my-9 rounded bg-[#B1CACA] placeholder:text-white placeholder:font-bold'
        />
      </form>
       <div className='bg-[#B1CACA] rounded h-56 my-7 mx-[250px] px-10 py-5'>
        <h1 className='text-white font-bold text-xl text-center text mb-6'>Current Weather</h1>
        <h1 className='text-white font-semibold text-xl'>{weatherData.name}</h1>
       <div className='flex justify-between'>
        <div className='flex items-center'>
          <FaSun size={70} color='#FB9435'/>
          <div className='px-2'>
            <h1 className='text-5xl font-bold'>{weatherData.main ? <span>{weatherData.main.temp}{'\u00b0'}C</span> : <span>--{'\u00b0'}C</span>}</h1>
            <h1 className='font-semibold capitalize'>{weatherData.weather ? weatherData.weather[0].description : null}</h1>
          </div>
        </div>
        <div onClick={handleToggle} className='cursor-pointer'>
        {
          toggleInfo ?
          (
        <div className={toggleInfo && (`grid grid-cols-3 grid-rows-2 w-64 h-24 text-sm font-medium gap-3 justify-items-center`)}>
          <div>
            <h1>Wind</h1>
            <p>{weatherData.wind ? <span>{weatherData.wind.speed}m/s</span> : <span>--m/s</span>}</p>
          </div>
          <div>
            <h1>Humility</h1>
            <p>{weatherData.main ? <span>{weatherData.main.humidity}%</span> : <span>--%</span>}</p>
          </div>
          <div>
            <h1>Visibility</h1>
            <p>{weatherData.visibility}</p>
          </div>
          <div>
            <h1>Fells like</h1>
            <p>{weatherData.main ? <span>{weatherData.main.feels_like}{'\u00b0'}C</span> : <span>--{'\u00b0'}C</span>}</p>
          </div>
          <div>
            <h1>Pressure</h1>
            <p>{weatherData.main ? <span>{weatherData.main.pressure}hPa</span> : <span>--hPa</span>}</p>
          </div>
        </div>
          ) :
          <p className='font-bold'>Click for more...</p>
        }
        </div>
       </div>
       </div>

    </div>
      
)}

export default Weather