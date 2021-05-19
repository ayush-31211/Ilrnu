import React from 'react'
import Bg from "../images/pexels-katerina-holmes-5905700.jpg"
import Black from "../images/BlackShadow.svg"

function Background() {
    return (
        <div style={{position:'fixed',zIndex:'-1'}}>
            
<img src={Black} style={{position:'fixed'}} alt=""/>
<img src={Bg} className="w-screen h-screen" alt=""/>
        </div>
    )
}

export default Background
