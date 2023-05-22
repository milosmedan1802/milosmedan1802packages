import { ScrollProvider } from '../npm';
import { SomeComponent } from 'src/components/SomeComponent';
import { AnimateComponent } from 'src/components/AnimateComponent';
import { useLayoutEffect } from 'react';
export function App() {
  return (
    <div className="page">
      <ScrollProvider
        scrolling={(obj) => {
          // console.log('ovj', obj);
        }}
        onScrollToEnd={() => {}}
        onScrollToTop={() => {}}
        onScrollUp={(obj) => {}}
        onScrollDown={(obj) => {}}
      >
        <SomeComponent></SomeComponent>
        <SomeComponent></SomeComponent>
        <SomeComponent></SomeComponent>
        <SomeComponent></SomeComponent>
        <SomeComponent></SomeComponent>
        <SomeComponent></SomeComponent>
        <SomeComponent></SomeComponent>
        <SomeComponent></SomeComponent>
        <AnimateComponent />
        <SomeComponent></SomeComponent>
        <SomeComponent></SomeComponent>
        <SomeComponent></SomeComponent>
        <SomeComponent></SomeComponent>
        <SomeComponent></SomeComponent>
      </ScrollProvider>
    </div>
  );
}

export default App;
