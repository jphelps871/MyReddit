import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Icon from '../../../components/Aside/AsideItem/AsideBody/Icon';

describe('<Icon />', () => {
  test('renders default icon with no props', () => {
    render(<Icon />);
    const icon = screen.getByRole('img');

    expect(icon).toHaveAttribute('src', 'snooIcon.svg');
  });

  test('renders the icon passed through props', () => {
    render(<Icon srcIcon="imageTest" />);
    const icon = screen.getByRole('img');

    expect(icon).toHaveAttribute('src', 'imageTest');
  });
});
