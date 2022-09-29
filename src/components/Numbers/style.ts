import styled from 'styled-components';

const NumbersBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px;
`;

export interface IButton {
  selected: boolean
}

const Button = styled.button`
  position: relative;
  display: inline-block;
  padding: 0;
  font-size: 16px;
  font-weight: 700;
  height: 40px;
  width: 40px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: 0;
  border: 0;
  -webkit-tap-highlight-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  background: #fff;
  color: #001367;
  height: 35px;
  width: 35px;
  margin: 7.5px;

  &.selected {
    background: #001367;
    color: #fff;
  }
`;

export {
  Button, NumbersBox
};
