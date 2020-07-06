import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import imageBackGround from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

const entryFromRight = keyframes`
  to {
    opacity: 0;
    transform: translateX(50px);
  }
  from {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${entryFromRight} 0.5s;

  form {
    margin: 10px;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;

      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    display: block;

    color: #ff9000;
    text-decoration: none;

    margin-top: 24px;

    display: flex;
    align-items: center;

    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 8px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  place-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;
`;
export const Background = styled.div`
  flex: 1;
  background: url(${imageBackGround}) no-repeat center;
  background-size: cover;
`;
