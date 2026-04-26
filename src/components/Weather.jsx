import axios from 'axios'
import React, { useEffect, useState } from 'react'

const API_KEY = 'eb6da757fa75e0d88639ff4660b01ba2';

const Weather = () => {
  const [city, setCity] = useState('Jaipur');
  const [data, setData] = useState([]);

  const [input, setInput] = useState('');
  




  const weatherData = async () => {
    // const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    
    try {
       const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eb6da757fa75e0d88639ff4660b01ba2&units=metric`);
    setData(response.data)
    } catch (err){
      console.log(err);
    }
   
  };
 
  useEffect(() => { 
    weatherData();
  }, [city]);

  // console.log( data.wind.speed );
  // console.log(data?.weather)

  const search = (e) => {
    e.preventDefault();

    setCity(input)

    setInput('');
    

  }

  return (
    <div className='h-165  p-10  bg-[#0f172a] ' >


      <form onSubmit={search}  className='max-w-175 m-auto  my-5 mb-10 ' >
        <input value={input} onChange={e => setInput(e.target.value)} className='bg-white w-full py-2 px-3 rounded border-0 outline-0 text-black placeholder:text-black text-xl ' type="search" placeholder='Search Weather...'  />
      </form>


      <div className=" bg-[#1e293b] rounded-lg text-white  max-w-100 m-auto  p-5 ">
        <h2 className='text-center font-semibold  text-2xl   my-2 ' >{data.name }</h2>
        <h1 className=' text-5xl text-center mt-2 font-semibold   ' >{data?.main?.temp}°C</h1>
        <p className='text-center capitalize  text-xl   ' >{data?.weather?.[0]?.main }</p>

        <div className='flex justify-between  items-center  py-3' >
          <p>💧 {data?.main?.humidity}%</p>
          <img src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`} alt="" />
          <p>🌬 {data?.wind?.speed}  m/s</p>
        </div>
       
      </div>



    </div>
  )
}


{/* <div className="card">
  <h2>{data.name}</h2>
  <h1>{data.main.temp}°C</h1>
  <p>{data.weather[0].description}</p>
  <p>Humidity: {data.main.humidity}%</p>
  <p>Wind: {data.wind.speed} m/s</p>
</div> */}



export default Weather
