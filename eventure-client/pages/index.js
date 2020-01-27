import React, {Component} from 'react';
// import fetch from 'isomorphic-unfetch';
// import Form from '../components/form.js';
import axios from "axios";
// import { Formik, Form, Field} from "formik";


export default class Home extends React.Component {
  state = {
    name: '',
  }
  handleChange = event =>{
    this.setState({value: event.target.value});
  }
  
  handleSubmit = event =>{
    event.preventDefault();

    const eventName ={
      name: this.state.name
    };

    axios.post('http://localhost:8080/events', { eventName })
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
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <button type="submit" value="Submit"></button>
      </form>
    </div>
    );
  }
}