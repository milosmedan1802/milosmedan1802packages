import {
  IScrollObject,
  SCROLL_DIRECTION,
  VIEWPORT_POSITION_STATUS,
} from './types';

export const scrollBottomWatcher = (el: HTMLDivElement) => {
  return el.scrollTop + el.clientHeight === el.scrollHeight;
};

export const scrollPosition = (el: any) => el.scrollTop;

export const determineScrollDirection = (prev: number, current: number) => {
  if (prev > current) {
    return SCROLL_DIRECTION.UP;
  }
  return SCROLL_DIRECTION.DOWN;
};

export const scrollObject = (el: HTMLDivElement, scrollObj: IScrollObject) => {
  return {
    scrollEnd: scrollBottomWatcher(el),
    scrollPosition: el.scrollTop,
    scrollHeight: el.scrollHeight,
    clientHeight: el.clientHeight,
    scrollDirection: determineScrollDirection(
      scrollObj.scrollPosition,
      el.scrollTop
    ),
  };
};

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

export const elementFitInViewportScrollDown = ({
  top,
  bottom,
  elementHeight,
  viewport,
}: {
  top: number;
  bottom: number;
  elementHeight: number;
  viewport: number;
}) => {
  if (top > viewport) {
    return {
      status: VIEWPORT_POSITION_STATUS.LEAVED,
      percentOfElementVisibility: 0,
      isInViewPort: false,
    };
  }
  if (top > 0 && (top === viewport || top <= viewport) && bottom > viewport) {
    return {
      status: VIEWPORT_POSITION_STATUS.ENTERING,
      percentOfElementVisibility: Math.round(
        ((viewport - top) / elementHeight) * 100
      ),
      isInViewPort: true,
    };
  }

  if (top >= 0 && bottom <= viewport) {
    return {
      status: VIEWPORT_POSITION_STATUS.IN,
      percentOfElementVisibility: 100,
      isInViewPort: true,
    };
  }

  if (top < 0 && bottom >= 0 && bottom < viewport) {
    return {
      status: VIEWPORT_POSITION_STATUS.LEAVING,
      percentOfElementVisibility: Math.round((bottom / elementHeight) * 100),
      isInViewPort: true,
    };
  }
  return {
    status: VIEWPORT_POSITION_STATUS.LEAVED,
    percentOfElementVisibility: 0,
    isInViewPort: false,
  };
};

export const elementFitInViewportScrollUp = ({
  top,
  bottom,
  elementHeight,
  viewport,
}: {
  top: number;
  bottom: number;
  elementHeight: number;
  viewport: number;
}) => {
  if (top < 0 && bottom < 0) {
    return {
      status: VIEWPORT_POSITION_STATUS.LEAVED,
      percentOfElementVisibility: 0,
      isInViewPort: false,
    };
  }

  if (top < 0 && bottom >= 0 && bottom < viewport) {
    return {
      status: VIEWPORT_POSITION_STATUS.ENTERING,
      percentOfElementVisibility: Math.round((bottom / elementHeight) * 100),
      isInViewPort: true,
    };
  }

  if (top >= 0 && bottom <= viewport) {
    return {
      status: VIEWPORT_POSITION_STATUS.IN,
      percentOfElementVisibility: 100,
      isInViewPort: true,
    };
  }

  if (bottom > viewport && top <= viewport) {
    return {
      status: VIEWPORT_POSITION_STATUS.LEAVING,
      percentOfElementVisibility: Math.round(
        ((viewport - top) / elementHeight) * 100
      ),
      isInViewPort: true,
    };
  }

  return {
    status: VIEWPORT_POSITION_STATUS.LEAVED,
    percentOfElementVisibility: 0,
    isInViewPort: false,
  };
};
