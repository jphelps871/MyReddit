import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import Aside from '../../../components/Aside/Aside';

describe('<Aside />', () => {
  test('renders Aside', async () => {
    render(<Aside />);
    await waitFor(() => {
      expect(screen.getByText('r/microsoft')).toBeInTheDocument();
    });

    userEvent.click(screen.getByRole('button', { name: /r\/microsoft/i }));
  });
});
