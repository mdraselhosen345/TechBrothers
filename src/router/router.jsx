import { createBrowserRouter } from "react-router";
import RootLayout from '../Layout/RootLayout';
import Home from '../Component/Home/Home'
import Footer from '../Component/Footer/Footer';
import Navbar from "../Component/Navbar/Navbar";
import Bannar from "../Component/Bannar/Bannar";
import Services from "../Component/Services/Services";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "Navbar",
                Component: Navbar
            },
            {
                path: "Bannar",
                Component: Bannar
            },
            {
                path: "Services",
                Component: Services
            },
            {
               path: "Footer",
               Component: Footer
            }

        ]
    },
]);



