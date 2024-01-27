import React, { FC, useEffect, useState } from 'react'
const Todo: FC = () => {

    const [input, setMessage] = useState("")
    const [todo, setTodo] = useState<string[]>([]);

    const handleButtonClick = () => { 
        setTodo([...todo, input]);
    };

    const handleRemoveNumber = (valueToRemove: any) => {
        // Use filter to create a new array excluding the specific value to be removed
        const updatedNumbers = todo.filter((number) => number !== valueToRemove);
        setTodo(updatedNumbers);
      };

      const handleButtonDeleteAll = () => {
        setTodo([]);
      }


    return <div>
        <div>I am Todo.</div>
        <input type="text" name="name" value={input} onChange={(e) => setMessage(e.target.value)} />
        <button onClick={() => handleButtonClick()}> save</button>
        <br />
        <button onClick={() => handleButtonDeleteAll()}> Delete All</button>

        <ul>
        {todo.map((number, index) => (
          <li key={index}>
            {number}
            <button onClick={() => handleRemoveNumber(number)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
}
export default Todo