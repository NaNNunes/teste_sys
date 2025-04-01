import { createBrowserRouter } from 'react-router-dom'

import App from './App.jsx';
import Login from './components/login/Login.jsx';
import Cadastro from './components/cadastro/Cadastro.jsx';

const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children: [
            {
                path:'/',
                element:<Login/>
            },
            {
                path:'/cadastro',
                element: <Cadastro/>
            }
        ]
    }
]);

export default router;