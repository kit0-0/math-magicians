import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Quote from '../Quote';
import '@testing-library/jest-dom/extend-expect';

describe('Quote component', () => {
  it('should match the snapshot', async () => {
    const { container } = render(<Quote />);
    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
