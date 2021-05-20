import styled from 'styled-components';
import { shade } from 'polished';

interface ActionCardProps {
  backgroundColor: string;
}

export const Container = styled.div`
  min-height: 700px;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
`;

export const PrimaryContent = styled.div`
  background: #f7f7f7;
  height: 400px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

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

export const SecondaryContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  position: relative;
  overflow: hidden;
  background: #ea1d2c;
  color: #f7f7f7;
  width: 420px;
  padding: 20px 20px;
  border-radius: 15px;
  min-height: 220px;
  margin: -100px 20px 100px;
  transition: 0.3s opacity;

  + div {
    background: #b6d048;
  }

  h1 {
    font-size: 40px;
    letter-spacing: 1px;
    font-weight: 700;
    font-family: 'Average Sans';
  }

  img {
    position: absolute;
    left: auto;
    top: auto;
    bottom: -10px;
    right: 10px;
    width: 240px;
    object-fit: cover;

    transition: 0.5s width;
  }

  &:hover {
    opacity: 0.8;
    cursor: pointer;

    img {
      width: 265px;
    }
  }
`;

export const ActionCard = styled.div<ActionCardProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 140px;
  padding: 8px 10px;

  background: ${(props) => shade(0.15, props.backgroundColor)};
  border-radius: 12px;

  font-size: 15px;
  font-weight: 700;
  font-family: 'Average Sans';
  color: #f7f7f7;
  letter-spacing: 0.6px;
`;

export const ThirdContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 75px;

  h1 {
    font-size: 32px;
    font-family: 'Average Sans';
    font-weight: 700;
    letter-spacing: 0.6px;
  }
`;

export const TopBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ViewMoreLink = styled.div`
  font-family: 'Average Sans';
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.6px;
  color: #ea1d2c;
  transition: 0.2s color;

  &:hover {
    cursor: pointer;
    color: ${shade(0.2, '#ea1d2c')};
  }
`;
