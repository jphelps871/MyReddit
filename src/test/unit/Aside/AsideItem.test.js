/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import AsideItem from '../../../components/Aside/AsideItem/AsideItem';

describe('<AsideItem />', () => {
  test('AsideItems renders to the DOM', () => {
    const props = {
      names: ['name', 'name', 'name'],
      icons: ['icon', 'icon', 'icon'],
      image: 'imageUrl',
      heading: 'heading',
      onClick: () => {},
    };

    render(<AsideItem {...props} />);

    screen.getAllByText('name');
    screen.getByText('heading');
  });
});
