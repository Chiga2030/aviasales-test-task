import {
  render,
} from '@testing-library/react';

import App from './App';


describe('В компоненте App', () => {
  test('присутствует header', () => {
    const { container } = render(<App />);
    expect(container.querySelector('header')).toBeInTheDocument();
  });


  test('присутствует sidebar', () => {
    const { container } = render(<App />);
    expect(container.querySelector('aside')).toBeInTheDocument();
  });


  test('присутствует main', () => {
    const { container } = render(<App />);
    expect(container.querySelector('main')).toBeInTheDocument();
  });
});
