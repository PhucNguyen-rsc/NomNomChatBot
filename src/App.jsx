import { Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from './routes/homepage/Homepage.jsx';
import DashboardPage from './routes/dashboardPage/dashboardPage.jsx';
import ChatPage from './routes/chatPage/chatPage.jsx';
import RootLayout from "./layouts/root_layout/rootLayout.jsx";
import DashboardLayout from "./layouts/dashboardLayout/dashboardLayout.jsx";
import SigninPage from "./routes/signinPage/signinPage.jsx";
import SignupPage from "./routes/signupPage/signupPage.jsx";

import './index.css'

{/*Clerk usually throws some weird extra path after sign up/in page */}
const router = createBrowserRouter([ 
  {
    element: <RootLayout />,
    children : [
      {
        path: "/",
        element: <Homepage />
      },
      {
        path: "/sign-in/*" ,
        element: <SigninPage />
      },
      {
        path: "/sign-up/*",
        element: <SignupPage />
      },
      {
        element: <DashboardLayout />,
        children:[
          {
            path: "/dashboard",
            element:<DashboardPage />
          },
          {
            path: "/dashboard/chats",
            element:<ChatPage />
          }
        ]
      }
    ]
  }
])


const App = () => {
  return (
    <RouterProvider router={router} />  
  )
}

export default App