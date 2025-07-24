import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
import Work from "../pages/Work";
import WorkSingle from "../pages/WorkSingle";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Archive from "../pages/Archive";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "work", element: <Work /> },
      { path: "/work/:title", element: <WorkSingle /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/archive", element: <Archive /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
