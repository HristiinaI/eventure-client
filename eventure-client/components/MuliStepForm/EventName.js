import React,{Component} from 'react';

class EventName extends React.Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render(){
        const {handleChange, eventName} = this.props;
        return(
            <>
            <h2>Enter your event name:</h2>
                <label>
                    <input 
                        type="text"
                        name="eventName"
                        value={eventName}
                        placeholder="Event Name"
                        onChange={handleChange('eventName')}
                    />
                </label>
                <button className="Next" onClick={this.continue}>
                    Next »
                </button>
            </>

        );
    }
}

export default EventName;