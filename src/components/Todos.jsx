import React from "react";

import Todo from "./Todo";

const Todos = (props) => {
  const { todos, removeTodo } = props;
  return (
    <>
      {todos &&
        todos.map((todo, index) => (
          <Todo todo={todo} key={index} removeTodo={removeTodo} />
        ))}
    </>
  );
};

export default Todos;
