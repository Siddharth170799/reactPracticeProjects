import React, { useEffect, useState,useRef } from "react";
import Questions from "./Questions";
const Quiz = () => {
  const [data, setData] = useState(Questions);

  const [currentKey, setCurrentKey] = useState(1);
const [count,setCount]=useState(20);
  const [count2,setCount2]=useState(20)
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

// //// for even number questions count2 state variable////
// useEffect(() => {

// if(button == false){

// setCount(30)


// intervalRef2.current =setInterval(()=>{
// setCount2(count2-1)

// },1000)

// }
//  else if(button == true){
//     clearInterval(intervalRef2.current)
//     intervalRef2.current=null
//     setCount2(10)
// }

// if(count2 == 0){
//     clearInterval(intervalRef2.current)
//     intervalRef2.current = null
//     setSelect(!select)
   
// }


//   }, [button,count2]);




// useEffect(() => {
//     if (button == false) {
//       setCount(20);
//       if (count2 > 0 && !intervalRef2.current) {
//         intervalRef2.current = setInterval(() => {
//           setCount2((count2) => count2 - 1);
//         }, 1000);
//       }
//     } else {
//       clearInterval(intervalRef2.current);
//       intervalRef2.current = null;
//       setCount2(20);
//     }

//     if (count2 === 0) {
//       clearInterval(intervalRef2.current);
//       intervalRef2.current = null;
//       setSelect(!select);
//     }

//   }, [button, count2]);




  useEffect(()=>{
  if(button == false ){
    setCount(20)
    if(count2 > 0 && !intervalRef2.current){
        intervalRef2.current = setInterval(()=>{
            setCount2((count2)=>count2-1)
        },1000)
    }
  
  }else{
    clearInterval(intervalRef2.current)
    intervalRef2.current = null;
    setCount2(20)
  }

  if(count2 == 0){
    clearInterval(intervalRef2.current)
    intervalRef2.current=null;
    setSelect(!select)
  }
  },[button,count2])

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
 
    <div style={styles.quizContainer}>
    <div style={styles.timerContainer}>
      <h1 style={styles.timer}>
        {button ? count : count2}{" "}
        {(count === 0 || count2 === 0) && (
          <img
            style={styles.gameOverImage}
            src="https://t3.ftcdn.net/jpg/05/79/40/78/360_F_579407829_e0bZUE8RF6poVtkiNeqUSQ8K1jV2Is94.jpg"
            alt="Game Over"
          />
        )}
      </h1>
    </div>
    <div style={styles.questionContainer}>
      {data.map((item) => {
        return (
          <React.Fragment key={item.key}>
            {currentKey === item.key && (
              <div style={styles.questionBlock}>
                <h1 style={styles.questionText}>{item.question}</h1>
                <div style={styles.optionsContainer}>
                  <button
                    style={styles.optionButton}
                    type="button"
                    onClick={() => validate(item.option1)}
                    disabled={!select}
                  >
                    {item.option1}
                  </button>
                  <button
                    style={styles.optionButton}
                    type="button"
                    onClick={() => validate(item.option2)}
                    disabled={!select}
                  >
                    {item.option2}
                  </button>
                  <button
                    style={styles.optionButton}
                    type="button"
                    onClick={() => validate(item.option3)}
                    disabled={!select}
                  >
                    {item.option3}
                  </button>
                  <button
                    style={styles.optionButton}
                    type="button"
                    onClick={() => validate(item.option4)}
                    disabled={!select}
                  >
                    {item.option4}
                  </button>
                </div>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
    <div style={styles.messageContainer}>
      {displayMessage !== null && <p style={styles.displayMessage}>{displayMessage}</p>}
    </div>
  </div>
);
  
};



const styles = {
    quizContainer: {
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '10px',
      width: '60%',
      margin: 'auto',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    timerContainer: {
      marginBottom: '20px',
    },
    timer: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    gameOverImage: {
      height: '150px',
      width: '150px',
    },
    questionContainer: {
      marginBottom: '20px',
    },
    questionBlock: {
      backgroundColor: '#ffffff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      marginBottom: '20px',
    },
    questionText: {
      fontSize: '18px',
      marginBottom: '20px',
    },
    optionsContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    optionButton: {
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #cccccc',
      backgroundColor: '#007bff',
      color: '#ffffff',
      cursor: 'pointer',
    },
    optionButtonDisabled: {
      backgroundColor: '#cccccc',
      cursor: 'not-allowed',
    },
    messageContainer: {
      marginTop: '20px',
    },
    displayMessage: {
      fontSize: '18px',
      color: 'red',
    },
  };

export default Quiz;
