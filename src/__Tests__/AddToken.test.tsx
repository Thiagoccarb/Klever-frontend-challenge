import * as React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom'

import { renderWithRouter } from './utils';
import { AddToken } from '../pages';

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

describe('<AddToken />', () => {
  const route = '/tokens/add';
  beforeEach(() => {
    renderWithRouter(
      <AddToken />, { route }
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe.only('AddToken page. "/tokens/add"', () => {
    const spies: Spies = {}

    beforeEach(() => {
      ['setItem', 'getItem', 'clear'].forEach((fn: string) => {
        const mock = jest.fn(localStorage[fn]);
        spies[fn] = jest.spyOn(Storage.prototype, fn).mockImplementation(mock);
      });
    });

    afterEach(() => {
      Object.keys(spies).forEach((key: string) => spies[key].mockRestore())
    })

    const setItemSpy = jest.spyOn(Storage.prototype, "setItem");

    it('Should render a "Wish Wallet" h1 tag', async () => {
      const title = await screen.findByRole('heading', { name: /Wish wallet/i });
      expect(title).toBeInTheDocument();
    });

    it('Should render a "Voltar" button', async () => {
      const button = await screen.findByRole('button', { name: /Voltar/i });
      expect(button).toBeInTheDocument();
    });

    it('Should render a "Save" button', async () => {
      const button = await screen.findByRole('button', { name: /Save/i });
      expect(button).toBeInTheDocument();
    });

    it('Should render a "Add Token" h3 tag', async () => {
      const h3 = await screen.findByRole('heading', { name: /Add Token/i, level: 3 });
      expect(h3).toBeInTheDocument();
    });

    it('Should render a "Token" label', async () => {
      const label = await screen.findByText('Token');
      expect(label).toBeInTheDocument();
    });

    it('Should render a Token input', async () => {
      const input = await screen.findByTestId('token-input');
      expect(input).toBeInTheDocument();
    });

    it('Should render a "Balance" label', async () => {
      const label = await screen.findByText('Balance');
      expect(label).toBeInTheDocument();
    });

    it('Should render a Balance input', async () => {
      const input = await screen.findByTestId('balance-input');
      expect(input).toBeInTheDocument();
    });
    it('Token input behaviour', async () => {
      const input = await screen.findByTestId('token-input');
      expect(input).toHaveValue('');

      fireEvent.change(input, { target: { value: 'aaaa' } })
      expect(input).toHaveValue('aaaa');
    });
    it('Balance input behaviour', async () => {
      const input = await screen.findByTestId('balance-input');
      expect(input).toHaveValue('');

      fireEvent.change(input, { target: { value: 'aaaa' } })
      expect(input).toHaveValue('');

      fireEvent.change(input, { target: { value: 1000 } })
      expect(input).toHaveValue('1.000');
    });
    it('Should render "required field" if click on save button with empty token input', async () => {
      const input = await screen.findByTestId('balance-input');
      fireEvent.change(input, { target: { value: 1000 } })

      const button = await screen.findByRole('button', { name: /Save/i });
      fireEvent.click(button)

      const message = await screen.findByText('required field!');
      expect(message).toBeInTheDocument();
    });
    it('Should render "required field" if click on save button with empty balance input', async () => {
      const input = await screen.findByTestId('token-input');
      fireEvent.change(input, { target: { value: "aaaaa" } })

      const button = await screen.findByRole('button', { name: /Save/i });
      fireEvent.click(button)

      const message = await screen.findByText('required field!');
      expect(message).toBeInTheDocument();
    });
    it('Should render 2 messages "required field" if click on save button with both empties input', async () => {
      const button = await screen.findByRole('button', { name: /Save/i });
      fireEvent.click(button)

      const message = await screen.findAllByText('required field!');
      expect(message).toHaveLength(2);
    });
    it('Should redirect to "/tokens" page when clicking on "Voltar" button', async () => {
      const button = await screen.findByRole('button', { name: /Voltar/i });
      fireEvent.click(button)

      expect(mockedNavigator).toHaveBeenCalledTimes(1);
      expect(mockedNavigator).toHaveBeenCalledWith('/tokens');
    });
    it('Should render a spinner when entering correct data', async () => {
      const tokenInput = await screen.findByTestId('token-input');
      fireEvent.change(tokenInput, { target: { value: "abc" } });

      const balanceInput = await screen.findByTestId('balance-input');
      fireEvent.change(balanceInput, { target: { value: 1000 } });

      const button = await screen.findByRole('button', { name: /Save/i });
      fireEvent.click(button)

      const spinner = await screen.findByTestId('spinner');
      expect(spinner).toBeInTheDocument();
    });
    it('Should render a modal when entering an already registered token', async () => {
      const tokenInput = await screen.findByTestId('token-input');
      fireEvent.change(tokenInput, { target: { value: "abc" } });

      const balanceInput = await screen.findByTestId('balance-input');
      fireEvent.change(balanceInput, { target: { value: 1000 } });

      const button = await screen.findByRole('button', { name: /Save/i });
      fireEvent.click(button);

      fireEvent.change(tokenInput, { target: { value: "abc" } });
      fireEvent.change(balanceInput, { target: { value: 1000 } });
      fireEvent.click(button);

      const modal = await screen.findByTestId('modal');
      expect(modal).toBeInTheDocument();
    });
  });
});
