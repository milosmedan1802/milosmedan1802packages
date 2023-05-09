import { ScrollProvider } from '@mm1802/react-scroll';
import { SomeComponent } from 'src/components/SomeComponent';
export function App() {
  return (
    <div className="page">
      <ScrollProvider
        scrolling={(obj) => {}}
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
