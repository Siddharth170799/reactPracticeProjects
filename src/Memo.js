import React, { useMemo, useState } from 'react'

const Memo = () => {

    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState(5)


    const [count3,setCount3] = useState(10)


    const value = useMemo(()=>{
        console.log("component re rendered")
return count + count2
    },[count,count2])
console.log(value)
console.log(count3)
  return (
    <div>
      {value}
      <button onClick={()=>setCount(count+1)}>Click to increase first count</button>

      <button onClick={()=>setCount3(count3 + 1)}>Click to increase the third count</button>
    </div>
  )
}

export default Memo
