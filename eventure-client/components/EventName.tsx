import * as React from "react";
import axios from "axios";

import { Button} from "@material-ui/core";
import Input from "../components/Input";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}


class EventName extends React.Component<{}, {}> {
  state: { name: string; type: string; };

    constructor(props: {}){
        super(props);

        this.state = {
            name: '',
            type: '',
          }
          this.onNameChanged = this.onNameChanged.bind(this);
          this.onTypeChanged = this.onTypeChanged.bind(this);
    };

    onNameChanged(event: any){
        this.setState({name: event.target.value});
    }
    onTypeChanged(event: any){
        this.setState({type: event.target.value});
    }

    handleSubmit(event: any){
        event.preventDefault();
    
        const name = this.state.name;
        const type = this.state.type;
        console.log(name);
    
        axios.post('http://localhost:8080/events', { name, type})
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
      };

      handleClearForm(e: any) {
        e.preventDefault();
        this.setState({
            name: '',
            types: '',
        });
      }

      render() {
        return (
          <form className="container-fluid" onSubmit={this.handleSubmit}>
            <TextField 
            id="outlined-basic" 
            label="Outlined" 
            variant="outlined" 
            value = {this.state.name}
            onChange = {this.onNameChanged}
            />
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
            <Button>Submit</Button>
          
          </form>
        );
      }
    }
    
    const buttonStyle = {
      margin: "10px 10px 10px 10px"
    };
    
    export default EventName;
    

