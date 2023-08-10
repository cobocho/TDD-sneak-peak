import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './Home';

describe('약관 테스트', () => {
  beforeEach(() => {
    render(<Home />);
  });

  test('약관의 초기값은 disabled이다.', () => {
    const conditionsAgreeButton = screen.getByRole('button', { name: 'Confirm order' });
    const confirmCheckbox = screen.getByRole('checkbox', { name: 'I agree to Terms and Conditions' });

    expect(conditionsAgreeButton).toBeDisabled();
    expect(confirmCheckbox).not.toBeChecked();
  });

  test('약관을 클릭할 시 버튼이 활성화된다.', async () => {
    const user = userEvent.setup();

    const conditionsAgreeButton = screen.getByRole('button', { name: 'Confirm order' });
    const confirmCheckbox = screen.getByRole('checkbox', { name: 'I agree to Terms and Conditions' });

    await user.click(confirmCheckbox);

    expect(conditionsAgreeButton).toBeEnabled();
    expect(confirmCheckbox).toBeChecked();
  });
});
