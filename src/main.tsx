import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UsersPage from './screens/users.page.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/users",
    element: <UsersPage />
  },
  {
    path: "/tracks",
    element: <div>manage track</div>
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
