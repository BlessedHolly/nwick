import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import News from "./pages/News/News";
import About from "./pages/About/About";
import Top from "./pages/Top/Top";

function AppRotes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <News />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "top",
          element: <Top />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRotes;
