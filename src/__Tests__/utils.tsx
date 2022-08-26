import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'

export const renderWithRouter = (ui: any, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)

  return {
    ...render(ui, { wrapper: BrowserRouter }),
  }
}