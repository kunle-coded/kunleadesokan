import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Work from "./pages/Work";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/work", element: <Work /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
