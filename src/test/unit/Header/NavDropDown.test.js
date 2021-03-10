/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import NavDropDown from '../../../components/Header/NavDropDown/NavDropDown';

describe('<Header />', () => {
  test('renders the NavDropDown component', () => {
    const props = {
      subRedditValue: 'subreddit',
      searchRedditValue: 'search value',
      onClick: () => {},
    };

    const component = render(<NavDropDown {...props} />);
    expect(component).toBeTruthy();
  });
});
