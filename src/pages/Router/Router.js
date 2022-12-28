import { createBrowserRouter } from "react-router-dom";
import Media from '../Media/Media';
import Main from "../Main/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Media></Media>
            }
        ]
    }
])