import React, {Component} from 'react';
// import fetch from 'isomorphic-unfetch';
// import Form from '../components/form.js';
import axios from "axios";
import { timingSafeEqual } from 'crypto';
// import { Formik, Form, Field} from "formik";


export default class Home extends React.Component {
  state = {
    name: '',
    type: '',
  }
  onNameChanged = event =>{
    this.setState({name: event.target.value});

  }

  onTypeChanged = event =>{
    this.setState({type: event.target.value});
  }

  
  handleSubmit = event =>{
    event.preventDefault();

    const name = this.state.name;
    const type = this.state.type;

    console.log(name);

    axios.post('http://localhost:8080/events', { name, type })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  };
  
  render() {
    return (
    
    
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Event Name:
          <input type="text" name="name" value = {this.state.name} 
            onChange={this.onNameChanged} />
        </label>
        <div className="radio">
          <label>
            <input 
              type="radio" 
              value="public" 
              checked={this.state.type === 'public'}
              onChange={this.onTypeChanged} />
              Public
          </label>
        </div>
        <div className="radio">
          <label>
            <input 
              type="radio" 
              value="private" 
              checked={this.state.type === 'private'} 
              onChange={this.onTypeChanged}/>
              Private
          </label>
        </div>
        <button type="submit" value="Submit"></button>
      </form>
    </div>
    );
  }
}