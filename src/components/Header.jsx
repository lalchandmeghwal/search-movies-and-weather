import React, { useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

const Header = () => {

  const logo = useLocation().pathname;


  return (
    <>

      <div className='bg-[#000000] px-4'>


        <div className=' max-w-293 m-auto flex justify-between   text-white py-5  ' >



          <div>
            {
              logo === '/' ?
                // <h2 className=' text-[#ff0000] text-2xl font-bold  ' >NETFLIX</h2>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" width="120" />
                : 
                <img className='w-10 p-0 m-0 ' src="https://static.vecteezy.com/system/resources/thumbnails/024/683/231/small_2x/3d-icon-day-thunderstrom-heavy-rain-windy-weather-forecast-illustration-concept-icon-render-png.png" alt="" />
            }
           
           
          </div>


          <div>
            <ul className='flex  gap-5  ' >
              <Li titile={'movies'} />
              <Li titile={'weather'} />

            </ul>
          </div>


        </div>
      </div>

      <Outlet />
    </>
  )
}

const Li = ({ titile }) => {

  return (
    <li className='text-white text-xl ' >
      <NavLink to={titile == 'movies' ? "/" : titile} className={` capitalize `}  >{titile}</NavLink>
    </li>
  )

}

export default Header
