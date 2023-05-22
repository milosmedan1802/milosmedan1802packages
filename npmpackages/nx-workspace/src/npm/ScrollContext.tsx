import { createContext } from 'react';
import { IScrollProvider } from './types';

export const ScrollContext = createContext<IScrollProvider | undefined>(
  undefined
);
