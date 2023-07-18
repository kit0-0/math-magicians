import React from 'react';
import renderWithRouter from '../test-utils';
import Navbar from '../Navbar';
import '@testing-library/jest-dom/extend-expect';

describe('Navbar component', () => {
  it('should match the snapshot', () => {
    const { container } = renderWithRouter(<Navbar />);
    expect(container).toMatchSnapshot();
  });
});
