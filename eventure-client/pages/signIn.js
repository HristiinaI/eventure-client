import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import SignIn from '../components/SignIn';

export default class SignInPage extends Component {
  render()  {
    return (
        <div className = "col-md-6">
          <SignIn />
        </div>
    );
  }
}