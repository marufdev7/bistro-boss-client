import { createBrowserRouter, } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ContactUs from "../pages/ContactUs/ContactUs";
import Menu from "../pages/Menu/Menu/Menu";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/contact-us',
                element: <ContactUs />
            },
            {
                path: '/menu',
                element: <Menu />
            }
        ]
    },
]);
