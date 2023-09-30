import React from 'react';
import { StyledButton } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      Load more
    </StyledButton>
  );
};

export default Button;
