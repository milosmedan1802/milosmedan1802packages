import queryString from 'query-string';
import { Person } from 'src/components/Person';
import { HttpProvider } from 'src/npm/http/HttpProvider';

export function App() {
  return (
    <div className="page">
      <HttpProvider
        baseUrl={'https://jsonplaceholder.typicode.com'}
        paramsSerializer={{
          serialize: (params) => {
            return queryString.stringify(params);
          },
          indexes: false,
        }}
      >
        <Person></Person>
      </HttpProvider>
    </div>
  );
}
export default App;
