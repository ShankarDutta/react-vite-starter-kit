import PublicLayout from "@/Layouts/PublicLayout";
import About from "@/pages/About";
import Home from "@/pages/Home";

const PublicRoutes = [
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
];

export default PublicRoutes;
