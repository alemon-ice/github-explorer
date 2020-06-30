import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from '../../pages/Dashboard';

describe('Dashboard Page', () => {
  it('Must list saved repositories', () => {
    const { debug } = render(<Dashboard />);

    debug();
  });
});
