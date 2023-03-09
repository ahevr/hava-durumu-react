import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Wind from 'images/ui/windsock.png'
import Pressure from 'images/ui/atmospheric.png'
import Humidity from 'images/ui/drop.png'

import { BsSearch } from 'react-icons/bs';
import moment from 'moment';
import 'moment/locale/tr'

const api = {
  key: "06738a09152b781ef3bafc1514fdfd66",
  url: "https://api.openweathermap.org/data/2.5/"

}
function Weathers() {

  const [city, setCity] = useState('');
  const [weatherData, setweatherData] = useState({});

  const getWeather = (e) => {
    if (e.key == "Enter") {
      fetch(`${api.url}weather?q=${city}&appid=${api.key}&lang=tr&units=metric`)
        .then(response => response.json())
        .then(data => {
          setweatherData(data)
          setCity("")
        })
    }
  }

  const navigate = useNavigate();

  return (
    <div className='bg-[#29223c] h-screen grid place-content-center'>
      <div className="bg-[#0000004d] p-4 lg:p-10 rounded-[50px]">
        <div className="flex justify-center my-10 ">
          <div className='relative flex items-center'>
            <input
              type="text"
              className='px-9 py-4 lg:px-16 lg:py-4 rounded-full outline-none border focus:border-blue-600'
              placeholder='Şehir Giriniz...'
              onChange={e => setCity(e.target.value)}
              value={city}
              onKeyPress={getWeather}
            />
            <span className='hidden lg:absolute right-5 top-5'><BsSearch size={20} /></span>
          </div>
        </div>
        <div className="mt-0 lg:mt-10 text-white px-5">
          {typeof weatherData.main == 'undefined' ? (
            <div className='text-center p-7 lg:p-0 lg:mt-10 text-sm lg:text-xl'>
              <p>Geçerli Bir Şehir veya Bir Ülke Arayın</p>
            </div>
          ) : (
            <div className="flex flex-col justify-center mt-5 space-y-3">
              <div className="flex flex-col">
                <span className='p-1 text-xl'>
                  {moment().locale('tr').format('Do MMMM YYYY | h:mm:ss')}
                </span>
              </div>
              <div className="flex flex-col items-center p-5">
                <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} width={80} />
                <p className='text-3xl'>{weatherData.name}<span className='text-sm'>,{weatherData.sys.country}</span></p>
                <p className='text-sm uppercase'>kordinatlar: {weatherData.coord.lon} | {weatherData.coord.lat} </p>
                <p className='text-sm uppercase'>{weatherData.weather[0].description}</p>
                <p className='text-6xl text-center mt-5'>{Math.round(weatherData.main.temp)}<span className='text-yellow-500'>°</span></p>
                <div className="flex gap-10 pt-5">
                  <div className='flex flex-col items-center'>
                    <img src={Wind} alt="" width={60} />
                    <p className='lg:text-[25px] mt-2'>{Math.round(weatherData.wind.speed)}<span className='text-sm'>km/sa</span></p>
                  </div>
                  <div className='flex flex-col items-center'>
                    <img src={Pressure} alt="" width={60} />
                    <p className='lg:text-[25px] mt-2'>{weatherData.main.pressure}<span className='text-sm'>hPa</span></p>
                  </div>
                  <div className='flex flex-col items-center'>
                    <img src={Humidity} alt="" width={60} />
                    <p className='lg:text-[25px] mt-2'>%{weatherData.main.humidity}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center ">
                <Link onClick={() => navigate(-1)} className="px-10 py-2 bg-blue-600 rounded-2xl">Geri</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Weathers