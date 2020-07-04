import React from 'react';

import { Container } from './styles';

interface InputProps {
  title: string;
  className?: string;
}

const Tooltip: React.FC<InputProps> = ({ title, className, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
