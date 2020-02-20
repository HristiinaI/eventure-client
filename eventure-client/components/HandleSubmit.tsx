import * as React from "react";
import axios from "axios";



export default class HandleSubmit extends React.Component {
    state = {
      name: '',
      type: '',
      startDate: new Date(),
    }
  

    handleSubmit(event: any){
        event.preventDefault();
    
        const name = this.state.name;
        const type = this.state.type;
        const date = this.state.startDate;
      
        console.log(name);
    
        axios.post('http://localhost:8080/events', {name, type, date})
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
      };
    }