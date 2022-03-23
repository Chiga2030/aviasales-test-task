import { render } from '@testing-library/react';
import Text, { TextVariant, TextNotation } from './Text';

describe('В компоненте Text', () => {
  test('без пропа varian, компонент не отрисуется', () => {
    const {
      container,
    } = render(<Text>sample text</Text>);

    expect(container.textContent).toBe('');
  });


  test('текст отрисовывается если выбран variant', () => {
    const {
      getByText,
    } = render(<Text variant={ TextVariant.HEADING_2 }>sample text</Text>);

    expect(getByText('sample text')).toBeInTheDocument();
  });


  test('навешен класс uppercase, при prop.notation == uppercase', () => {
    const {
      container,
    } = render(
      <Text
        variant={ TextVariant.HEADING_2 }
        notation={ TextNotation.UPPERCASE }
      >sample text</Text>);

    expect(container.querySelector('.uppercase')).toBeInTheDocument();
  });
});


describe('Для пропа variant', () => {
  test('heading 2 уровня должен быть отрисован <h2/>', () => {
    const {
      container,
    } = render(<Text variant={ TextVariant.HEADING_2 }>sample text</Text>);

    expect(container.querySelector('h2')).toBeInTheDocument();
  });
});
