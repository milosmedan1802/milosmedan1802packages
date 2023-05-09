import { ScrollProvider } from '../npm';
import { SomeComponent } from 'src/components/SomeComponent';
export function App() {
  return (
    <div className="page">
      <ScrollProvider
        scrolling={(obj) => {
          console.log('scrolling', obj);
        }}
        onScrollToEnd={() => {
          // console.log('end');
        }}
        onScrollToTop={() => {
          // console.log('top');
        }}
        onScrollUp={(obj) => {}}
        onScrollDown={(obj) => {
          // console.log('top', obj);
        }}
      >
        <SomeComponent></SomeComponent>

        <SomeComponent></SomeComponent>

        <SomeComponent></SomeComponent>

        <SomeComponent></SomeComponent>

        <SomeComponent></SomeComponent>

        <SomeComponent></SomeComponent>

        <SomeComponent></SomeComponent>

        <SomeComponent index={1}></SomeComponent>

        <SomeComponent></SomeComponent>

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
