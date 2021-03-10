/* eslint-disable no-eval */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from '../../../components/Header/Header';

describe('<Header />', () => {
  test('renders the Header component', () => {
    const props = {
      searchRedditValue: 'string',
      subRedditValue: 'popular',
      onClick: () => {},
      onSubmit: () => {},
    };
    // eslint-disable-next-line react/jsx-props-no-spreading
    const component = render(<Header {...props} />);
    expect(component).toBeTruthy();
  });
});
