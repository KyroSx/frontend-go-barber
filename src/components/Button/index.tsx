import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type Button = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Button> = ({ children, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  );
};

export default Button;
