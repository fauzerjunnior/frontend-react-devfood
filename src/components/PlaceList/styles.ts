import styled from 'styled-components';

export const PlaceListContainer = styled.div`
  margin-top: 40px;
  display: flex;
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

  img {
    width: 74px;
    height: 74px;
    border-radius: 50%;
    margin-right: 25px;
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
