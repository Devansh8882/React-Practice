import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './index.css'
// import App from './App.jsx'
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import Home from './components/home/home.jsx';
import Layout from './layout.jsx';
const router = createBrowserRouter([
  {
    path:"/",
    element : <Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"header",
        element:<Header/>
      },
      {
        path:"foot",
        element:<Footer/>
      },
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Footer/> */}
    <RouterProvider router = {router}/>

  </StrictMode>
)
