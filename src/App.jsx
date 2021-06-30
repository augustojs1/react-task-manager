import React from "react";
import "./App.css"
import Header from "./Header";
import AddTask from "./Components/Form/AddTask";

function App() {
  return (
    <div className="container">
      <Header />
      <AddTask />
    </div>
  );
}

export default App;
