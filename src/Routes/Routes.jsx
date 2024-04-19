import {createBrowserRouter} from "react-router-dom";
import Home from './../Pages/Home/Home';
import Login from './../Pages/Login/Login';
import Register from './../Pages/Register/Register';
import MetroInfo from './../Pages/MetroInfo/MetroInfo';
import Contact from './../Pages/Contact/Contact';
import Main from './../Layout/Main';
import Recharge from './../Pages/Recharge/Recharge';
import TicketInfo from './../Pages/TicketInfo/TicketInfo';
import PrivateRoute from './../Provider/PrivateRoute';


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
          },
          {
            path:'/recharge',
            element:<PrivateRoute><TicketInfo></TicketInfo></PrivateRoute>
          },
          {
            path:'/ticketinfo',
            element:<PrivateRoute><TicketInfo></TicketInfo></PrivateRoute>
          }
      ]
    },
  ]);
  export default router;