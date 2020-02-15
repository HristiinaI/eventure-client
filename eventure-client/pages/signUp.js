import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import SignUp from '../components/SignUp';

export default class App extends Component {
  render()  {
    return (
        <div className = "col-md-6">
          <SignUp />
        </div>
    );
  }
}