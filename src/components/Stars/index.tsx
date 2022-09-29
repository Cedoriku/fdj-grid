import AppContext from 'AppContext';
import React, { useContext } from 'react';
import { Box, Button } from './style';

const Stars = () => {
  const { selectedStars, onStarSelect } = useContext(AppContext);
  const buttons = [];
  for (let i = 1; i <= 12; i++) {
    buttons.push(i);
  }

  return (
    <Box>
      {buttons.map((i: number) => (
        <Button
          key={i}
          onClick={() => onStarSelect(i)}
          className={selectedStars.includes(i) ? 'selected' : ''}
        >
          <span>{i}</span>
        </Button>
      ))}
    </Box>
  );
};

export default Stars;
