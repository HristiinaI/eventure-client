import React, {Component} from 'react';
import axios from "axios";
import DatePicker from 'react-datepicker';
import moment from 'moment';
 
import 'react-datepicker/dist/react-datepicker.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


export default class Home extends React.Component {
  state = {
    name: '',
    type: '',
    startDate: new Date(),
  }
  onNameChanged = event =>{
    this.setState({name: event.target.value});

  }
  onTypeChanged = event =>{
    this.setState({type: event.target.value});
  }
  onDateChanged = date =>{
    this.setState({startDate: date});
  }

  
  handleSubmit = event =>{
    event.preventDefault();

    const name = this.state.name;
    const type = this.state.type;
    const date = this.state.startDate;
  
    console.log(name);

    axios.post('http://localhost:8080/events', { name, type, date})
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
        <div class="form-group">
          <label>Select date:</label>
          <DatePicker
            selected={ this.state.startDate }
            onChange={ this.onDateChanged }
            name="startDate"
            dateFormat="MM/dd/yyyy"
          />
        </div>
        <button type="submit" value="Submit"></button>
      </form>
    </div>
    );
  }
}