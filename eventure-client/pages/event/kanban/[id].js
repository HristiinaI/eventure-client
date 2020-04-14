import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ListAdder from '../../../components/Kanaban/ListAdder';



class Board extends React.Component{
    
    render(){
        return(
            <>
            {this.props.board.name}
            <ListAdder 
            style={{height: 'initial'}}
            />
            </>
        )
    }
}

Board.getInitialProps = async function (context) {
    const { id } = context.query;
    let board = {};
  
    await axios.get(`http://localhost:8080/board/${id}`)
    .then(res => {
        board = res.data;
  
    })
    .catch(function (error) {
        console.log(error);
    })
  
    return {board};
  }
export default Board;