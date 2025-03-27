import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Cadastro from "./components/Cadastro/Cadastro.jsx";
import Login from "./components/Login/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cadastro",
        element: <Cadastro />,
      },
    ],
  },
]);

export default router;
