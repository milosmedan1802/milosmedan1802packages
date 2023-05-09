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
  element: any;
  viewport: number;
  scrollPosition: number;
  scrollProviderScrollToEnd: boolean;
  scrollProviderScrollToTop: boolean;
  scrollDirection: `${SCROLL_DIRECTION}`;
  scrollTo(top: number): void;
}

export interface IScrollObject {
  scrollEnd: boolean;
  scrollPosition: number;
  clientHeight: number;
  scrollDirection: `${SCROLL_DIRECTION}`;
}

export type styleProp = string | Partial<CSSStyleDeclaration>;
