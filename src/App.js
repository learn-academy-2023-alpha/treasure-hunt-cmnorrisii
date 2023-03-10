import React, { useState } from "react";
import "./App.css";
import Square from "./components/Square";

const App = () => {
  const defaultBoard = new Array(9).fill("?");
  const randomLocation = () => Math.floor(Math.random() * board.length);
  const [board, setBoard] = useState(defaultBoard);
  const [treasureLocation, setTreasureLocation] = useState(randomLocation());
  const [bombLocation, setBombLocation] = useState(randomLocation());
  const handleGamePlay = (index) => {
    // alert(index)
    let updatedBoard = [...board];
    if (index === treasureLocation) {
      updatedBoard[index] = "🍩";
      setBoard(updatedBoard);
    } else if (index === bombLocation) {
      updatedBoard[index] = "🏴‍☠️";
      setBoard(updatedBoard);
    } else {
      updatedBoard[index] = "🌴";
      setBoard(updatedBoard);
    }
  };
  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <button
        onClick={() => {
          setBoard(defaultBoard);
          setTreasureLocation(randomLocation());
          setBombLocation(randomLocation());
        }}
      >
        Play Again
      </button>
      <div className="gameboard">
        {board.map((value, index) => {
          return (
            <Square
              value={value}
              key={index}
              index={index}
              handleGamePlay={handleGamePlay}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
