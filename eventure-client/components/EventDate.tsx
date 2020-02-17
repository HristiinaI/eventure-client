import * as React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Button } from "@material-ui/core";

class EventDate extends React.Component {

  state = {
    startDate: new Date(),
  }
  onDateChanged(date: any){
    this.setState({startDate: date});
  }

  handleSubmit(event: any){
    event.preventDefault();

    const date = this.state.startDate;

    axios.post('http://localhost:8080/events', {date})
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  };

    render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Start date"
              value={this.state.startDate}
              onChange={this.onDateChanged}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
              />
        </Grid>
        </MuiPickersUtilsProvider>
        
        <Button>Submit</Button>
    </form>
    );
        }
}

const buttonStyle = {
      margin: "10px 10px 10px 10px"
    };

export default EventDate;