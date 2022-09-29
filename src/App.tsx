import React, {
  Dispatch, SetStateAction, useCallback, useMemo, useState
} from 'react';
import {
  BetBox, Container, GridContainer, StarsBox
} from 'components/styled/main';
import AppContext from 'AppContext';
import { BetDisplay, Numbers, Stars } from 'components';

const App = () => {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [selectedStars, setSelectedStars] = useState<number[]>([]);
  const updateList = (list: number[], item: number, setter: Dispatch<SetStateAction<number[]>>) => {
    if (list.includes(item)) {
      list.splice(list.indexOf(item), 1);
      setter([...list]);
    } else {
      list.push(item);
      setter([...list]);
    }
  };
  const onNumberSelect = useCallback(
    (number: number) => updateList(selectedNumbers, number, setSelectedNumbers),
    [selectedNumbers]
  );
  const onStarSelect = useCallback(
    (number: number) => updateList(selectedStars, number, setSelectedStars),
    [selectedStars]
  );
  const context = useMemo(() => ({
    selectedNumbers,
    selectedStars,
    onNumberSelect,
    onStarSelect
  }), [selectedNumbers, selectedStars]);

  return (
    <AppContext.Provider value={context}>
      <Container>
        <div className="first-row">
          <h2>Grille 1</h2>
          <BetBox><BetDisplay /></BetBox>
        </div>
        <GridContainer>
          <Numbers />
          <Stars />
        </GridContainer>
      </Container>
    </AppContext.Provider>
  );
};

export default App;
