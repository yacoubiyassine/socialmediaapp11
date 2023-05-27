import { createBrowserRouter } from "react-router-dom"
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Register from "../Pages/Register"
import PageNotFound from "../Pages/PageNotFound";
import People from "../Pages/Compnents/People/People";
import Photos from "../Pages/Compnents/Photos/Photos";
import Mainpost from "../Pages/Compnents/Mainpost/Mainpost";


const router = createBrowserRouter([
    {
       path : '/',
       element : <div> Home page </div>,
       errorElement : <PageNotFound />
  },
  {
    path : '/login',
    element : <Login />
   },
  {
    path : '/register',
    element : <Register />
  },
  {
    path : '/home',
    element : <Home />
  },
  {
    path : '/people',
    element : <People />
  },
  {
    path : '/photos',
    element : <Photos />
  },
  {
    path : '/MainPost',
    element : <Mainpost />
  },

])
 
export default router;

