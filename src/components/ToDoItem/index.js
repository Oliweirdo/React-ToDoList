import React, { Component } from "react";
import styled from "styled-components";

class ToDoItem extends Component {
  static defaultProps = {
    done: false,
  };

  state = {
    done: this.props.done,
  };

  toggleDone = () => {
    this.setState({ done: !this.state.done });
  };

  render() {
    const { text } = this.props;

    return (
      <Item onClick={this.toggleDone} done={this.state.done}>
        {text}
      </Item>
    );
  }
}

export default ToDoItem;
