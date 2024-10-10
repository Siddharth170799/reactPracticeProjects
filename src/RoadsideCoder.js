import React, { useState } from 'react'

const RoadsideCoder = ({explorer}) => {

    console.log(explorer.items)
    const [expand,setExpand] = useState(false)


    if(explorer.isFolder){
        return (
            <div>
            <span onClick={()=>setExpand(!expand)}>
              {explorer.name}
        
        
              <br/>
            </span>
         
            <div style={{display:expand ? "block":"none",padding:"15px"}}>
            {explorer?.items?.map((exp)=>{
                return <RoadsideCoder explorer ={exp}/>
            })}
            </div>
            </div>
          )
    }else{
        return <span>{explorer.name}<br/></span>
    }

}

export default RoadsideCoder
