import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import App from '../App';
import Content from '../components/Content/Content';
import Login from '../components/NavBar/Login';

const indexRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Content />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
]);

export default indexRoutes;
