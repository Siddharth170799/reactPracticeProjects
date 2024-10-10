import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'

const Optimize = () => {

    const [data,setData] = useState(null)
    const [count,setCount] = useState(0)

    const [searchTerm, setSearchTerm] = useState('');

    const ApiData = useMemo(async ()=>{
        const details = await axios.get("https://fakestoreapi.com/products/")
        setData(details.data)
        console.log("data fetched")
    }
    ,[])

    // useEffect(()=>{

    //     const DataFetching=async()=>{
    //         const details = await axios.get("https://fakestoreapi.com/products/")
    //         setData(details.data)
    //         console.log("data fetched")
    //     }
    //     DataFetching()
     
    // },[])

    function handleCount (){
    setCount(count+1)
    }
  
  return (
    <div>
        {count}
      <button onClick={handleCount}>Increase Count</button>
    </div>
  )
}

export default Optimize
