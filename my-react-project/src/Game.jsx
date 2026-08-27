// import React, { useReducer } from "react";

// const choices = ["Stone", "Paper", "Scissor"];

// const initialState = {
//   userChoice: "",
//   computerChoice: "",
//   result: "",
//   userScore: 0,
//   computerScore: 0,
// };

// function gameReducer(state, action) {
//   switch (action.type) {
//     case "PLAY_GAME":
//       return {
//         ...state,
//         userChoice: action.payload.userChoice,
//         computerChoice: action.payload.computerChoice,
//         result: action.payload.result,

//         userScore:
//           action.payload.result === "You Win!"
//             ? state.userScore + 1
//             : state.userScore,

//         computerScore:
//           action.payload.result === "Computer Wins!"
//             ? state.computerScore + 1
//             : state.computerScore,
//       };

//     case "RESET":
//       return initialState;

//     default:
//       return state;
//   }
// }

// const Game = () => {
//   const [state, dispatch] = useReducer(gameReducer, initialState);

//   const playGame = (userChoice) => {
//     const computerChoice =
//       choices[Math.floor(Math.random() * choices.length)];

//     let result = "";

//     if (userChoice === computerChoice) {
//       result = "Draw!";
//     } else if (
//       (userChoice === "Stone" && computerChoice === "Scissor") ||
//       (userChoice === "Paper" && computerChoice === "Stone") ||
//       (userChoice === "Scissor" && computerChoice === "Paper")
//     ) {
//       result = "You Win!";
//     } else {
//       result = "Computer Wins!";
//     }

//     dispatch({
//       type: "PLAY_GAME",
//       payload: {
//         userChoice,
//         computerChoice,
//         result,
//       },
//     });
//   };

//   const resetGame = () => {
//     dispatch({
//       type: "RESET",
//     });
//   };

//   return (
//     <div className="game-container">
//       <h1>Stone Paper Scissor</h1>

//       <div className="buttons">
//         <button onClick={() => playGame("Stone")}>
//           Stone
//         </button>

//         <button onClick={() => playGame("Paper")}>
//           Paper
//         </button>

//         <button onClick={() => playGame("Scissor")}>
//           Scissor
//         </button>
//       </div>

//       <div className="result-box">
//         <p>
//           <strong>User Choice:</strong>{" "}
//           {state.userChoice || "-"}
//         </p>

//         <p>
//           <strong>Computer Choice:</strong>{" "}
//           {state.computerChoice || "-"}
//         </p>

//         <p>
//           <strong>Result:</strong>{" "}
//           {state.result || "-"}
//         </p>
//       </div>

//       <div className="score-board">
//         <p>User Score: {state.userScore}</p>
//         <p>Computer Score: {state.computerScore}</p>
//       </div>

//       <button onClick={resetGame}>
//         Reset
//       </button>
//     </div>
//   );
// };

// export default Game;

import React, { useReducer } from "react";
import "./App.css";

const App = () => {
  const initialState = {
    userchoice: "",
    computerchoice: "",
    result: "",
  };

  function reducer(state, action) {
    if (action.type === "play") {
      let player = action.payload;

      let arr = ["stone", "paper", "scissor"];

      let computer =
        arr[Math.floor(Math.random() * 3)];

      let result = "";

      if (
        (player === "stone" && computer === "scissor") ||
        (player === "paper" && computer === "stone") ||
        (player === "scissor" && computer === "paper")
      ) {
        result = "You Win!";
      } else if (player === computer) {
        result = "Draw!";
      } else {
        result = "Computer Wins!";
      }

      return {
        userchoice: player,
        computerchoice: computer,
        result: result,
      };
    }

    if (action.type === "reset") {
      return initialState;
    }

    return state;
  }

  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="game-container">
      <div className="buttons">

        <button
          onClick={() =>
            dispatch({
              type: "play",
              payload: "stone",
            })
          }
        >
          Stone
        </button>

        <button
          onClick={() =>
            dispatch({
              type: "play",
              payload: "paper",
            })
          }
        >
          Paper
        </button>

        <button
          onClick={() =>
            dispatch({
              type: "play",
              payload: "scissor",
            })
          }
        >
          Scissor
        </button>

      </div>

      <div className="result-box">
        <p>
          userchoice: {state.userchoice}
        </p>

        <p>
          computerChoice: {state.computerchoice}
        </p>

        <p>
          result: {state.result}
        </p>
      </div>

      <button
        className="reset-btn"
        onClick={() =>
          dispatch({
            type: "reset",
          })
        }
      >
        reset
      </button>
    </div>
  );
};

export default App;