import { useContext } from 'react';
import { ScrollContext } from './ScrollContext';

export const useScrollProvider = () => {
  const ctx = useContext(ScrollContext);
  if (!ctx) {
    throw new Error('Need to wrap in ScrollProvider component');
  }
  return {
    ...ctx,
  };
};
