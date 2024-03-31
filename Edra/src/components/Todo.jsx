import React, { useState } from 'react';

const Todo = () => {
    const [todo, setTodo] = useState([]);
    const [text, setText] = useState("");
    const [editText, setEditText] = useState(text);
    const addTodo = () => {
        setTodo([...todo, text]);
        setText("");
    }

    const deleteTodo = (index) => {
        const updatedTodo = todo.filter((val, id) => id !== index);
        setTodo(updatedTodo);
    }

    const editTodo = (index) => {
        const editedText = prompt("Enter the new text:", todo[index]); // Prompt the user to enter new text
        if (editedText !== null) { // Check if the prompt was canceled
            const updatedTodo = [...todo];
            updatedTodo[index] = editedText;
            setTodo(updatedTodo);
        }
    }
    

    return (
        <div>
            <input 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder='Add Todo'
            />
            <button 
                onClick={addTodo} 
                className='p-2 bg-black text-white rounded-md m-2'
            >
                Add Todo
            </button>
            <div className='m-4'>
                {todo.length > 0 && todo.map((val, index) => {
                    return (
                        <p key={index}>
                            {val}
                            <button 
                                onClick={() => editTodo(index)} 
                                className='mx-2 text-xs p-2 bg-black text-white m-1 rounded-md'
                            >
                                Edit
                            </button>
                            <button 
                                onClick={() => deleteTodo(index)} 
                                className='mx-2 text-xs p-2 bg-black text-white m-1 rounded-md'
                            >
                                Delete
                            </button>
                        </p>
                    )
                })}
            </div>
        </div>
    )
}

export default Todo;
