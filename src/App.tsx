import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AppContainer from "./components/layout/AppContainer";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Topics from "./pages/Topics";
import Progress from "./pages/Progress";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <AppContainer />,
    children: [
      {
        index: true,
        element: <Dashboard/>,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "topics",
        element: <Topics />,
      },
      {
        path: "progress",
        element: <Progress />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return( 
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
