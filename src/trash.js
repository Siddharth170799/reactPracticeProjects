{/* <div className="row" >
    <span style={{backgroundColor:"red"}} >
   <span> <button>1</button></span>
   <div>  <button>1</button> </div>
   <div><button>1</button></div> 
   <div>  <button>1</button></div>
  <div> <button>1</button></div> 
  <div>  <button>1</button></div>
   <div><button>1</button></div> 
  <div> <button>1</button></div> 
   <div><button>1</button></div> 
   <div><button>1</button></div> 
   <div> <button>1</button></div>
    </span> */}
      {/* <div  >
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
      </div> */}
      {/* </div> */}