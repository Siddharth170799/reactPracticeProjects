import React, { useEffect, useState, useRef } from "react";

import axios from "axios";
import Buttons from "./Button";


const Quiz2 = () => {
  const [data, setData] = useState([]);
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

  const [button2, setButton2] = useState(true);
  const [button3, setButton3] = useState(true);

  const [button4, setButton4] = useState(true);

  const [correctAnswers, setCorrectAnswers] = useState([]);


//   function nextQuestion() {
//     setCurrentKey(currentKey + 1);
//     setButton(!button);
//     intervalRef.current = null;
//     intervalRef2.current = null;
//     setButton2(!button2);
//     setSelect(true);
//     setDisplayMessage("");
//     setButton3(true);
//     if (currentKey == 12) {
//       setCount("");
//       setCount2("");
//     }
//   }
  async function validate(value) {
    if (data.find((item) => item.answer === value)) {
      setDisplayMessage("Correct Answer");

      setValue(value);
      console.log(value);
      setScore(score + 1);
      clearInterval(intervalRef.current);
      clearInterval(intervalRef2.current);
      setButton3(false);
   
      const details = data.find((item) => item.answer === value);
      console.log(details);
      setCorrectAnswers((item) => [...item, details.key]);
      await axios.post("https://quiz-backend-new-1.onrender.com/api1/correctQuestions", {
        details,
      });

    } else {
      setSelect(false);
      setDisplayMessage("Wrong Answer");
      clearInterval(intervalRef.current);
      clearInterval(intervalRef2.current);
      setButton3(false);
    }
  }


  function success() {
    if (currentKey > 11) {
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
    zero();
  }, [button, count2]);

  function start() {
    if (count > 0 && !intervalRef.current && button == true) {
      intervalRef.current = setInterval(() => {
        setCount((count) => count - 1);
      }, 1000);
    }
  }

  useEffect(() => {
    start();
    zero();
  }, [count]);



  useEffect(() => {
    if (count == 0 ) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setSelect(false);
    }
  }, [count]);

  function zero() {
    if (count == 0 || count2 == 0) {
      setCount(0);
      setCount2(0);
    }
  }

  async function QuestionsData() {
    const questions = await axios.get(
      "https://quiz-backend-new-1.onrender.com/api1/getQuestions"
    );
    setData(questions.data.data);
  }
  useEffect(() => {
    QuestionsData();
  }, []);



  async function buttonNumber(value1) {

    console.log(value1);
    setCurrentKey(value1);
    setButton(!button);
    setSelect(true);
    setDisplayMessage("");

 

    const dataBackend = await axios.get(
      "https://quiz-backend-new-1.onrender.com/api1/getCorrectQuestions"
    );
        setCorrectAnswers(dataBackend.data.data.map((item) => item.key));
  }



  console.log(count)

async function clearDocuments(){
  try {
    await axios.delete("https://quiz-backend-new-1.onrender.com/api1/clearDocuments",{hi:"hi"});
    console.log('Documents cleared successfully');
  } catch (error) {
    console.error('Error clearing documents:', error);
  }
  
}

useEffect(() => {
  clearDocuments();
}, []);

  return (
    <>
      <div className="quiz-container">
        <div className="quiz-row">
          <div className="quiz-col-2">
        
            {Buttons.map((item) => {
              return (
                <>
                  <button
                    onClick={() => buttonNumber(item.button)}
                    className="number-button"
                  >
                    {" "}
                    {item.button}
                  </button>
                </>
              );
            })}
          </div>
          <div className="quiz-col-10">
            <div>
              <h1 className="quiz-heading">Welcome To The World of Quiz</h1>
            </div>
            <h2 className="quiz-score">Score {score}/11</h2>
            <div className="quiz-content">
              <div className="timer-container">
                <h1 className="timer">
                  {button ? count : count2}
                  {count === 0 && count2 === 0 && currentKey < 11 && (
                    <img
                      className="game-over-image"
                      src="https://t3.ftcdn.net/jpg/05/79/40/78/360_F_579407829_e0bZUE8RF6poVtkiNeqUSQ8K1jV2Is94.jpg"
                      alt="Game Over"
                    />
                  )}
                </h1>
              </div>
              <div className="question-container">
                {data.map((item) => (
                  <React.Fragment key={item.key}>
                    {currentKey === item.key && (
                      // <div className="question-block">
                      <div
                        className={`question-block ${
                          correctAnswers.includes(item.key)
                            ? "correct"
                            : "wrong"
                        }`}
                      >
                        <h1 className="question-text">{item.question}</h1>
                        <div className="options-container">
                          <button
                            className="option-button"
                            type="button"
                            onClick={() => validate(item.option1)}
                            disabled={!select}
                          >
                            {item.option1}
                          </button>
                          <button
                            className="option-button"
                            type="button"
                            onClick={() => validate(item.option2)}
                            disabled={!select}
                          >
                            {item.option2}
                          </button>
                          <button
                            className="option-button"
                            type="button"
                            onClick={() => validate(item.option3)}
                            disabled={!select}
                          >
                            {item.option3}
                          </button>
                          <button
                            className="option-button"
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
                ))}
              </div>
              <div className="message-container">
                {displayMessage !== null && (
                  <p className="display-message">{displayMessage}</p>
                )}
                {display2}
              </div>
              {/* {!button3 && (
              <button className="next-button" onClick={nextQuestion} style={{textAlign:"center"}}>
                Next Question
              </button>
            )} */}
            </div>
          </div>
        </div>
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

export default Quiz2;
