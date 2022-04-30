import React from "react";
import { Route, BrowserRouter} from "react-router-dom";

import Maps from "./components/Map";
import Home from './components/Home'
import Nav from "./components/Nav";


const Routes = () => {
    return(
        <BrowserRouter>
            <Route component = { Home }  path="/" exact/>
            <Route component = {Nav} path="/nav" />
            <Route component = { Maps }  path="/maps" />
        </BrowserRouter>
    )
 }
 
 export default Routes;