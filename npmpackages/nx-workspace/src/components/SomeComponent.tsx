import { useContext, useLayoutEffect, useRef } from 'react';
import { useScrollProvider } from '../npm';

const SomeComponent = (props: any) => {
  const scrollContext = useScrollProvider();
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
    </div>
  );
};

export { SomeComponent };
