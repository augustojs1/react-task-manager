import React from "react";
import "./App.css"
import Header from "./Components/Header";
import AddTask from "./Components/Form/AddTask";
import FilterSection from "./Components/TaskFilter/FilterSection";

function App() {
  return (
    <div className="container">
      <Header />
      <AddTask />
      <FilterSection />
    </div>
  );
}

export default App;
