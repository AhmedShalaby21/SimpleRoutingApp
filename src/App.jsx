import { Component } from "react";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";
  import { RouterProvider, createBrowserRouter} from "react-router-dom";





const myRouter = createBrowserRouter(
  [ 
    { path: '/', element:<Home />},
    { path: '/home', element:<Home />},
    { path: '/about', element:<About />},
    { path: '/contact', element:<Contact />},
    { path: '/portfolio', element:<Portfolio />},
    { path: '*', element: <h1>404 page not found</h1>},



  ]
)
export class App extends Component{

state = {
  
}
render(){
  return <>
   <RouterProvider  router={myRouter}/>

  </>
}




}