import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const lightConfig ={
    red:{
      next:"yellow",
      duration:4000
    },
    yellow:{
      next:"green",
      duration:5000
    },
    green:{
      next:"red",
      duration:3000
    }
  } 
  
  const [light,setLight]=useState("red")
  
  const Traficlight=()=>{
    useEffect(()=>{
setTimeout(() => {
  setLight(lightConfig[light].next)
}, lightConfig[light].duration);


    },[light])
  }
Traficlight()
  return (
    <>  <div className="container">

      {/* <Navbar/> */}
      <div className='traffic-light'>
      <div className={`light red ${light === "red"? "active": ""}`}></div>
      <div className={`light yellow ${light === "yellow"? "active": ""}`}></div>
      <div className={`light green ${light === "green"? "active": ""}`}></div>
    </div>
  
    </div>
    </>
  )
}

export default App
