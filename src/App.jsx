import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Tabs from "./components/Tabs";
import Todos from "./components/Todos";

const App = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (inputTitle) => {
    let newTodos = {
      id: Math.ceil(Math.random() * 90),
      title: inputTitle,
      created_at: new Date().toLocaleString(),
      completed: false,
    };

    setTodos((todos) => [...todos, newTodos]);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <section className="flex justify-center h-screen">
      <div className="border border-gray-400 rounded p-10 w-[700px] mt-10 mb-10">
        <Header />
        <Form addTodo={addTodo} />
        <Tabs />
        <Todos todos={todos} removeTodo={removeTodo} />
      </div>
    </section>
  );
};

export default App;
