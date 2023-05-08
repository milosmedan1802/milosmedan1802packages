export interface IScroll {
  scrolling?: (status: IScrollObject) => void;
  onScrollToEnd?: () => void;
  onScrollToTop?: () => void;
  onScrollUp?: (obj: IScrollObject) => void;
  onScrollDown?: (obj: IScrollObject) => void;
}

export const elementLeavingViewport = (el: any) => {
  el.getBoundingClientRect();
};

export interface IScrollClient {
  mounted: boolean;
  scrollViewPort: number;
  element?: HTMLDivElement | null;
}

export interface IScrollProvider {
  scrollProvider: {
    element: any;
    viewport: number;
    scrollPosition: number;
    scrollProviderscrollHeight: () => number;
    scrollProviderscrollToEnd: () => boolean;
    scrollProviderscrollToTop: () => boolean;
    scrollDirection: () => `${SCROLL_DIRECTION}`;
    viewportPositionStatus: (
      obj: { top: number; bottom: number },
      elementHeight: number
    ) => {
      status: `${VIEWPORT_POSITION_STATUS}`;
      percentOfElementVisibility: number;
      isInViewPort: boolean;
    };
  };
}

export interface IScrollObject {
  scrollEnd: boolean;
  scrollPosition: number;
  scrollHeight: number;
  clientHeight: number;
  scrollDirection: `${SCROLL_DIRECTION}`;
}

export enum SCROLL_DIRECTION {
  UP = 'UP',
  DOWN = 'DOWN',
}

export enum VIEWPORT_POSITION_STATUS {
  LEAVED = 'LEAVED',
  ENTERING = 'ENTERING',
  LEAVING = 'LEAVING',
  IN = 'IN',
}

export enum STYLE_BY {
  STYLE_OBJ = 'styleObj',
  CSS = 'css',
}

export interface IStyle {
  customize: (obj: {
    direction: `${SCROLL_DIRECTION}`;
    element: HTMLDivElement;
    isInViewPort: boolean;
    percentOfElementVisibility: number;
    status: `${VIEWPORT_POSITION_STATUS}`;
    styleFn: (
      obj: Partial<CSSStyleDeclaration>,
      element: HTMLDivElement
    ) => void;
  }) => void;
}

export type styleProp = string | Partial<CSSStyleDeclaration>;
