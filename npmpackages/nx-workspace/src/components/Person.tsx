import { ScrollProvider } from 'src/npm/scroll/ScrollProvider';
import { useHttpProvider } from 'src/npm/http/HttpProvider';

const Person = () => {
  const { get, post } = useHttpProvider();
  get('/todoss', {
    params: {
      fname: 'misloo',
    },
  })
    .then((res) => {
      console.log('resss', res);
    })
    .catch((err) => {
      console.log('this is errr', err);
    });
  return (
    <div>
      <span>ovo je person componenr</span>
      <button
        onClick={() => {
          post('/todos');
        }}
      >
        molos
      </button>
    </div>
  );
};

export { Person };
