import React from'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Menu from './Pages/Menu'
import Support from './Pages/Support'
import Api from './Pages/Api'


function Routing() {
    return (
      <div>
        <Routes>
            <Route path ='/' Component = {Home}></Route>
            <Route path ='/about' Component = {About}></Route>
            <Route path ='/menu' Component = {Menu}></Route>
            <Route path ='/support' Component = {Support}></Route>
            <Route path ='/api' Component = {Api}></Route>

        </Routes>
       
      </div>
    );
  }
  
export default Routing