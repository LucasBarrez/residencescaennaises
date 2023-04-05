import Header from "./components/Header/Header";
import React from "react";
import {Link, Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";

import Home from "./routes/Home";
import Agrandissement from "./routes/Agrandissement";
import Renovation from "./routes/Renovation";
import Actu from "./routes/Actu";
import Contact from "./routes/Contact";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<Home/>}/>
        <Route  element={<Construction/>}/>
        <Route element={<Agrandissement/>}/>
        <Route element={<Renovation/>}/>
        <Route element={<Actu/>}/>
        <Route element={<Contact/>}/>
      </Route>
    )
  );
    return (
      <div className="App">
        <RouterProvider router={router}/>
      </div>
    );
  }
  
  export default App;