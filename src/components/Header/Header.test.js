import {
  render,
} from '@testing-library/react';

import Header from './Header';


describe('В компоненте Header', () => {
  test('должен быть логотип в виде картинки', () => {
    const { getByAltText } = render(<Header />);
    expect(getByAltText('logo')).toBeInTheDocument();
  });
});
