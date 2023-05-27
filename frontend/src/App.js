
import './App.css';
import {RouterProvider, createBrowserRouter } from 'react-router-dom'

import router from './Config/routes'
import Navbar from './Pages/Compnents/Navbar/indexN';

function App() {
  
  return (
   <>
      <RouterProvider router={router} />
     
   </>
  );
}

export default App;
