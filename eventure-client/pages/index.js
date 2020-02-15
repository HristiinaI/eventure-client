import React, {Component} from 'react';
import Register from '../components/Register';
import 'bootstrap/dist/css/bootstrap.css';

export default class App extends Component {
  render()  {
    return (
        <div className = "col-md-6">
          <Register />
        </div>
    );
  }
}