import React from 'react'
import Button from './Button';
import logo from '../../assets/logo.png';


function Navbar() {
  return (
    <div className='items-center justify-end'>
      <div>
        <img className="w-20 h-20 object-cover p-5" src={logo} alt='logo' />
      </div>
      <div className="text-4xl dark:text-white font-bold items-right">
        <Button >Profile</Button>
        <Button >Log out</Button>
      </div>
    </div>

  )
}

export default Navbar
