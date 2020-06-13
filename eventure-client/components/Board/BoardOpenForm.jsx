import React from "react";
import Icon from "@material-ui/core/Icon";
import styled from "styled-components";


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
  color:"inherit";
  background-color: "inherit";
`;

const BoardOpenForm = ({children, onClick }) => {
  return (
    <OpenFormButton onClick={onClick}>
      <p style={{ flexShrink: 0 }}>{children}</p>
    </OpenFormButton>
  );
};

export default BoardOpenForm;