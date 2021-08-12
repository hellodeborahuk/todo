import React, {useState} from "react";
import TodoForm from "./TodoForm";
import {RiCloseCircleLine} from "react-icons/ri";
import {TiEdit} from "react-icons/ti";

function Todo({todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({id: null, value: ''})
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

  return todos.map((todo, index) => (
    <div
      className={
        todo.isComplete
          ? "flex justify-between justify-items-center my-4 p-2 bg-gray-300 text-gray-600 rounded-lg"
          : "flex justify-between justify-items-center my-4 p-2 bg-gradient-to-r from-purple-600 to-purple-800 text-purple-50 rounded-lg"
      }
      key={index}
    >
      <div className={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="flex justify-items-center self-center cursor-pointer text-lg text-white space-x-2">
        <RiCloseCircleLine onClick={() => removeTodo(todo.id)} />
        <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} />
      </div>
    </div>
  ));

}

export default Todo;
