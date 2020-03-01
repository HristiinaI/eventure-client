import React,{Component} from 'react';



class EventType extends React.Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {handleChange, type} = this.props;
        return(
            <>
            <h2>Enter your event type:</h2>
            <label>
              <input 
                type="radio" 
                value="public" 
                checked = {type === 'public'}
                onChange = {handleChange('type')}
                />
                Public
              </label>
           <label>
            <input 
                type="radio" 
                value="private" 
                checked={type === 'private'} 
                onChange={handleChange('type')}
                />
                Private
           </label>
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

export default EventType;