import React, { Component } from 'react';
import axios from 'axios';
import '../Kanaban/ListAdder.css';

class ListAdder extends Component{
  constructor() {
    super();
    this.state = {
      name: ""
    }
  }
  handleAddList = name => {
    this.setState({ name: name.target.value });
  }
  handleSubmit = () => {
    const { name } = this.state;
    axios
      .post('http://localhost:8080/list', {name})
      .then(({ data }) => console.log(data));
  };
  render = () => {
    return (
      <>
       <div classNamae="addList">
        <div className="header">
          <form onSubmit={this.handleSubmit} >
            <input 
              placeholder="enter list name"
              onChange = {this.handleAddInput}>
            </input>
            <button type="submit">add</button>
          </form>
        </div>
      </div>
      </>
    );
  };
}
export default ListAdder;
