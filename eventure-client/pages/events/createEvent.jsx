import * as React from "react";
import '../../styles/App.css';
import Main from '../../components/MuliStepForm/Main';

export default class CreateEvent extends React.Component {
  
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

