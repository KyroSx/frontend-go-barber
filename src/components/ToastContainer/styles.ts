import styled, { css } from 'styled-components';

interface ToastProps {
  type?: 'info' | 'error' | 'success';
  hasDescription: boolean;
}

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 30px;
  overflow: hidden;
`;

const toastTypeVariations = {
  info: css`
    color: #ebf8ff;
    background-color: #3172b7;
  `,
  error: css`
    color: #fddede;
    background-color: #c53030;
  `,
  success: css`
    color: #e6fffa;
    background-color: #2e656a;
  `,
};

export const Toast = styled.div<ToastProps>`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;

  & + div {
    margin-top: 8px;
  }

  ${props => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;
  }

  strong {
    font-weight: bold;
  }

  p {
    margin-top: 4px;
    font-size: 14px;
    line-height: 20px;
    opacity: 0.8;
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${props =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
