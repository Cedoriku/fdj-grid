import styled from 'styled-components';
import whiteStar from '../../svg/star-white.svg';
import yellowStar from '../../svg/star-yellow.svg';

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex: 0 0 180px;
  max-height: 290px;
  margin-top: -8px;
`;

export interface IButton {
  selected: boolean
}

const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  font-size: 16px;
  font-weight: 700;
  height: 60px;
  width: 60px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: 0;
  border: 0;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  color: #eebb05;
  cursor: pointer;
  background-color: transparent;
  margin: 10px 0;
  padding-top: 2px;
  padding-right: 1px;
  span {
    position: absolute;
    z-index: 1;
    left: 49%;
    top: 47%;
    transform: translate(-50%,-34%);
    color: inherit;
    font-weight: 700;
  }
  &:before {
    top: 0;
    left: 0;
    position: absolute;
    display: block;
    opacity: 1;
    content: "";
    width: 100%;
    height: 100%;
    background: url(${whiteStar}) transparent no-repeat center 0;
  }
  &.selected {
    position: relative;
    color: #fff;
    &:before {
      background: url(${yellowStar}) transparent no-repeat center 0;
    }
  }
`;

export {
  Button, Box
};
