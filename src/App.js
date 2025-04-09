import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/Home';
import ProductsPage from './Pages/Products';
import RootLayout from './Pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {path: '/', element: <HomePage />},
      {path: '/products', element: <ProductsPage />}
    ]
  },
])

function App() {
  return <RouterProvider router={ router } />;
}

export default App;
