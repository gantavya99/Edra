import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const List = () => {
  const [lists, setLists] = useState([]);
  const [listTitle, setListTitle] = useState("");
  const [cardValues, setCardValues] = useState([]);
    console.log(lists)
    
  const handleAddList = () => {
    if (listTitle.trim() !== "") {
      setLists([...lists, { title: listTitle, cards: [] }]);
      setCardValues([...cardValues, ""]); 
      setListTitle("");
    }
  };

  const handleAddCard = (listIndex) => {
    if (cardValues[listIndex].trim() !== "") {
      const updatedLists = [...lists];
      updatedLists[listIndex].cards.push(cardValues[listIndex]);
      setLists(updatedLists);
      const updatedCardValues = [...cardValues];
      updatedCardValues[listIndex] = "";
      setCardValues(updatedCardValues);
    }
  };

  const handleCardInputChange = (e, listIndex) => {
    const updatedCardValues = [...cardValues];
    updatedCardValues[listIndex] = e.target.value;
    setCardValues(updatedCardValues);
  };

  const onDragEnd = (result) => { 
    if (!result.destination || result.destination.index === result.source.index) {
      return;
    }
    const { source, destination } = result;
    const updatedLists = [...lists];
    if (source.droppableId === destination.droppableId) {
      const listIndex = parseInt(source.droppableId);
      const [removed] = updatedLists[listIndex].cards.splice(source.index, 1);
      updatedLists[listIndex].cards.splice(destination.index, 0, removed);
    }
    setLists(updatedLists);
    console.log(result.source);
  };

  return (
    <div className="flex">
      <div className="mr-4">
        <div className="mb-2 mx-3">
          <input
            className="mr-2 px-2 py-1 border border-gray-400 rounded"
            type="text"
            placeholder="Enter list title"
            value={listTitle}
            onChange={(e) => setListTitle(e.target.value)}
          />
          <button
            onClick={handleAddList}
            className="px-2 py-1 bg-blue-500 text-white rounded"
          >
            Add List
          </button>
        </div>
        <div className="flex">
          <DragDropContext onDragEnd={onDragEnd}>
            {lists.map((list, listIndex) => (
              <Droppable droppableId={listIndex.toString()} key={listIndex}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    key={listIndex}
                    className="mb-4 w-[250px] bg-black mx-2 overflow-hidden rounded-md p-2"
                  >
                    <h3 className="mb-2 text-white">{list.title}</h3>
                    <div>
                      {list.cards.map((card, cardIndex) => (
                        <Draggable
                          key={cardIndex}
                          draggableId={cardIndex.toString()}
                          index={cardIndex}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              key={cardIndex}
                              className="mb-2 p-2 border border-gray-400 rounded text-white"
                            >
                              {card}
                            </div>
                          )}
                        </Draggable>
                      ))}
                    </div>
                    <div className="mt-4 ">
                      <input
                        className="mr-2 px-2 py-1 border border-gray-400 rounded"
                        type="text"
                        placeholder="Enter card text"
                        value={cardValues[listIndex]}
                        onChange={(e) => handleCardInputChange(e, listIndex)}
                        key={listIndex}
                      />
                      <button
                        onClick={() => handleAddCard(listIndex)}
                        className="px-2 mt-2 py-1 bg-green-500 text-white rounded"
                      >
                        Add Card
                      </button>
                    </div>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </DragDropContext>
        </div>
      </div>
    </div>
  );
};

export default List;
