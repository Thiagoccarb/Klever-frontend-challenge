import * as React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'

import { renderWithRouter } from './utils';
import { Home } from '../pages';

interface Spies {
  [key: string]: jest.SpyInstance
}

const mockedStorage = [
  { id: 'abc', token: 'abc', balance: 1000 },
];

const TOKENS = 'tokens';

const mockedNavigator = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedNavigator,
}));

describe('<Home />', () => {
  const route = '/tokens';
  beforeEach(() => {
    renderWithRouter(
      <Home />, { route }
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Initial page. "/tokens" with empty localStorage', () => {
    it('Should render a "No Token Registered yet" message', async () => {
      const message = await screen.findByText(/No Token Registered yet/i);
      expect(message).toBeInTheDocument();
    });
  });
  describe('Initial page. "/tokens" with mocked localStorage', () => {
    const spies: Spies = {}

    beforeEach(() => {
      ['setItem', 'getItem', 'clear'].forEach((fn: string) => {
        const mock = jest.fn(localStorage[fn]);
        spies[fn] = jest.spyOn(Storage.prototype, fn).mockImplementation(mock);
        localStorage.setItem(TOKENS, JSON.stringify(mockedStorage));
      });
    });

    afterEach(() => {
      Object.keys(spies).forEach((key: string) => spies[key].mockRestore())
    })

    const getItemSpy = jest.spyOn(Object.getPrototypeOf(localStorage), "getItem");

    it('Should access localStorage and look for "tokens" key', async () => {
      expect(getItemSpy).toHaveBeenCalled();
      expect(getItemSpy).toHaveBeenCalledWith('tokens');
    });

    it('Should render a "shooting star" image', async () => {
      const image = await screen.findByTestId('shooting-star-logo');
      expect(image).toBeInTheDocument();
    });

    it('Should render a "Wish Wallet" title', async () => {
      const title = await screen.findByText(/Wish Wallet/i);
      expect(title).toBeInTheDocument();
    });

    it('Should render a "Add Token" button', async () => {
      const buton = await screen.findByRole('button', { name: /Add Token/i });
      expect(buton).toBeInTheDocument();
    });

    it('Should render a "Tokens" and "Balance" h4 tag', async () => {
      const h4Tag1 = await screen.findByRole('heading', { name: /tokens/i, level: 4 });
      const h4Tag2 = await screen.findByRole('heading', { name: /balance/i, level: 4 });

      expect(h4Tag1).toBeInTheDocument();
      expect(h4Tag2).toBeInTheDocument();
    });

    it('Should render localStorage stored tokens data accordingly: one edit image, token name, token balance for each registered token', async () => {
      const editImage = await screen.findByTestId(`edit-icon-${mockedStorage[0].token}`);
      const token = await screen.findByRole('heading', { name: `${mockedStorage[0].token.toLocaleUpperCase()}` });
      const balance = await screen.findByText(mockedStorage[0].balance);

      expect(editImage).toBeInTheDocument();
      expect(token).toBeInTheDocument();
      expect(balance).toBeInTheDocument();
    });

    it('Should redirect to /tokens/add route when clicking  "Add Token" button', async () => {
      const button = await screen.findByRole('button', { name: /Add Token/i });
      fireEvent.click(button);

      expect(mockedNavigator).toHaveBeenCalledTimes(1);
      expect(mockedNavigator).toHaveBeenCalledWith('/tokens/add');
    });

    it('Should redirect to /tokens/edit/id route when clicking  "edit" button', async () => {
      const editImage = await screen.findByTestId(`edit-icon-${mockedStorage[0].token}`);
      fireEvent.click(editImage);

      expect(mockedNavigator).toHaveBeenCalledTimes(1);
      expect(mockedNavigator).toHaveBeenCalledWith('/tokens/edit/abc');
    });
  });
});
