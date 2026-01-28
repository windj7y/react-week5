import Layout from "../layout/Layout";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Products from "../pages/Products";

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/product/:id',
        element: <Product />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ]
  }
]

export default routes