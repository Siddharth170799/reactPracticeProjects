import React, { useEffect, useState,useRef } from "react";
import Questions from "./Questions";
const Quiz = () => {
  const [data, setData] = useState(Questions);

  const [currentKey, setCurrentKey] = useState(1);
const [count,setCount]=useState(30);
  const [count2,setCount2]=useState(5)
  const [button,setButton]=useState(true)
  const[displayMessage,setDisplayMessage]=useState(null)
  const intervalRef = useRef(null)
  const [select,setSelect]=useState(true)
  const intervalRef2 = useRef(null)

  function validate(value) {
    if ( data.find((item)=>item.answer == value )) {
      alert("correct answer");
      setCurrentKey(currentKey + 1);
      setButton(!button)
   
    } else  {

        setSelect(!select)
        setDisplayMessage("game over")
        clearInterval(intervalRef.current)
        clearInterval(intervalRef2.current)
    }
  }

//// for even number questions count2 state variable////
useEffect(() => {

if(button == false){

setCount(30)

intervalRef2.current =setInterval(()=>{
setCount2(count2-1)

},1000)

if(count2 == 0){
    clearInterval(intervalRef2.current)
    intervalRef2.current=null
}
}

  }, [button,count2]);


//////// for odd number questions count state variable/////

function start() {
    if (count > 0 && !intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCount((count)=>count - 1);
      }, 1000);
    }
  }
useEffect(()=>{
start()
},[count])


useEffect(()=>{
  
      if(count == 0){
        clearInterval(intervalRef.current)
        intervalRef.current = null
        setSelect(!select)
      }
     
},[count])



/////////////

////this is just for understanding the concept of setInterval and setTimeout////

// const [state,setState] = useState(null)
// const intervalId2 = useRef(null)
// useEffect(()=>{
//     function sayHello() {
//         console.log('Hello');
//       }
      
//      setState( setInterval(sayHello, 1000))

//      function namaste(){
//         console.log("hi");
        
//      }
//      intervalId2.current = setInterval(namaste,1000)
  
// },[])
// console.log(state)
// console.log(intervalId2.current)


  return (
    <div>
      <div>
      
       
        <h1 style={{ marginLeft: "1200px" }}>{button == true ? count : count2}  {count == 0 || count2 == 0  ? <img style={{height:"150px",width:"150px"}} src="https://t3.ftcdn.net/jpg/05/79/40/78/360_F_579407829_e0bZUE8RF6poVtkiNeqUSQ8K1jV2Is94.jpg"/>:""} </h1>
        {data.map((item) => {
          return (
            <>
              {currentKey == item?.key && (
                <>
                  <h1>{item?.question}</h1>
                  <div>
                    {" "}
                    <button
                      type="radio"
                      onClick={() => validate(item?.option1)}
                      disabled={!select}
                    >
                      {item?.option1}
                    </button>
                  </div>
                  <div>
                    {" "}
                    <button
                      type="radio"
                      onClick={() => validate(item?.option2)}
                      disabled={!select}
                    >
                      {item?.option2}
                    </button>
                  </div>
                  <div>
                    {" "}
                    <button
                      type="radio"
                      onClick={() => validate(item?.option3)}
                      disabled={!select}
                    >
                      {item?.option3}
                    </button>
                  </div>
                  <div>
                    {" "}
                    <button
                      type="radio"
                      onClick={() => validate(item?.option4)}
                      disabled={!select}
                    >
                      {item?.option4}
                    </button>
                  </div>
                </>
              )}
            </>
          );
        })}
      </div>
      <div>{displayMessage == null ? "": displayMessage}</div>
    </div>
  );
};

export default Quiz;
