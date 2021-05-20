import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  padding: 8px 0;
  background: #ea1d2c;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media (max-width: 1100px) {
    margin: 0 50px;
  }

  div + div {
    margin-left: auto;
  }

  > img {
    height: 80px;
  }

  button {
    margin-left: 20px;
    background: transparent;
    width: 50px;
    height: 50px;
    border: 3px solid ${shade(0.1, '#ea1d2c')};
    border-radius: 50%;

    svg {
      color: #f0f0f0;
      width: 20px;
      height: 20px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  @media (max-width: 500px) {
    display: none;
  }

  a {
    text-decoration: none;
    color: #ea1d2c;
    transition: 0.2s opacity;

    &:hover {
      opacity: 0.8;
    }
  }

  img {
    width: 56px;
    height: 56px;
    border: 3px solid #f0f0f0;
    border-radius: 50%;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #f0f0f0;
    }

    strong {
      font-size: 16px;
      color: #ddd;
    }
  }
`;
