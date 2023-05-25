import { ScrollProvider } from 'src/npm/scroll/ScrollProvider';

const Person = () => {
  return (
    <div className="person">
      <ScrollProvider
        scrolling={(obj) => {
          // console.log('ovj', obj);
        }}
        onScrollToEnd={() => {}}
        onScrollToTop={() => {}}
        onScrollUp={(obj) => {}}
        onScrollDown={(obj) => {}}
      >
        <div className="personitem">pers</div>
        <div className="personitem">pers</div>
        <div className="personitem">pers</div>
        <div className="personitem">pers</div>
        <div className="personitem">pers</div>
        <div className="personitem">pers</div>
        <div className="personitem">pers</div>
        <div className="personitem">pers</div>
        <div className="personitem">pers</div>

        <div className="personitem">pers</div>
      </ScrollProvider>
    </div>
  );
};

export { Person };
