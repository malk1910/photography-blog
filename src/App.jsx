import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Blog from "./Blog";
import About from "./About";
import Lighting from "./Lighting";
import Portrait from "./Portrait";
import Landscapes from "./Landscapes";
import Tech from "./Tech";
import Tools from "./Tools";



const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "Home", element: <Home /> },
      { path: "Blog", element: <Blog /> },
      { path: "About", element: <About /> },
      { path: "Lighting", element: <Lighting /> },
      { path: "Portrait", element: <Portrait /> },
      { path: "Landscapes", element: <Landscapes /> },
      { path: "Tech", element: <Tech /> },
      { path: "Tools", element: <Tools /> },


    ],
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
