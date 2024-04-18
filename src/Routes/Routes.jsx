import {createBrowserRouter} from "react-router-dom";
import Home from './../Pages/Home/Home';
import Login from './../Pages/Login/Login';
import Register from './../Pages/Register/Register';
import MetroInfo from './../Pages/MetroInfo/MetroInfo';
import Contact from './../Pages/Contact/Contact';
import Main from './../Layout/Main';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
          {
            path:'/login',
            element:<Login></Login>
          },
          {
            path:'/register',
            element:<Register></Register>
          },
          {
             path:'/metroinfo',
             element:<MetroInfo></MetroInfo>
          },
          {
            path:'/contact',
            element:<Contact></Contact>
          }
      ]
    },
  ]);
  export default router;