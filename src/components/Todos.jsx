import React from "react";

import Todo from "./Todo";

const Todos = ({ todos }) => {
  return (
    <>{todos && todos.map((todo, index) => <Todo todo={todo} key={index} />)}</>
  );
};

export default Todos;
