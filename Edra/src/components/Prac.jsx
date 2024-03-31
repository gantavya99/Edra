import React, { useRef, useState } from "react";

const Prac = () => {
  const [list, setList] = useState([]);
  const [titleValue, setTitleValue] = useState("");
  const [cardValue, setCardValue] = useState([]);
    const refElement = useRef(0);
    console.log(refElement);
  const handleTitle = (e) => {
    setTitleValue(e.target.value);
    
  };

  const createList = () => {
    setList([...list, { title: titleValue, cardValue: [] }]);
    setCardValue([...cardValue,""])
    setTitleValue("");
    refElement.current.focus();
  };

 
  const addCardToList = (listIndex) => {
    if (cardValue[listIndex].trim() !== " ") {
      const updatedList = [...list];
      updatedList[listIndex].cardValue.push(cardValue[listIndex]);
      setList(updatedList);
      const updatedCardValue = [...cardValue];
      updatedCardValue[listIndex]="";
      setCardValue(updatedCardValue);
    }
  };
  const handleCardInputChange = (e, listIndex) => {
    const updatedCardValues = [...cardValue];
    updatedCardValues[listIndex] = e.target.value;
    setCardValue(updatedCardValues);
  };


  console.log(list);

  return (
    <div>
      <input
        value={titleValue}
        onChange={handleTitle}
        className="m-2 p-1"
        placeholder="Enter name..."
      />
      <button
        onClick={createList}
        className="bg-black m-2 p-1 text-white rounded-md px-2 py-2"
      >
        Create List +
      </button>
      <div className="flex">
        {list.length > 0 &&
          list.map((val, index) => {
            return (
              <div
                key={index}
                className="mb-4 w-[250px] h-[300px] bg-black mx-2 overflow-hidden rounded-md p-2 text-white"
              >
                Title: {val.title}
                <input
                  onChange={(e) => handleCardInputChange(e, index)}
                  className="text-black"
                  value={cardValue[index]}
                  placeholder="Enter card text"
                />
                <button
                  onClick={()=>addCardToList(index)}
                  className="bg-green-400 m-1 rounded-sm"
                >
                  Add Card
                </button>
                {val.cardValue.map((card, index) => (
                  <div key={index}>Card Value: {card}</div>
                ))}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Prac;
