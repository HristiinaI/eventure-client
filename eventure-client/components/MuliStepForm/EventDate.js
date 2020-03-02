import React,{Component} from 'react';
import DatePicker from 'react-datepicker';

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
                onChange={ handleDateChange("startDate") }
                name="date"
                dateFormat="MM/dd/yyyy"
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