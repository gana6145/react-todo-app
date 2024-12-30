import React, { useRef, useState,  } from 'react';
import Todolist from './Todolist';

const Addtodo = () => {
  const todoitem = useRef();
  const tododate = useRef();
  const [todo, settodo] = useState([]);



  const handlesubmit = (event) => {
    event.preventDefault();

    const newtodo = {
      item: todoitem.current.value,
      date: tododate.current.value,
    };
    settodo((prev) => [...prev, newtodo]);
    todoitem.current.value = '';
    tododate.current.value = '';
  };

  const handleDelete = (name) => {
    const updatedTodos = todo.filter((todo) => todo.item !== name);
    settodo(updatedTodos);
  };

  return (
    <>
      <div className="m-5 flex justify-center w-[90%]">
  <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
    <form onSubmit={handlesubmit} className="flex space-x-6">
      <div className="flex-1">
        <input
          type="text"
          className="p-2 border border-gray-300 rounded-lg "
          placeholder="Enter text"
          ref={todoitem}
        />
      </div>
      <div className="flex-1">
        <input
          type="date"
          className="p-2 border border-gray-300 rounded-lg w-full"
          ref={tododate}
          aria-label="Pick a due date"
        />
      </div>
      <div className="flex-1">
        <button
          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-32"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  </div>
</div>


      <Todolist todo={todo} handledelete={handleDelete} />
    </>
  );
};

export default Addtodo;
