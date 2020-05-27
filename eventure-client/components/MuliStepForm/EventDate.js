import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class EventDate extends React.Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        const {handleDateChange, startDate} = this.props;
        return(
            <>
            <label>Select date:</label>
            <DatePicker
                selected={ startDate }
                onChange={ handleDateChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                name="startDate"
                dateFormat="MMMM d, yyyy h:mm aa"
            />
           <button className="Back" onClick={this.back}>
                « Back
            </button>
            <button className="Next" onClick={this.continue}>
                Next »
            </button>
            </>

        );
    }
}

export default EventDate;
