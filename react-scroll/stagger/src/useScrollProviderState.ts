import { useRef, useState } from 'react';
import { IScrollObject, SCROLL_DIRECTION } from './types';

const useScrollProviderState = () => {
  const previousScrollPosition = useRef<number>(0);
  const scrollClientRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [scrollObj, setScrollObj] = useState<IScrollObject>({
    scrollEnd: false,
    scrollPosition: 0,
    clientHeight: 0,
    scrollDirection: SCROLL_DIRECTION.DOWN,
  });
  return {
    previousScrollPosition,
    scrollClientRef,
    isMounted,
    setIsMounted,
    scrollObj,
    setScrollObj,
  };
};

export { useScrollProviderState };
