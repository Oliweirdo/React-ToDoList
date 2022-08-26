import "./App.css";
import { Component } from "react";
import ToDoItem from "./components/ToDoItem";
import NewToDoForm from "./components/NewToDoForm";
import ToDoList from "./containers/ToDoList";

class App extends Component {
  render() {
    return (
      <div>
        <ToDoList />
      </div>
    );
  }
}
export default App;
