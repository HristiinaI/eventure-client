import * as React from 'react';

class MainState extends React.Component{

    constructor(props: any){
        super(props);

        this.state = {
            name: '',
            type: '',
            date: new Date,
        }
    }
}