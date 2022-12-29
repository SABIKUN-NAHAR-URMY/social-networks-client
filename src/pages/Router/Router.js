import { createBrowserRouter } from "react-router-dom";
import Media from '../Media/Media';
import Main from "../Main/Main";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import About from "../About/About";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Media></Media>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/Signup',
                element: <Signup></Signup>
            }
        ]
    }
])