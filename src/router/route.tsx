import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import Problem2 from "../pages/problem-2";

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
        path: "/problem-2",
        element: <Problem2 />,
      },
    ],
  },
]);

export { router };
