import React from 'react';
import { render } from '@testing-library/react';
import Calculator from '../Calculator';
import '@testing-library/jest-dom/extend-expect';

describe('Calculator component', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Calculator />);
    expect(container).toMatchSnapshot();
  });
});
