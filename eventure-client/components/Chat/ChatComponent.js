import React, {Component} from 'react';
export default class ChatComponent extends React.Component{
    render() {
        const {chatId} = this.props;
        return(
            <div>
                <h3>chatId</h3>
            </div>
        );
    }
};
