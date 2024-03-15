import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Main from './features/main/Main';
import Error from './features/error/Error';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import Bank from './features/bank/Bank';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: ':item/',
        element: <Main />,
        children: [
          {
            path: ':bank/',
            element: <Bank />,
          }
        ]
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
