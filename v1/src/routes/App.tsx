import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
import Work from "../pages/Work";
import WorkSingle from "../pages/WorkSingle";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/work", element: <Work /> },
      { path: "/work/:title", element: <WorkSingle /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
