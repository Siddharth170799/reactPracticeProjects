import React, { useEffect, useState,useRef } from 'react'

const Timer = () => {

    const [count,setCount]=useState(30)
    const intervalRef =useRef(null)

    function start() {
        if (count > 0 && !intervalRef.current) {
          intervalRef.current = setInterval(() => {
            setCount(prevCount => prevCount - 1);
          }, 1000);
        }
      }
useEffect(()=>{
start()
},[count])


useEffect(()=>{
    // function stop1() {
    //     if (intervalRef.current ) {
    //       clearInterval(intervalRef.current);
    //       intervalRef.current = null;
    //     }
    //   }
      if(count == 0){
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
     
},[count])

  console.log(count)

  return (
    <div>
      {count}
      <div>
        <button onClick={start}>Start </button>
        <button >Stop</button>
      </div>
    </div>
  )
}

export default Timer
