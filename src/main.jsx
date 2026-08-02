import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import Provider from "./components/Providers/Provider";

import "./index.css";
import Router from "./routes/Router";

createRoot(document.getElementById("root")).render(
  <Provider>
    <RouterProvider router={Router} />
  </Provider>,
);
