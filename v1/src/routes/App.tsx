import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
import Work from "../pages/Work";
import WorkSingle from "../pages/WorkSingle";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/work", element: <Work /> },
      { path: "/work/:title", element: <WorkSingle /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
