import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/Home';
import ProductsPage from './Pages/Products';
import RootLayout from './Pages/Root';
import ErrorPage from './Pages/Error';
import ProductDetails from './Pages/ProductDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {path: '/', element: <HomePage />},
      {path: 'products', element: <ProductsPage />},
      {path: 'products/:productId', element: <ProductDetails />}
    ]
  },
])

function App() {
  return <RouterProvider router={ router } />;
}

export default App;
