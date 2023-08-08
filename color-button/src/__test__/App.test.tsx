import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe('버튼 테스트', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('버튼의 초기색상은 빨간색이다.', () => {
    const colorButton = screen.getByRole('button', { name: 'Change to blue' });

    expect(colorButton).toHaveTextContent('Change to blue');
    expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
  });

  test('버튼을 클릭할 시 파란색으로 변한다.', () => {
    const colorButton = screen.getByRole('button', { name: 'Change to blue' });

    fireEvent.click(colorButton);

    expect(colorButton).toHaveTextContent('Change to red');
    expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  });
});

describe('체크박스 테스트', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('체크박스의 초기값은 비활성화이다.', () => {
    const colorButton = screen.getByRole('button', { name: 'Change to blue' });
    const checkbox = screen.getByRole('checkbox');

    expect(colorButton).toBeEnabled();
    expect(checkbox).not.toBeChecked();
  });

  test('체크박스를 클릭할 시 버튼은 비활성화된다.', () => {
    const colorButton = screen.getByRole('button', { name: 'Change to blue' });
    const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

    fireEvent.click(checkbox);

    expect(colorButton).toBeDisabled();
    expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });
    expect(checkbox).toBeChecked();
  });
});
