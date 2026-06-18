import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Blog from "./Blog";
// import About from "./About";
// import Article from "./Article";
import NotFound from "./NotFound";


const router = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "Home", element: <Home /> },
      { path: "Blog", element: <Blog /> },
      // { path: "About", element: <About /> },
      // {path: "article/:id", element: <Article /> },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
