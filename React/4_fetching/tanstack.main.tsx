// npm i @tanstack/react-query
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const router = createBrowserRouter([
  // ...
]);

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);