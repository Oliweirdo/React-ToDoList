import React, { Component } from "react";
import styled from "styled-components";

const NewToDoForm = ({ onChange, draft, onSubmit }) => (
  <Container>
    <TextInput type="text" onChange={onChange} value={draft} />
    <Button onClick={onSubmit}>+</Button>
  </Container>
);

export default NewToDoForm;
