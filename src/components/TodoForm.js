import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput(""); // resets to empty string
  };

  return (
    <form
      className="todo-form"
      onSubmit={handleSubmit}
      className="space-x-6 flex justify-between"
    >
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update you item..."
            value={input}
            name="text"
            className="border border-purple-500 rounded-lg p-2 flex-grow mt-4"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="bg-purple-500 text-blue-50 rounded-lg px-4 py-2 mt-4 hover:bg-purple-600 transition duration-300">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a todo..."
            value={input}
            name="text"
            className="border border-purple-500 rounded-lg p-2 flex-grow"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="bg-purple-500 text-blue-50 rounded-lg px-4 py-2 hover:bg-purple-600 transition duration-300">
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
