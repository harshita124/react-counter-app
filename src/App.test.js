import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/counter app/i);
  expect(linkElement).toBeInTheDocument();
});

test('render an increment button',() =>{
  render(<App/>);
  const buttonElement = screen.getByText(/increment/i);
  expect(buttonElement).toBeInTheDocument();
});

test('render increment value', ()=>{
  render(<App/>);
  const linkElement = screen.getByText(/0/i);
  expect(linkElement).toBeInTheDocument();
});
