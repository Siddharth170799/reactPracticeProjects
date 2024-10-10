// import React from 'react';
// import useFetchData from './useFetch';

import { useState } from "react"
import useFetchData from "./useFetch"

// const DataDisplay = () => {
//   const { data, loading, error } = useFetchData("https://fakestoreapi.com/products/");

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;
// console.log(data)
//   return (
//     <div>
//       <h1>Data:</h1>
//       {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
//       <div>{data?.map((item)=>{
//         return <div>{item.title}</div>
//       })}</div>
//     </div>
//   );
// };

// export default DataDisplay;
import React from "react"

const DataDisplay =()=>{
    const {data,loading,error} = useFetchData("https://fakestoreapi.com/products/")
    console.log(data)

    return(
        <div>
             <h1>Data:</h1>
               {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

               {loading ? <div>Loading...</div> :  error ? <div>Error</div>  : <div>
                {data?.map((item)=>{
                return <div>{item.title}</div>
              })}</div> } 
</div>
    )


}

export default DataDisplay
