import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RegisterPage from "../pages/RegisterPage";
import CheckEmailPage from "../pages/CheckEmailPage";
import CheckPassword from "../pages/CheckPassword";
import Home from "../pages/Home";
import MessagePage from "../components/MessagePage";
import AuthLayOut from "../layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "register",
        element: (
          <AuthLayOut>
            <RegisterPage />
          </AuthLayOut>
        ),
      },
      {
        path: "email",
        element: (
          <AuthLayOut>
            <CheckEmailPage />
          </AuthLayOut>
        ),
      },
      {
        path: "password",
        element: (
          <AuthLayOut>
            <CheckPassword />
          </AuthLayOut>
        ),
      },
      {
        path: "",
        element: <Home />,
        children: [
          {
            path: ":userId",
            element: <MessagePage />,
          },
        ],
      },
    ],
  },
]);

export default router;
