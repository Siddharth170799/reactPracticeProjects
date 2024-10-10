import React, { Suspense, useEffect, useState } from 'react'

// const LazyComponent = React.lazy(()=> 
//     new Promise((resolve)=>{
//     setTimeout(()=>{
//        resolve( import ("./Lazy"))
//     },3000)
// })
// )

const LazyComponent = React.lazy(function(){


 return new Promise((resolve)=>{
  setTimeout(()=>{
     resolve( import ("./Lazy"))
  },3000)
})
}
)

const MainLazy = () => {

const [button,setButton] = useState(false)


  return (
    <div>
        <h1>Main Application</h1>

        <div onClick={()=>setButton(true)}>Click Here</div>

        {button &&     <Suspense fallback={<div>Loading</div>}>
<LazyComponent/>
      </Suspense> }
  
    </div>
  )
}

export default MainLazy
