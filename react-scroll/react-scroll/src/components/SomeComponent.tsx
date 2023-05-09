import { useContext, useLayoutEffect, useRef } from 'react';
import { useScrollProvider } from '@mm1802/react-scroll';
const SomeComponent = (props: any) => {
  const { element, scrollTo } = useScrollProvider();
  return (
    <div
      className={`${props && props.index === 1 ? 'bg-green' : 'bg-red'} veliko`}
    >
      <h1
        style={{
          margin: 0,
        }}
      >
        SomeComponent
      </h1>
      {props.index && (
        <>
          <button
            onClick={() => {
              scrollTo(159);
            }}
          >
            msmmsms
          </button>
        </>
      )}
    </div>
  );
};

export { SomeComponent };
