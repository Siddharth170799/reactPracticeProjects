

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [button,setButton]=useState(true)
    const navigate = useNavigate()


    const navigateToShop=()=>{
        navigate("/shop")
        setButton(false)
    }
const navigateToHome=()=>{
    setButton(true)
    navigate("/")
}

 
  return (
    <div>
        hello
      {button == true ? <button onClick={navigateToShop}> "Shop" </button>:<button onClick={navigateToHome}>Home</button>}
    </div>
  )
}

export default Home
