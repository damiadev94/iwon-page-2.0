import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import "./output.css"
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from "./pages/Home.jsx";
import Works from "./pages/Works.jsx";
import Precios from "./pages/Precios.jsx";
import Contacto from "./pages/Contacto.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/works",
    element: <Works/>
  },
  {
    path: "/precios",
    element: <Precios/>
  },
  {
    path: "/contacto",
    element: <Contacto/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
