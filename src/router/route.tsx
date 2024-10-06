import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import Problem1 from "../pages/problem-1";
import Problem2 from "../pages/problem-2";
import Problem3 from "../pages/problem-3";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/problem-1",
        element: <Problem1 />,
      },
      {
        path: "/problem-2",
        element: <Problem2 />,
      },
      {
        path: "/problem-3",
        element: <Problem3 />,
      },
    ],
  },
]);

export { router };
