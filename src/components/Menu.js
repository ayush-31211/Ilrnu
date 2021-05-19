import React, { useState } from 'react'

function Menu(prop) {
    let [flag,setFlag] = useState({first:false, second:false, third:false,forth: false});

    const change=(idx)=>()=>{
        flag={
            first:false, second:false, third:false,forth: false
        }
        if(idx===1)
        flag.first=true;
        if(idx===2)
        flag.second=true;
        if(idx===3)
        flag.third=true;
        if(idx===4)
        flag.forth=true;
        setFlag(flag);
        if(idx===1)
        {
            prop.setFlag(false);
            prop.setLogin();
        }
    }

    return (
        <div className="bg-white p-5 rounded-2xl" style={{display:`${(prop.flag)?"block":"none"}`,widows:'8vw',top:'13vh',left:'72vw',position:'fixed'}}>
            <ul>
                <li className={`py-2.5 font-inter cursor-pointer ${(flag.first)?"font-bold":""}`} onClick={change(1)} >Log in</li>
                <li className={`py-2.5 font-inter cursor-pointer ${(flag.second)?"font-bold":""}`} onClick={change(2)} >Sign up</li>
                <li className={`py-2.5 font-inter cursor-pointer ${(flag.third)?"font-bold":""}`} onClick={change(3)} >How online Tutoring works</li>
                <li className={`py-2.5 font-inter cursor-pointer ${(flag.forth)?"font-bold":""}`} onClick={change(4)} >Help Center</li>
            </ul>
        </div>
    )
}

export default Menu
