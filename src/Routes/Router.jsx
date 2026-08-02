import { createBrowserRouter } from "react-router";
import AuthRoutes from "./AuthRoutes";
import PublicRoutes from "./PublicRoutes";

const Router = createBrowserRouter([...PublicRoutes, ...AuthRoutes]);

export default Router;
