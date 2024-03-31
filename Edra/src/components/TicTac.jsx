import React, { useState, useEffect } from "react";

const TicTac = () => {
  const grid = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  const [value, setValue] = useState(Array(9).fill(null));
  const [clickCount, setClickCount] = useState(0);
  console.log(value);
  const handleWinner = () => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of win) {
      const [ a, b, c ] = logic;
      if (value[a] !== null && value[a] === value[b] && value[a] === value[c]) {
        return true;
      }
      
     
    }
    return false;
  };
  const isWinner = handleWinner();
  useEffect(() => {
    console.log(isWinner);
  }, [value]);
  const handleClick = (index) => {
    if (clickCount === 0) {
      const newValue = [...value];
      newValue[index] = "X";
      setValue(newValue);
      setClickCount(1);
    } else if (clickCount === 1) {
      const newValue = [...value];
      newValue[index] = "0";
      setValue(newValue);
      setClickCount(0);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      {isWinner ? (
        <>
        {clickCount===0?"0 Won":"X Won"}
        <button onClick={()=>window.location.reload()} className="text-white bg-black p-2 m-2 rounded-sm">
            Play Again
        </button>
        </>
      ) : (
        <div className="">
          <div className="w-80">
            {" "}
            {/* Set the width of the container */}
            <div className="grid grid-cols-3 gap-4">
              {grid.map((val, index) => (
                <button
                  onClick={() => handleClick(index)}
                  className="w-full h-20 border border-gray-200 border-2 p-4"
                  key={index}
                >
                  {value[index]}
                </button>
              ))}
            </div>
            <button onClick={()=>window.location.reload()} className="text-white bg-black p-2 m-2 rounded-sm ml-[115px]">
            Play Again
        </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicTac;
