/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Search from '../../../components/Header/Search/Search';

describe('<Search />', () => {
  const props = {
    subRedditValue: 'subreddit',
    searchRedditValue: '',
    onClick: () => {},
  };

  test('renders the Search component', () => {
    const component = render(<Search {...props} />);
    expect(component).toBeTruthy();
  });

  test('clicking button accesses search input', () => {
    render(<Search {...props} />);

    userEvent.click(screen.getByRole('button', { name: /submit/i }));
    userEvent.type(
      screen.getByPlaceholderText(/search reddit/i),
      'Hello, World!',
    );

    expect(screen.getByPlaceholderText(/search reddit/i)).toHaveValue(
      'Hello, World!',
    );
  });
});
