import React, { useState } from 'react'
import Background from './components/Background.js'
import Navigation from './components/Navigation.js'
import Login from './components/Login.js'


function App() {
  const [login,setLogin]=useState(false);
  const [user,setUser]=useState(false);
  return (
    <div className="App">
      <Background/>
      <Navigation login={login} setLogin={setLogin} user={user} setUser={setUser}/>
      <div className={`${(login)?"block":"hidden"} absolute flex w-full h-full top-0 left-0`}>
        <Login login={login} setLogin={setLogin} user={user} setUser={setUser} />  

      </div>
    </div>
  )
}

export default App;