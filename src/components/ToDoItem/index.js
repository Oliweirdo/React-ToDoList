import React, { Component } from "react";
import styled from "styled-components";

const Item = styled.div`
  color: black;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 7px;
  background: ${(props) => (props.done ? "b5838d" : "#fCCEC4")};
`;

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
