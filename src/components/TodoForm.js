import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
      inputRef.current.focus()
  })

  const handleChange = e => {
      setInput(e.target.value);
  }

  const handleSubmit = e => {
      e.preventDefault();
              props.onSubmit({
          id: Math.floor(Math.random() * 10000),
          text: input,
      });

      setInput(''); // resets to empty string
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit} className="space-x-6">
      <input
        type="text"
        placeholder="Add a todo..."
        value={input}
        name="text"
        className="border border-blue-500 p-2"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="bg-blue-500 text-blue-50 rounded-lg px-4 py-2 hover:bg-blue-600">Add todo</button>
    </form>
  );
}

export default TodoForm;
