import { PropsWithChildren, useRef, useLayoutEffect } from 'react';
import { IWaypoint } from '../types';
import { runAnimation } from './service';

const Waypoint = function ({
  children,
  onEnter,
  onLeave,
  spyOn,
  oneWay = true,
}: PropsWithChildren<IWaypoint>) {
  const waypoint = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const observe = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target, boundingClientRect }) => {
          const elements = target.querySelectorAll(spyOn);
          const { top } = boundingClientRect;
          onEnter && isIntersecting && onEnter();
          onLeave && !isIntersecting && onLeave();
          if (!spyOn) return;
          elements.forEach((element: any) => {
            element.style['willChange'] = 'transform, opacity';
            runAnimation(isIntersecting, oneWay, top, element);
          });
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0,

        /* required options*/
        trackVisibility: true,
        delay: 100,
      } as any
    );
    observe.observe(waypoint.current!);
  }, []);
  return <div ref={waypoint}>{children}</div>;
};

export { Waypoint };
