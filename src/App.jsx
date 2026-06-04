import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Blog from "./Blog";
import About from "./About";

const router = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "Home", element: <Home /> },
      { path: "Blog", element: <Blog /> },
      { path: "About", element: <About /> },
      {
        path: "*",
        element: <h1>404 Not Found</h1>,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
