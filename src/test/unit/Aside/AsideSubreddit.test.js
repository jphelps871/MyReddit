import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// import userEvent from '@testing-library/user-event';

import Subreddit from '../../../components/Aside/AsideItem/AsideBody/Subreddit';

describe('<Subreddit />', () => {
  test('user clicking on subreddit fires event', () => {
    const handleClick = jest.fn();

    render(
      <Subreddit onClick={handleClick} subredditName="testSubredditName" />,
    );

    const subreddit = screen.getByRole('button', {
      name: /testSubredditName/i,
    });

    fireEvent.click(subreddit);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
