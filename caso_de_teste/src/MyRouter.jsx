import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Login from "./componentes/login/Login.jsx";
import Cadastro from "./componentes/cadastro/Cadastro.jsx";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        children: [
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/cadastro",
                element:<Cadastro/>
            }
        ]
    },
]); 

export default router;