import React, { useState } from 'react'
import Logo from './Logo'
import Avatar from '../images/Group 441.svg'
import Menu from './Menu'
import User from './User'


function Navigation(prop) {
  let [flag,setFlag]= useState(false);
  const chanceFlag = () =>{
    setFlag(!flag);
  }
  const setLoginUtil = () =>{
    prop.setLogin(true);
  }


  console.log("Nav",prop)
    return (

<div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
      <div className="flex justify-start lg:w-0 lg:flex-1">
          <Logo/>
      </div>
      
      <div className="flex items-center justify-end md:flex-1 lg:w-0">
        
        <span onClick={chanceFlag} className="text-white text-base border-2 rounded-2xl py-2 px-4 cursor-pointer">Join as a Tutor</span>
        <Menu flag={flag} setFlag={setFlag} setLogin={setLoginUtil} />
        {(prop.user)?<User/>:<img className="ml-4" src={Avatar} alt="User"/>}
      </div>

    </div>
  </div>













        
    )
}

export default Navigation;


