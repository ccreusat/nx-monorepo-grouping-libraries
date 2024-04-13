import { render } from '@testing-library/react';

import ReactTransformer from './react-transformer';

describe('ReactTransformer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactTransformer />);
    expect(baseElement).toBeTruthy();
  });
});
