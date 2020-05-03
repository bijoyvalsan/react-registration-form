import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';

import { PageLayout } from '../Layout';

describe('Styled Components: PageLayout', () => {
  it('renders correctly - PageLayout Style Component', () => {
    const tree = renderer.create(<PageLayout>Testing</PageLayout>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
