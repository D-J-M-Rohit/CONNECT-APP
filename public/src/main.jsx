import React from "react";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Chat from "./pages/Chat.jsx";
import SetAvatar from "./pages/SetAvatar.jsx";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/setAvatar",
    element: <SetAvatar />,
  },
]);

createRoot(document.getElementById("root")).render( // Use createRoot from react-dom/client
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
