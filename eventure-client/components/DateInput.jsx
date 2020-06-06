import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React from 'react';

class DateInput extends React.Component{

    render(){
        const {handleDateChange, date} = this.props;
        return(
            <DatePicker
                defaultValue = {date}
                onChange={ handleDateChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                name="date"
                dateFormat="MMMM d, yyyy h:mm aa"
            />
        )
    }

}

export default DateInput;