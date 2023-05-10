import { IScrollObject, SCROLL_DIRECTION } from './types';

export const scrollBottomWatcher = (el: HTMLDivElement) =>
  el.scrollTop + el.clientHeight === el.scrollHeight;

export const determineScrollDirection = (prev: number, current: number) =>
  prev > current ? SCROLL_DIRECTION.UP : SCROLL_DIRECTION.DOWN;

export const scrollObject = (el: HTMLDivElement, scrollObj: IScrollObject) => {
  return {
    scrollEnd: scrollBottomWatcher(el),
    scrollPosition: el.scrollTop,
    clientHeight: el.clientHeight,
    scrollDirection: determineScrollDirection(
      scrollObj.scrollPosition,
      el.scrollTop
    ),
  };
};

// CSS OBJECTS
export const wrapperStyleObj: {
  position: 'relative';
  height: '100%';
  width: '100%';
} = {
  position: 'relative',
  height: '100%',
  width: '100%',
};

export const scrollWrapperStyleObj: any = {
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  overflowY: 'scroll',
  overflowX: 'hidden',
};
