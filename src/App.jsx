import React from "react";
import "./App.css"
import Header from "./Components/Header";
import AddTask from "./Components/Form/AddTask";
import FilterSection from "./Components/TaskFilter/FilterSection";
import TaskList from "./Components/TaskList/TaskList";

function App() {
  return (
    <div className="container">
      <Header />
      <AddTask />
      <FilterSection />
      <TaskList task="Learn ReactJS" />
    </div>
  );
}

export default App;
