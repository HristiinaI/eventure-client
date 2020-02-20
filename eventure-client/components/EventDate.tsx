import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function EventDate() {




  const [selectedStartDate, setSelectedStartDate] = React.useState<Date | null>(
    new Date('2020-08-18T21:11:54'),
  );

  const handleStartDateChange = (date: Date | null) => {
    setSelectedStartDate(date);
  };

  const [selectedEndDate, setSelectedEndDate] = React.useState<Date | null>(
    new Date('2020-08-18T21:11:54'),
  );

  const handleEndDateChange = (date: Date | null) => {
    setSelectedEndDate(date);
  };


      return (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Start date"
                value={selectedStartDate}
                onChange={handleStartDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
                />
                <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="End date"
                value={selectedEndDate}
                onChange={handleEndDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
                />
          </Grid>
          </MuiPickersUtilsProvider>

          
          
      );
}