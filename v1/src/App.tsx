import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import Homepage from './pages/Homepage';
import Works from './pages/Works';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Notes from './pages/Notes';
import Note from './pages/Note';
import ErrorPage from './pages/ErrorPage';
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Homepage /> },

      { path: '/work', element: <Works /> },

      { path: '/work/:id', element: <Work /> },

      { path: '/about', element: <About /> },

      { path: '/contact', element: <Contact /> },

      { path: '/notes', element: <Notes /> },

      { path: '/note/:id', element: <Note /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
