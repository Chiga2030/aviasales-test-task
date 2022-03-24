import { render } from '@testing-library/react';
import SideBar from './SideBar';

describe('В сайдбаре должен быть', () => {
  test('загловок "Количество пересадок"', () => {
    const { getByText } = render(<SideBar />);

    expect(getByText('Количество пересадок')).toBeInTheDocument();
  });
});


describe('В сайдбаре должен быть', () => {
  test('фильтр "Все"', () => {
    const { getByText } = render(<SideBar />);

    expect(getByText('Все')).toBeInTheDocument();
  });


  test('фильтр "Без пересадок"', () => {
    const { getByText } = render(<SideBar />);

    expect(getByText('Без пересадок')).toBeInTheDocument();
  });


  test('фильтр "1 пересадка"', () => {
    const { getByText } = render(<SideBar />);

    expect(getByText('1 пересадка')).toBeInTheDocument();
  });


  test('фильтр "2 пересадки"', () => {
    const { getByText } = render(<SideBar />);

    expect(getByText('2 пересадки')).toBeInTheDocument();
  });


  test('фильтр "3 пересадки"', () => {
    const { getByText } = render(<SideBar />);

    expect(getByText('3 пересадки')).toBeInTheDocument();
  });
});
