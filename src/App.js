import React from 'react';
import {
  Route,
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Root from './containers/Root';
import Home from './containers/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
