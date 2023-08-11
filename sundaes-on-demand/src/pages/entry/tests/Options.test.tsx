import { render, screen } from '@testing-library/react';
import Options from '../Options';

test('서버로부터 스쿱 이미지를 받아서 표시한다', () => {
  render(<Options option="scoops" />);

  const scoopImages = screen.getAllByRole('img', { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // @ts-ignore
  const altText = scoopImages.map((el) => el.alt);
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla Scoop']);
});
