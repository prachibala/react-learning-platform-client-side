import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs";
import CheckOut from "../Pages/Courses/CheckOut";
import Courses from "../Pages/Courses/Courses";
import SingleCourse from "../Pages/Courses/SingleCourse";
import Faqs from "../Pages/Faqs";
import Home from "../Pages/Home";
import LogIn from "../Pages/LogIn";
import PrivateRoute from "../Pages/PrivateRoute";
import Register from "../Pages/Register";
import NotFound from "../Pages/ErrorPage/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/courses",
                element: <Courses></Courses>,
            },
            {
                path: "/faq",
                element: <Faqs />,
            },
            {
                path: "/courses/:courseId",
                element: <SingleCourse />,
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>,
            },
            {
                path: "/login",
                element: <LogIn></LogIn>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/checkout/:id",
                element: (
                    <PrivateRoute>
                        <CheckOut></CheckOut>
                    </PrivateRoute>
                ),
            },
            {
                path: "*",
                element: <NotFound></NotFound>,
            },
        ],
    },
]);
