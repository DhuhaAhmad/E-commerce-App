import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";
import './App.css'
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Product } from "./pages/Product/Product";
import { Products } from "./pages/Products/Products";


const Layout = ()=>{

  return(
    <div className="app">
      <Navbar/>
    <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
 {
    path:"/",
    element:<Home/>
  },
 {
  // category
    path:"/products/:id",
    element:<Products/>
  },
  {
    path:"/product/:id",
    element:<Product/>
  }

    ]
  }
 
])
function App() {



  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
