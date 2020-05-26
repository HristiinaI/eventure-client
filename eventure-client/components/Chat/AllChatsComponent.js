import React, { useState } from 'react';
import Router from 'next/router';
import Home from '../../pages/home';
import 'react-chat-elements/dist/main.css';
import { ChatList } from 'react-chat-elements';
import ChatComponent from "./ChatComponent";
import { Redirect } from "react-router-dom";

class AllChatsComponent extends React.Component{
    handleClick = chat => e => {
        // e.preventDefault();
        Router.push({
            pathname: '/chat/chatid',
            query: {id: `${chat}`}
        });
    }
    render(){

        const {allChats} = this.props;
        console.log(allChats);
        if(allChats.length){
            return(
                <>
                    <Home />
                    {allChats.map(chat => {
                        return (
                                    <ChatList
                                        onClick={this.handleClick(chat)}
                                       // onClick = {<Redirect to={"/chat/[chatid]"}/>}
                                        key = {chat}
                                        className='chat-list'
                                        dataSource={[
                                            {
                                                avatar: 'https://facebook.github.io/react/img/logo.svg',
                                                alt: 'Reactjs',
                                                title: chat,
                                                subtitle: 'test',
                                                unread: 0,
                                            }
                                        ]}
                                    />

                        );

                    })}

                </>
            );
        }else{
            return(
                <>
                    Loading...
                </>
            );
        }
    }
}

export default AllChatsComponent;
