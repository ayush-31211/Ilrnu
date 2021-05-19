import React, { useState } from 'react'
import X from '../images/Cross.svg'

function Login(prop) {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    const setLoginUtil = () =>{
        setEmail("");
        setPassword("");
        prop.setLogin(false);
    }
    const setUser = () =>{
        setEmail("");
        setPassword("");
        prop.setUser(true);
        prop.setLogin(false);
    }
    return (
        <div className={` m-auto text-black w-3/12 bg-white rounded-xl`} style={{minWidth:'300px'}}>
            <img src={X} className="mt-1 w-max ml-auto mr-1.5 cursor-pointer"alt="" onClick={setLoginUtil} />
            <div className="text-black font-inter text-2xl mx-auto w-max font-bold">Login</div>
            <input className="placeholder-gray-500 text-black bg-gray-100 w-9/12 mx-auto block px-3 py-2 rounded-xl placeholder-opacity-75 md:placeholder-opacity-50 outline-none my-2.5" placeholder="your mail id" value={email}  onChange={(event)=>{setEmail(event.target.val)}} type='email'/>            
            <input className="placeholder-gray-500 text-black bg-gray-100 w-9/12 mx-auto block px-3 py-2 rounded-xl placeholder-opacity-75 md:placeholder-opacity-50 outline-none my-2.5" placeholder="enter password" value={password}  onChange={(event)=>{setPassword(event.target.val)}}type="password"/>    
            <div className="text-black text-xs font-inter text-right w-9/12 mx-auto cursor-pointer tracking-normal my-1"> Forgot password?</div>
            <div className="text-white font-bold font-inter text-center w-9/12 mx-auto cursor-pointer tracking-normal border-2 border-blue-200 my-2 py-1 rounded-xl" style={{backgroundColor:'#305CAD',borderColor:'#305CAD'}} onClick={setUser}> Login</div>
            <div className="text-black font-bold font-inter text-center w-9/12 mx-auto cursor-pointer tracking-normal border-2 border-blue-200 my-2 py-1 rounded-xl" style={{color:'#305CAD',borderColor:'#305CAD'}}> Login with gmail</div>
            <div className="text-black text-xs font-inter text-center py-1 w-9/12 mx-auto tracking-normal my-2"> Not a member of iLRNU? <span className="font-semibold cursor-pointer" style={{color:'#305CAD'}}>Sign up</span></div>
        </div>
    )
}

export default Login
