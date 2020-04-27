import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ListAdder from '../../../components/Kanaban/ListAdder';
import ListTitleTextarea from '../../../components/Kanaban/ListTitleTextarea';
import CardTextarea from '../../../components/Kanaban/CardTextarea';
import ListTitleButton from '../../../components/Kanaban/ListTitleButton';
import Button from '../../../components/Kanaban/Button';

class Board extends React.Component{
  render(){
    return(
      <>
      <ListAdder></ListAdder>
      </>
    );
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