import { createBrowserRouter } from "react-router-dom";
import Media from '../Media/Media';
import Main from "../Main/Main";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import About from "../About/About";
import Message from "../Message/Message";

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
                path:'/posts/:id',
                element: <Media></Media>,
                loader: ({params}) => fetch(`http://localhost:5000/posts/${params.id}`)
            },

            {
                path: '/message',
                element: <Message></Message>
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