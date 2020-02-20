import * as React from "react";

import { Button} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


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

      render() {
        return (
          <form className="container-fluid">
            <TextField 
              id="outlined-basic" 
              label="Enter event name" 
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
          </form>
        );
      }
    }
    
    export default EventName;
    

