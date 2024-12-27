import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Page404 from "./pages/Page404";


function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
    setShowAnimation(true);
  };

  useEffect(() => {
    if (showAnimation) {
      const timeout = setTimeout(() => {
        setShowAnimation(false);
      }, 500); // Adjust the duration as needed
      return () => clearTimeout(timeout);
    }
  }, [showAnimation]);

 
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Page404 />,
      children: routes,
    },
  ]);

  return (
    
      <RouterProvider router={router} />
 
  );
}

export default App;
