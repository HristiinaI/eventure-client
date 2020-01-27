import React, {useState} from "react";
import axios from "axios";


export default class TestPage extends React.Component {
    componentDidMount = async () => {
        const name = 'Hack TUES 6';
        const type = 1;
        
        axios.post('http://localhost:8080/events', {
            name,
            type
        });
    }
    
    
    render() {
        return <div>ASD</div>
    }
}