import { IToken } from '../interfaces';

export const getLocalStorageKey = (key: string): IToken[] | undefined => {
  try {
    const data = localStorage.getItem(key) as string;
    return JSON.parse(data) as IToken[];
  } catch (err) {
    return undefined;
  }
};

export const saveData = (obj: any) => localStorage.setItem('tokens', JSON.stringify(obj));
