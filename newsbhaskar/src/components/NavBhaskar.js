import React from 'react'
import './NavBhaskar.css'
import DrawerBhaskar from './DrawerBhaskar'

const NavBhaskar = ({setCategory}) => {
  return (
    <div className='nav'>
        <div className='icon'> <DrawerBhaskar setCategory={setCategory}/>  </div>
     <img style={{cursor:"pointer"}} src='/assets/newbhaskar.png' height='80%'  alt='logo' />
    </div>
  )
}

export default NavBhaskar