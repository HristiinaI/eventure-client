import React from "react";
import BoardButton from "../Board/BoardButton";
import styled from "styled-components";
import BoardForm from "../Board/BoardForm";
import BoardOpenForm from "../Board/BoardOpenForm";
import axios from "axios";
import { statuses } from "../../data/index";


const OpenFormButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  height: 36px;
  margin-left: 8px;
  width: 300px;
  padding-left: 10px;
  padding-right: 10px;
  opacity: 0.5;
  color: "inherit";
  background-color:"inherit";
  `;

class CardCreate extends React.PureComponent {
  state = {
    formOpen: false,
    text: "",
    // status: ""
  };

  openForm = () => {
    this.setState({
      formOpen: true
    });
  };

  closeForm = e => {
    this.setState({
      formOpen: false
    });
  };

  handleInputChange = e => {
    this.setState({
      text: e.target.value
    });
  };


  handleAddCard = () => {
    const content = this.state.text;
    const status = "open";
    const icon = "⭕️";
    const boardId = this.props.boardId;

    axios.post('http://localhost:8080/cards', {content, boardId, icon, status})
        .then(res => {
            console.log(res);
            this.props.onCreate();
        })
  };

  renderOpenForm = () => {
    const buttonText =  "Add another card";

    return (
      <OpenFormButton onClick={this.openForm}>
        <p style={{ flexShrink: 0 }}>{buttonText}</p>
      </OpenFormButton>
    );
  };

  render() {
    const { text } = this.state;
    const status = this.props.status;
  
    if(status === "open"){
      return this.state.formOpen ? (
        <BoardForm
          text={text}
          onChange={this.handleInputChange}localeCompare
          closeForm={this.closeForm}
        >
          <BoardButton onClick={this.handleAddCard}>
            {"Add Card"}
          </BoardButton>
        </BoardForm>
      ) : (
        <BoardOpenForm onClick={this.openForm}>
          {"Add another card"}
        </BoardOpenForm>
      );
    }else{
      return null;
    }
  }
}

export default CardCreate;