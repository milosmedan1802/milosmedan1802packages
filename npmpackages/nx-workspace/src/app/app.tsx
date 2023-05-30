import { Person } from 'src/components/Person';
import { HttpProvider } from 'src/npm/http/HttpProvider';

export function App() {
  return (
    <div className="page">
      <HttpProvider
        axiosCreateConfig={{
          baseURL: 'https://jsonplaceholder.typicode.com',
        }}
      >
        <Person></Person>
      </HttpProvider>
    </div>
  );
}
export default App;
