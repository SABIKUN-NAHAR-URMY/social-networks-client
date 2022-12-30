import { createBrowserRouter } from "react-router-dom";
import Media from '../Media/Media';
import Main from "../Main/Main";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import About from "../About/About";
import Message from "../Message/Message";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import DetailsPost from "../Media/DetailsPost/DetailsPost";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <PrivateRoute><Media></Media></PrivateRoute>
            },
            {
                path: '/about',
                element: <About></About>
            },

            {
                path:'/details/:id',
                element: <DetailsPost></DetailsPost>,
                loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
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