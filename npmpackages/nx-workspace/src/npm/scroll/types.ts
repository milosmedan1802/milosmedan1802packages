export interface IScroll {
  scrolling?: (status: IScrollObject) => void;
  onScrollToEnd?: () => void;
  onScrollToTop?: () => void;
  onScrollUp?: (obj: IScrollObject) => void;
  onScrollDown?: (obj: IScrollObject) => void;
}
export enum SCROLL_DIRECTION {
  UP = 'UP',
  DOWN = 'DOWN',
}

export interface IScrollProvider {
  scrollPosition: number;
  scrollProviderScrollToEnd: boolean;
  scrollProviderScrollToTop: boolean;
  scrollDirection: `${SCROLL_DIRECTION}`;
  scrollTo(top: number): void;
}

export interface IScrollObject {
  scrollEnd: boolean;
  scrollPosition: number;
  scrollDirection: `${SCROLL_DIRECTION}`;
}

export enum DIRECTION_VISIBLE {
  ENTER_SCROLL_UP = 'ENTER_SCROLL_UP',
  ENTER_SCROLL_DOWN = 'ENTER_SCROLL_DOWN',
  LEAVE_UP = 'LEAVE_UP',
  LEAVE_DOWN = 'LEAVE_DOWN',
}
