import './App.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './services/query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Rotas from './routes/routes';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Rotas />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
