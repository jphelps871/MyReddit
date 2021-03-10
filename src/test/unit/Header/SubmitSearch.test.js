import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import SubmitSearch from '../../../components/Header/SubmitSearch/SubmitSearch';

describe('<SubmitSearch />', () => {
  test('without a search value, SubmitSearch returns null', () => {
    render(<SubmitSearch />);
    expect(screen.queryByRole('button', { name: /search/i })).toBeNull();
  });

  test('user input reveals search button', () => {
    render(<SubmitSearch search="Hello World" />);
    screen.getByRole('button', { name: /search/i });
  });
});
