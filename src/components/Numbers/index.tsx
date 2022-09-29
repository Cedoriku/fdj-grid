import AppContext from 'AppContext';
import React, { ReactElement, useContext } from 'react';
import { Button, NumbersBox } from './style';

const Numbers: React.FC = (): ReactElement => {
  const { selectedNumbers, onNumberSelect } = useContext(AppContext);
  const buttons = [];
  for (let i = 1; i <= 50; i++) {
    buttons.push(i);
  }

  return (
    <NumbersBox>
      {buttons.map((i: number) => (
        <Button
          key={i}
          onClick={() => onNumberSelect(i)}
          className={selectedNumbers.includes(i) ? 'selected' : ''}
        >
          {i}
        </Button>
      ))}
    </NumbersBox>
  );
};

export default Numbers;
