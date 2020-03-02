import React,{Component} from 'react';

class EventLocation extends React.Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    submiting = e => {
        e.preventDefault();
        this.props.handleSubmit();
    }
   
    render(){
        const {handleChange, location} = this.props;
        return(
            <>
          <h2>Enter your event location:</h2>
                <label>
                    <input 
                        type="text"
                        name="location"
                        value={location}
                        placeholder="Location"
                        onChange={handleChange('location')}
                    />
                </label>
           <button className="Back" onClick={this.back}>
                « Back
            </button>
            {/* <button className="Next" onClick={this.continue}>
                    Next »
            </button> */}
            <button className="Next" onClick={this.submiting}>
                    Submit
            </button>
           
            </>

        );
    }
}

export default EventLocation;