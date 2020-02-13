import React, {Component} from 'react';
import { render } from 'react-dom';
import Login from '../components/Login';

export default class App extends Component {
  render()  {
    return (
        <div className = "col-md-6">
          <Login />
        </div>
    );
  }
}