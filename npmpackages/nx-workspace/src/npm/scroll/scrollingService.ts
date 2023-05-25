import { IScrollObject, SCROLL_DIRECTION } from './types';

export const scrollBottomWatcher = (el: HTMLDivElement) =>
  el.scrollTop + el.clientHeight === el.scrollHeight;

export const determineScrollDirection = (prev: number, current: number) =>
  prev > current ? SCROLL_DIRECTION.UP : SCROLL_DIRECTION.DOWN;

export const scrollObject = (el: HTMLDivElement, scrollObj: IScrollObject) => {
  return {
    scrollEnd: scrollBottomWatcher(el),
    scrollPosition: el.scrollTop,
    scrollDirection: determineScrollDirection(
      scrollObj.scrollPosition,
      el.scrollTop
    ),
  };
};

export const scrollWrapperStyleObj: any = {
  position: 'relative',
  height: '100%',
  width: '100%',
  overflow: 'scroll',
};
