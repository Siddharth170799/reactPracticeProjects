






import React, { useEffect, useState, useRef } from "react";
import Questions from "./Questions";

const Quiz = () => {
  const [data, setData] = useState(Questions);
  const [currentKey, setCurrentKey] = useState(1);
  const [count, setCount] = useState(20);
  const [count2, setCount2] = useState(20);
  const [button, setButton] = useState(true);
  const [displayMessage, setDisplayMessage] = useState(null);
  const intervalRef = useRef(null);
  const [select, setSelect] = useState(true);
  const intervalRef2 = useRef(null);
  const [value, setValue] = useState(null);
  const [display2, setDisplay2] = useState(null);
  const [score, setScore] = useState(0);

  const [button2,setButton2]=useState(true)
  const [button3,setButton3] = useState(true)
  console.log(display2)

function nextQuestion(){
  setCurrentKey(currentKey + 1);
  setButton(!button)
  intervalRef.current=null;
  intervalRef2.current=null
  setButton2(!button2)
  setSelect(true)
  setDisplayMessage("")  
  setButton3(true)
  if(currentKey == 12){
    setCount('')
    setCount2('')
  }
}
  function validate(value) {
    
    if (data.find((item) => item.answer === value)) {
     
      setDisplayMessage("Correct Answer")
   
      setValue(value);
      setScore(score + 1);
      clearInterval(intervalRef.current)
      clearInterval(intervalRef2.current)
      setButton3(false)
     
    } else {
      setSelect(false);
      setDisplayMessage("Wrong Answer");
      clearInterval(intervalRef.current);
      clearInterval(intervalRef2.current);
      setButton3(false)
    
    }
  }

  function success() {
    if (currentKey > 11 ) {
      setCount("");
      setCount2("");
      setDisplay2("Successfully Completed");
    }
  }

  useEffect(() => {
    if (button == false) {
      
      setCount(20);

  if (count2 > 0 && !intervalRef2.current) {
        intervalRef2.current = setInterval(() => {
          setCount2((count2) => count2 - 1);
        }, 1000);
      }
    } else {
      clearInterval(intervalRef2.current);
      intervalRef2.current = null;
      setCount2(20);
    }

    if (count2 === 0) {
      clearInterval(intervalRef2.current);
      intervalRef2.current = null;
      setSelect(false);
    }

    success();
    zero()
   
  }, [button, count2]);



  function start() {
    if (count > 0 && !intervalRef.current)  {
      intervalRef.current = setInterval(() => {
        setCount((count) => count - 1);
      }, 1000);
    }
  }

  useEffect(() => {
    start();
    zero()
  }, [count]);

  useEffect(()=>{
    if(button2 == true){
      start()
    }

  },[button2])

  useEffect(() => {
    if (count === 0) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setSelect(false);
    }
  }, [count]);

  function zero(){
    if (count == 0|| count2 == 0){
        setCount(0)
        setCount2(0)
    }
  }
 

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", margin: "20px", color: "white" }}>
          Welcome To The World of Quiz
        </h1>
      </div>
      <h2 style={{ textAlign: "center", color: "black" }}>Score {score}/11</h2>
      <div style={styles.quizContainer}>
        <div style={styles.timerContainer}>
          <h1 style={styles.timer}>
            {button == true  ? count : count2}

            {(count == 0 && count2 == 0 && currentKey < 11) && (
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
          {displayMessage !== null && (
            <p style={styles.displayMessage}>{displayMessage}</p>
          )}
          {display2}
        </div>
      {button3 == false ?
      <button onClick={nextQuestion}>
        Next Question</button>
        :"" }  
      </div>
    </>
  );
};

const styles = {
  quizContainer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#001f3f", 
    borderRadius: "10px",
    width: "60%",
    margin: "auto",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    color: "white",
  },
  timerContainer: {
    marginBottom: "20px",
  },
  timer: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#FFD700", 
  },
  gameOverImage: {
    height: "100px",
    width: "100px",
  },
  questionContainer: {
    marginBottom: "20px",
  },
  questionBlock: {
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    marginBottom: "20px",
  },
  questionText: {
    fontSize: "18px",
    marginBottom: "20px",
    color: "#FFD700", 
  },
  optionsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  optionButton: {
    padding: "15px",
    borderRadius: "10px",
    border: "2px solid #FFD700", 
    backgroundColor: "#002f5f", 
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background-color 0.3s, transform 0.3s",
  },
  optionButtonHover: {
    backgroundColor: "#FFD700", 
    color: "#002f5f", 
    transform: "scale(1.05)",
  },
  messageContainer: {
    marginTop: "20px",
  },
  displayMessage: {
    fontSize: "18px",
    color: "red",
  },
};

export default Quiz;
