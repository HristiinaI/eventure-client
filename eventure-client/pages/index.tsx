import * as React from "react";
import './App.css';
import Main from '../components/MuliStepForm/Main';

export default class Home extends React.Component {
  
  render(){
    return (
      <div className="App">
        <div className="Content">
          <Main />
        </div>
      </div>
    );
  }
}

