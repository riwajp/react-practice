import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.tsx";
import Task1 from "./tasks/jsx-components-props/index.tsx";
import Task3 from "./tasks/conditional-rendering-lists/index.tsx";
import Task2 from "./tasks/state-event-handeling/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/conditional-rendering-lists",
    element: <Task3 />,
  },
  {
    path: "/state-event-handeling",
    element: <Task2 />,
  },
  {
    path: "/jsx-components-props",
    element: <Task1 />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
