import AuthLayout from "@/Layouts/AuthLayout";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";

const AuthRoutes = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];

export default AuthRoutes;
