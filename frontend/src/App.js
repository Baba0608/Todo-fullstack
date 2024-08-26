import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";

import userContext from "./contexts/userContext";
import { useState } from "react";
import Home from "./components/Home";

const AppLayout = () => {
  const [userName, setUserName] = useState("");
  return (
    <userContext.Provider value={{ userName, setUserName }}>
      <div>
        <Header />
        <Outlet />
      </div>
    </userContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
