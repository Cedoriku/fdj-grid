import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

const {
  getByText, getAllByText, getByLabelText, findAllByText, getAllByRole
} = screen;
const {
  click
} = fireEvent;

describe('Test App display', () => {
  beforeEach(async () => {
    render(<App />);
  });
  it('displays the title', () => {
    const buttons = getAllByRole('button');
    expect(getByText('Grille 1')).toBeInTheDocument();
  });
  it('displays all buttons', () => {
    const buttons = getAllByRole('button');
    expect(buttons).toHaveLength(62);
  });
  it('Should add "selected" class on button click', async () => {
    const button = getByText('40');
    click(button);
    expect(button).toHaveClass('selected');
  });
  it('Should add "selected" class on star button click', async () => {
    const button = getAllByText('9')[1].closest('button');
    click(button as Element);
    expect(button).toHaveClass('selected');
  });
  it('Should display the right bet amount', async () => {
    const button = getByText('40');
    click(getByText('40'));
    click(getByText('41'));
    click(getByText('43'));
    click(getByText('27'));
    click(getByText('35'));
    click(getByText('16'));
    click(getAllByText('5')[1]);
    click(getAllByText('8')[1]);
    click(getAllByText('10')[1]);
    expect(getByText('Mise totale 45,00 €')).toBeInTheDocument();
  });
});
