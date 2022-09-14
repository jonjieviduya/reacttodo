import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Tabs from "./components/Tabs";
import Todos from "./components/Todos";

const App = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Go to the market.',
      created_at: 'Sep 14, 2022',
      completed: false
    },
    {
      id: 2,
      title: 'Agluto ti arak.',
      created_at: 'Sep 14, 2022',
      completed: false
    }
  ]);

  return (
    <section className="flex justify-center h-screen">
      <div className="border border-gray-400 rounded p-10 w-[700px] mt-10 mb-10">
        <Header />
        <Form />
        <Tabs />
        <Todos todos={ todos } />
      </div>
    </section>
  );
};

export default App;
