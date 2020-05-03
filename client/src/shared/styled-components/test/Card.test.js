import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';

import { Card } from '../Card';

describe('Styled Components: Card', () => {
  it('renders correctly - Card Style Component', () => {
    const tree = renderer.create(<Card>Testing Card</Card>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
