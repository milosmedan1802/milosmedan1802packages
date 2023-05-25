import { PropsWithChildren } from 'react';
import {
  scrollBottomWatcher,
  scrollObject,
  scrollWrapperStyleObj,
} from './scrollingService';
import { ScrollContext } from './ScrollContext';
import { useScrollProviderState } from './useScrollProviderState';
import { IScroll, SCROLL_DIRECTION } from './types';

const ScrollProvider = ({
  children,
  scrolling,
  onScrollToEnd,
  onScrollToTop,
  onScrollUp,
  onScrollDown,
}: PropsWithChildren<IScroll>) => {
  const { previousScrollPosition, scrollClientRef, scrollObj, setScrollObj } =
    useScrollProviderState();

  const onScroll = (el: any) => {
    // EMIT SCROLL OBJ
    scrolling &&
      scrolling({
        ...scrollObject(el.target, scrollObj),
      });
    // SCROLL TO END TRIGGER
    onScrollToEnd && scrollBottomWatcher(el.target) && onScrollToEnd();
    // SCROLL TO TOP TRIGGER
    onScrollToTop && el.target.scrollTop === 0 && onScrollToTop();
    // ON SCROLL UP
    scrollObj.scrollDirection === SCROLL_DIRECTION.UP &&
      onScrollUp &&
      onScrollUp(scrollObject(el.target, scrollObj));
    // ON SCROLL DOWN
    scrollObj.scrollDirection === SCROLL_DIRECTION.DOWN &&
      onScrollDown &&
      onScrollDown(scrollObject(el.target, scrollObj));
    // UPDATE SCROLL OBJECT
    setScrollObj((prev) => {
      previousScrollPosition.current = prev.scrollPosition;
      return {
        ...prev,
        ...scrollObject(el.target, scrollObj),
      };
    });
  };

  return (
    <ScrollContext.Provider
      value={{
        scrollPosition: scrollObj.scrollPosition,
        scrollProviderScrollToEnd: scrollObj.scrollEnd,
        scrollProviderScrollToTop: scrollClientRef.current
          ? scrollClientRef.current.scrollTop === 0
          : false,
        scrollDirection:
          previousScrollPosition.current > scrollObj.scrollPosition
            ? SCROLL_DIRECTION.UP
            : SCROLL_DIRECTION.DOWN,
        scrollTo(top) {
          scrollClientRef.current!.scrollTo({
            top,
            behavior: 'smooth',
          });
        },
      }}
    >
      <div
        ref={scrollClientRef}
        onScroll={onScroll}
        style={scrollWrapperStyleObj}
      >
        {children}
      </div>
    </ScrollContext.Provider>
  );
};

export { ScrollProvider };
