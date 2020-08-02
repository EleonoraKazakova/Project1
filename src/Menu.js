import React, { useState } from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'
import useOnclickOutside from "react-cool-onclickoutside";
       
const countries = {
  
  Russia: ['Moscow', 'Samara'],
  France: ['Paris'],
  Italy: ['Rome'],
  
}

function Menu() {
  const [currentCountry, setCurrentCountry] = useState('')
  const [showNav, setShowNav] = useState(false)
  const menuRef = useOnclickOutside(() => setShowNav(false))

  return (
    <>
    <div className='Menu-menu'
      onClick = {() => setShowNav(!showNav)} >
      Menu
    </div>
    {showNav ? <nav className='Menu-nav' ref={ menuRef }>
      <Link to='/'>Home</Link>
      <Link to='/gallery/Russia/Moscow'>Moscow</Link>
      <Link to='/note/1'>Note</Link>
    </nav> : null
    }

    <div className='menu'>
      {
        Object.entries(countries)
          .map(([country, cities]) => (
            <div
              className='country'
              onMouseEnter={() => setCurrentCountry(country)}
              onMouseLeave={() => setCurrentCountry('')}
            >
              <div className={currentCountry === country ? 'selected-country' : ''}>
                {country}
              </div>


              <div className={currentCountry === country ? 'cities' : 'cities-hidden'}>
                {cities.map(city => <Link className='city' to={`/gallery/${country}/${city}`}>{city}</Link>)}

              </div>
            </div>

          )
          )
      }

    </div>
    </>
  )
}


export default Menu