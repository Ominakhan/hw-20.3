import React from "react";
import styled from "styled-components";

const Button = ({
  children,
  variant = "contained",
  borderStyle = "rounded",
  ...props
}) => {
  return (
    <StyledButton {...props} borderStyle={borderStyle} variant={variant}>
      {children}
    </StyledButton>
  );
};

export default Button;

const getBackgroundColor = (props) => {
  return props.variant === "contained" ? "#8a2b06" : "#fff";
};

const getBorder = (props) => {
  return props.variant === "contained" ? "none" : "1px solid #8a2b06";
};

const getColor = (props) => {
  return props.variant === "contained" ? "#fff" : " #8a2b06";
};

const getBorderRadius = (props) => {
  return props.borderStyle === "rounded" ? "20px" : " 6px";
};

const getPadding = (props) => {
  return props.borderStyle === "rounded" ? "10px 32px" : "8px 14px";
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.3125rem;
  background: ${getBackgroundColor};
  color: ${getColor};
  border-radius: ${getBorderRadius};
  padding: ${getPadding};
  font-weight: 600;
  line-height: 1.5rem;
  border: ${getBorder};
  cursor: pointer;

  :hover {
    background: #7e2a0a;
    color: #fff;
    path {
      stroke: #fff;
    }
  }

  :active {
    background: #993108;
  }
`;
