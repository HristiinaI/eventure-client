import React from "react";
import Icon from "@material-ui/core/Icon";
import BoardButton from "../Board/BoardButton";
import { connect } from "react-redux";
import styled from "styled-components";
import BoardForm from "../Board/BoardForm";
import BoardOpenForm from "../Board/BoardOpenForm";
import axios from "axios";

class CardCreate extends React.PureComponent {
  state = {
    formOpen: false,
    text: ""
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

    axios.post('http://localhost:8080/cards', {content, status, icon})
        .then(res => {
            console.log(res);
            this.props.onCreate();
        })
  };

  renderOpenForm = () => {
    const buttonText =  "Add another card";
    const buttonTextOpacity = 0.5;
    const buttonTextColor ="inherit";
    const buttonTextBackground ="inherit";

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
      opacity: ${buttonTextOpacity};
      color: ${buttonTextColor};
      background-color: ${buttonTextBackground};
    `;

    return (
      <OpenFormButton onClick={this.openForm}>
        {/* <Icon>add</Icon> */}
        <p style={{ flexShrink: 0 }}>{buttonText}</p>
      </OpenFormButton>
    );
  };

  render() {
    const { text } = this.state;
    return this.state.formOpen ? (
      <BoardForm
        text={text}
        onChange={this.handleInputChange}
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
  }
}

export default CardCreate;