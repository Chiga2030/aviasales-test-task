import { render } from '@testing-library/react';
import Container from './Container';


describe('В компоненте Container', () => {
  test('должен присутствовать передаваемый элемент', () => {
    const {
      container,
      getByText,
    } = render(<Container><p>first</p></Container>);

    expect(container.querySelectorAll('p')).toHaveLength(1);
    expect(getByText('first')).toBeInTheDocument();
  });


  test('должны отображаться более одного переданного компоннта', () => {
    const {
      container,
      getByText,
    } = render(<Container>
      <p>first</p>
      <p>second</p>
      just text
    </Container>);

    expect(container.querySelectorAll('p')).toHaveLength(2);
    expect(getByText('first')).toBeInTheDocument();
    expect(getByText('second')).toBeInTheDocument();
    expect(getByText('just text')).toBeInTheDocument();
  });


  test('должено быть пусто, если ни чего не передано', () => {
    const { container } = render(<Container></Container>);

    expect(container.querySelector('.container')).toBeEmptyDOMElement();
  });
});
