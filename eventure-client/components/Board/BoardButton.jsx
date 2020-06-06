import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { statuses } from "../../data/index";

const StyledButton = styled(Button)`
  && {
    color: white;
    background: #5aac44;
  }
`;

const BoardButton = ({ children, onClick}) => {
  return (
    <StyledButton variant="contained" onMouseDown={onClick}>
      {children}
    </StyledButton>
  );

};

export default BoardButton;