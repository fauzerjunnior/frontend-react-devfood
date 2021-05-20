import styled from 'styled-components';
import { shade } from 'polished';

interface ActionCardProps {
  backgroundColor: string;
}

export const Container = styled.div`
  min-height: 95vh;
  height: auto;
  background: #f7f7f7;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
`;

export const PrimaryContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 75px;

  h1 {
    font-size: 44px;
    font-family: 'Average Sans';
    font-weight: 700;
    margin-top: 110px;
  }

  h3 {
    font-size: 22px;
    margin-top: 6px;
    font-weight: 400;
    font-family: 'Average Sans';
    color: ${shade(-1.8, '#333')};
  }
`;
