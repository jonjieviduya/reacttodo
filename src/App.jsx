import React from "react";

//components

import Header from "./components/Header";
import Form from "./components/Form";
import Tabs from "./components/Tabs";
import Todos from "./components/Todos";

const App = () => {
  return (
    <section className="flex justify-center h-screen">
      <div className="border border-gray-400 rounded p-10 w-[700px] mt-10 mb-10">
        <Header />
        <Form />
        <Tabs />
        <Todos />
      </div>
    </section>
  );
};

export default App;
