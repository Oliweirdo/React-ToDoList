import React, { Component } from "react";
import ToDoItem from "../../components/ToDoItem";
import NewTodoForm from "../../components/NewToDoForm";
import styled from "styled-components";

class ToDoList extends Component {
  static defaultProps = {
    tasks: [{ text: "plant the plant" }, { done: false, text: "make coffee" }],
    title: "To Do List",
  };

  state = {
    tasks: this.props.tasks,
    draft: "",
  };

  updateDraft = (event) => {
    this.setState({ draft: event.target.value });
  };

  addToDo = () => {
    const { tasks, draft } = this.state;
    const list = tasks;
    list.push({ text: draft, done: false });
    this.setState({ tasks: list, draft: "" });
  };

  render() {
    const { title } = this.props;
    const { tasks, draft } = this.state;

    return (
      <Container>
        <Header>{title}</Header>
        {tasks.map((task) => (
          <ToDoItem text={task.text} done={task.done} />
        ))}
        <NewTodoForm
          onSubmit={this.addToDo}
          onChange={this.updateDraft}
          draft={draft}
        />
      </Container>
    );
  }
}

export default ToDoList;
