import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ListTitleTextarea from './ListTitleTextarea';
import Button from './Button';
import '../Kanaban/ListAdder.css';

const ListAdderTextareaWrapper = styled.div`
  height: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
`;


class ListAdder extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isListInEdit: false,
      name: ""
    }
    this.handleAddList = this.handleAddList.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBlur = () => {
    this.setState({ isListInEdit: false });
  };

  handleAddList = name => {
    this.setState({ name: name.target.value });
  }
  handleKeyDown = event => {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.handleSubmit();
    }
  };
  handleSubmit = () => {
    const name = this.state.name;

    axios.post('http://localhost:8080/lists', {name})
    .then(res => {
        console.log(res);
        this.setState({ isListInEdit: false, name: "" });
    })
};


  render = () => {
    const { isListInEdit, name } = this.state;
    if (!isListInEdit) {
      return (
        <Button
          list='true'
          onClick={() => this.setState({ isListInEdit: true })}
          text='Add a new list'
        />
      );
    }
    return (
      <>
      <div className="list">
       <ListAdderTextareaWrapper className="list-title-textarea-wrapper">
          <ListTitleTextarea
             autoFocus 
             placeholder="enter list name" 
             value = {name} 
             onChange = {this.handleAddList}
             onKeyDown={this.handleKeyDown}
             onBlur={this.handleBlur}
              />
          </ListAdderTextareaWrapper>
        </div>
      </>
    );
  };
}
export default ListAdder;
