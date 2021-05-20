import styled from 'styled-components';

export const PlaceListContainer = styled.div`
  margin-top: 40px;
  display: flex;

  @media (max-width: 800px) {
    display: block;
    justify-content: space-around;
    width: 500px;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  border: 1px solid #f1f1f1;
  margin: 10px;
  width: 360px;
  padding: 30px;
  border-radius: 14px;
  transition: 0.3s border;

  @media (max-width: 1100px) {
    width: auto;
  }

  @media (max-width: 500px) {
    padding: 25px 15px;
  }

  img {
    width: 74px;
    height: 74px;
    border-radius: 50%;
    margin-right: 25px;

    @media (max-width: 800px) {
      margin-right: 60px;
    }

    @media (max-width: 500px) {
      margin-right: 20px;
    }
  }

  &:hover {
    cursor: pointer;
    border: 1px solid #ddd;
  }
`;

export const Info = styled.div`
  border-left: 1px solid #f1f1f1;
  padding-left: 25px;

  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  @media (max-width: 800px) {
    padding-left: 60px;
  }

  @media (max-width: 500px) {
    padding-left: 20px;
  }

  h3 {
    font-size: 20px;
    font-family: 'Average Sans';
    font-weight: 700;
  }

  span,
  p {
    font-family: 'Average Sans';
    font-size: 15px;
    font-weight: 300;
    color: #666;
    letter-spacing: 0.6px;
  }
`;
