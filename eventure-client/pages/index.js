import React, {Component} from 'react';
import Register from '../components/SignUp';
import 'bootstrap/dist/css/bootstrap.css';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';

export default class App extends Component {
  render()  {
    return (
        <div className = "col-md-6">
          <h1>Welcome to Eventure!</h1>
        </div>
    );
  }
}