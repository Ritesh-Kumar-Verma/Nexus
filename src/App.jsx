import React from 'react'
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";

const App = () => {

  
 
 const requireAuth = () => {
   const token = localStorage.getItem("jwttoken");
   if (!token) {
     throw redirect("/login");
   }
   return null
 };
 
 const router = createBrowserRouter([
  
   {
     path: "/login",
     element: <Login />,
   },
   {
     path: "*",
     element: <NotFoundPage />,
   },
   {
     loader: requireAuth,
     children: [
       {
         path: "/",
         element: <Home />,
       },
       {
         path: "/home",
         element: <Home />,
       },
     ],
   },
 ],{basename:"/Nexus"});
 
  return (
      <RouterProvider router={router}/>
    
  )
}

export default App