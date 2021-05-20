import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import backgroundImage from '../../assets/bg-login.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

  img {
    width: 180px;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  flex: 1;
`;

const AppearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  
  to { 
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${AppearFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    span {
      color: #ea1d2c;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#ea1d2c')};
      }
    }
  }

  > a {
    color: #ea1d2c;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ea1d2c')};
    }
  }
`;
