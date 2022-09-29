import AppContext from 'AppContext';
import React, { FC, ReactElement, useContext } from 'react';
import prices from '../../prices';

export interface IpriceItem {
  cost: {
    currency: string;
    value: number;
  };
  pattern: number[];
}
const BetDisplay: FC = (): ReactElement => {
  const { selectedNumbers, selectedStars } = useContext(AppContext);
  const priceItem: IpriceItem | undefined = prices.multiples.find(
    ({ pattern }: IpriceItem) => pattern[0] === selectedNumbers.length
      && pattern[1] === selectedStars.length
  );
  console.log(priceItem);
  let display = '0€';
  if (priceItem) {
    const { cost: { value, currency } } = priceItem;
    display = new Intl.NumberFormat('fr-FR', { style: 'currency', currency }).format(value / 100);
  }

  return (
    <span>
      {`Mise totale ${display}`}
    </span>
  );
};

export default BetDisplay;
