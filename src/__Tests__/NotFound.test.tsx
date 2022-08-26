import * as React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'

import { renderWithRouter } from './utils';
import { NotFound } from '../pages';



describe('<Home />', () => {
  const route = '/some-route';
  beforeEach(() => {
    renderWithRouter(
      <NotFound />, { route }
    );
  });

  describe('Not found page. "/some-route" ', () => {
    it('Should render a not found title', async () => {
      const message = await screen.findByText(/Sorry, requested page not found/i);
      expect(message).toBeInTheDocument();
    });
  });
});
