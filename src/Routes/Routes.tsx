import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            //{path: "signup", element: <SignUpPage />},
            //{path: "login", element: <LoginPage />}
        ]
    },
    {
        path: "/home-page",
        element: <HomePage/>
    }
])