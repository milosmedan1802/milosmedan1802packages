import {
  createContext,
  PropsWithChildren,
  useContext,
  useLayoutEffect,
  useState,
  useRef,
} from 'react';
import { animateService } from './animateService';
import {
  elementFitInViewportScrollDown,
  elementFitInViewportScrollUp,
  scrollBottomWatcher,
  scrollObject,
  scrollWrapperStyleObj,
  wrapperStyleObj,
} from './scrollingService';
import {
  IScroll,
  IScrollProvider,
  SCROLL_DIRECTION,
  IScrollObject,
  IStyle,
} from './types';
export const ScrollContext = createContext<IScrollProvider | undefined>(
  undefined
);
export const useScrollProvider = () => {
  const ctx = useContext(ScrollContext);
  if (!ctx) {
    throw new Error('Need to wrap in ScrollProvider component');
  }
  return {
    ...ctx,
  };
};
const ScrollProvider = ({
  children,
  scrolling,
  onScrollToEnd,
  onScrollToTop,
  onScrollUp,
  onScrollDown,
}: PropsWithChildren<IScroll>) => {
  const previousScrollPosition = useRef<number>(0);
  const scrollClientRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [scrollObj, setScrollObj] = useState<IScrollObject>({
    scrollEnd: false,
    scrollPosition: 0,
    scrollHeight: 0,
    clientHeight: 0,
    scrollDirection: SCROLL_DIRECTION.DOWN,
  });
  // MOUNTED
  useLayoutEffect(() => {
    const element = scrollClientRef.current;
    if (!element) return;
    setIsMounted(() => true);
  }, []);
  return (
    <ScrollContext.Provider
      value={{
        scrollProvider: {
          element: scrollClientRef.current!,
          viewport: scrollClientRef.current
            ? scrollClientRef.current!.clientHeight
            : 0,
          scrollPosition: scrollObj.scrollPosition,
          scrollProviderscrollHeight() {
            return this.element.scrollHeight;
          },
          scrollProviderscrollToEnd() {
            return (
              Math.round(this.element.scrollTop + this.viewport) ===
              this.element.scrollHeight
            );
          },
          scrollProviderscrollToTop() {
            return this.element.scrollTop === 0;
          },
          scrollDirection() {
            if (previousScrollPosition.current > this.scrollPosition) {
              return SCROLL_DIRECTION.UP;
            }
            return SCROLL_DIRECTION.DOWN;
          },
          viewportPositionStatus(
            {
              top,
              bottom,
            }: {
              top: number;
              bottom: number;
            },
            elementHeight: number
          ) {
            if (this.scrollDirection() === SCROLL_DIRECTION.DOWN) {
              return elementFitInViewportScrollDown({
                top,
                bottom,
                elementHeight,
                viewport: this.viewport,
              });
            }
            return elementFitInViewportScrollUp({
              top,
              bottom,
              elementHeight,
              viewport: this.viewport,
            });
          },
        },
      }}
    >
      <div style={wrapperStyleObj}>
        <div
          ref={scrollClientRef}
          onScroll={(el: any) => {
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
          }}
          style={scrollWrapperStyleObj}
        >
          {isMounted && children}
        </div>
      </div>
    </ScrollContext.Provider>
  );
};
ScrollProvider.AnimateWrapper = ({
  children,
  index,
  animationDuration = 0.1,
  style,
}: PropsWithChildren<{
  index?: number;
  animationDuration?: number;
  style: IStyle;
}>) => {
  const element = useRef<any>();
  const { scrollProvider } = useScrollProvider();
  useLayoutEffect(() => {
    if (index === 1) {
      const { isInViewPort, status, percentOfElementVisibility } =
        scrollProvider.viewportPositionStatus(
          {
            top: element.current.getBoundingClientRect().top,
            bottom: element.current.getBoundingClientRect().bottom,
          },
          element.current.clientHeight
        );
      animateService.styleHandler(
        isInViewPort,
        status,
        percentOfElementVisibility,
        scrollProvider.scrollDirection()
      )(style, element.current);
    }
  }, [scrollProvider.scrollPosition]);
  return (
    <div
      ref={element}
      style={{
        transition: `${animationDuration}s`,
      }}
    >
      {children}
    </div>
  );
};

export { ScrollProvider };
