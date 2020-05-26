import React from "react";
import Icon from "@material-ui/core/Icon";
import styled from "styled-components";

const BoardOpenForm = ({children, onClick }) => {
  const buttonTextOpacity =  0.5;
  const buttonTextColor =  "inherit";
  const buttonTextBackground = "inherit";

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
    <OpenFormButton onClick={onClick}>
      {/* <Icon>add</Icon> */}
      <p style={{ flexShrink: 0 }}>{children}</p>
    </OpenFormButton>
  );
};

export default BoardOpenForm;