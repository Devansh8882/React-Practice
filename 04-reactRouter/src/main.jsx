import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider,createRoutesFromElements , Route} from "react-router-dom";
import './index.css'
// import App from './App.jsx'
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import Home from './components/home/home.jsx';
import Layout from './layout.jsx';


// const router = createBrowserRouter([
//   {
//     path:"/",
//     element : <Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"header",
//         element:<Header/>
//       },
//       {
//         path:"foot",
//         element:<Footer/>
//       },
      
//     ]
//   }
// ])

//  we can do the same thing another way also....

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "" element ={<Layout />}>
        <Route path = "" element ={<Home />} />
        <Route path = "header" element ={<Header />} />
        <Route path = "foot" element ={<Footer />} />
    </Route>
    // <Router>
   
    // </Router>
  )
)


//.........
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Footer/> */}
    <RouterProvider router = {router}/>

  </StrictMode>
)
