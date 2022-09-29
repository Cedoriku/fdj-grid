import React from 'react';

export interface IAppContext {
  selectedNumbers: number[];
  selectedStars: number[];
  onNumberSelect: (number: number) => { /* do something */ };
  onStarSelect: (number: number) => { /* do something */ };
}

const AppContext = React.createContext<IAppContext>({
  selectedNumbers: [],
  selectedStars: [],
  onNumberSelect: (number: number) => {
    /* do something */
  },
  onStarSelect: (number: number) => {
    /* do something */
  }
});

export default AppContext;
