import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import Body from './components/Body';
import Resmenu from './components/Resmenu';

const AppLayout = createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[{
    path:"/about",
    element:<About/>,
  },{
      path:"/",
      element:<Body/>,
  },
  {
      path:"/contact",
      element:<Contact/>,
  },
  {
    path:"/restarunts/:resId",
    element:<Resmenu/>,
}],
  errorElement:<Error/>,
},]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={AppLayout} />
  </StrictMode>,
)
