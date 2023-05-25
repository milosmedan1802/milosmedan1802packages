# INSTALL

`npm i @mm1802/react-scroll`

## USAGE OF SCROLLPROVIDER

```
<ScrollProvider
    scrolling={(obj) => {}}
    onScrollToEnd={() => {}}
    onScrollToTop={() => {}}
    onScrollUp={(obj) => {}}
    onScrollDown={(obj) => {}}>
    <!-- ELEMENTS -->
</ScrollProvider>
```

| PROPERTY      | TYPE                            | DESCRIPTION                |
| ------------- | ------------------------------- | -------------------------- |
| children      | -                               | -                          |
| scrolling     | (status: IScrollObject) => void | trigger on scrolling       |
| onScrollToEnd | ( ) => void;                    | trigger on scrolled to end |
| onScrollToTop | ( ) => void;                    | trigger on scrolled to top |
| onScrollUp    | (obj: IScrollObject) => void;   | trigger on scrolling up    |
| onScrollDown  | (obj: IScrollObject) => void;   | trigger on scrolling down  |

## USAGE OF SCROLLPROVIDER HOOK

```
import { useScrollProvider } from '@mm1802/react-scroll';
const ctx = useScrollProvider();
```

| PROPERTY                  | TYPE                  | DESCRIPTION                |
| ------------------------- | --------------------- | -------------------------- |
| scrollPosition            | number                | value of scorlled position |
| scrollProviderScrollToEnd | boolean               | scrolled to end            |
| scrollProviderScrollToTop | boolean               | scrolled to top            |
| scrollDirection           | UP - DOWN             | scrolling direction        |
| scrollTo                  | (top: number) => void | scroll to handler          |
