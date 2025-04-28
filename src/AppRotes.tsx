import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import News from "./pages/News/News";
import About from "./pages/About/About";
import Securities from "./pages/Securities/Securities";
import PieceOfNews from "./pages/PieceOfNews/PieceOfNews";

import NotFound from "./pages/NotFound/NotFound";

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
          path: ":id",
          element: <PieceOfNews />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "securities",
          element: <Securities />,
        },
        {
          path: "not-found",
          element: <NotFound />,
        },
        {
          path: "*",
          element: <Navigate to="not-found" />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRotes;
