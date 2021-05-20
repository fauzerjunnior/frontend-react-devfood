import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #f0f0f0;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 2px solid #f0f0f0;
  color: #666660;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  ${(props: ContainerProps) =>
    props.isErrored &&
    css`
      border-color: #ff1728;
    `}
  ${(props: ContainerProps) =>
    props.isFocused &&
    css`
      border-color: #ff1728;
      color: #ff1728;
    `}
  ${(props: ContainerProps) =>
    props.isFilled &&
    css`
      color: #ff1728;
    `}
  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #333;
    &::placeholder {
      color: #666660;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff !important;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
