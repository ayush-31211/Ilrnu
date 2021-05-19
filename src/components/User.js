import React from 'react'
import Avatar from '../images/PhotoAvtar.svg'
import Hamger from '../images/Group 440.svg'
function User() {
    return (
        <div className="text-black ml-4 bg-white w-max p-1 rounded-xl cursor-pointer">
            <img className="inline-block ml-3" src={Hamger} alt="Options"/>
            <img className="inline-block mx-3" src={Avatar} alt="User"/>
        </div>
    )
}

export default User
