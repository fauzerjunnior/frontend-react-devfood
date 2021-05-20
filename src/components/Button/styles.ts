import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ea1d2c;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  height: 56px;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, '#ea1d2c')};
  }
`;
