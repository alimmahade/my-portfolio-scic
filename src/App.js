import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AboutMe from "./AboutMe";
import "./App.css";
import Blog from "./Blog";
import Contact from "./Contact";
import Home from "./Home";
import Main from "./Main";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";

function App() {
  <ToastContainer position="top-center" />;
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "/aboutme",
          element: <AboutMe></AboutMe>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/project1",
          element: <Project1 />,
        },
        {
          path: "/project2",
          element: <Project2 />,
        },
        {
          path: "/project3",
          element: <Project3 />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
