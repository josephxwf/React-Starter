import React, { Component } from 'react';
import logo from './logo.svg';


import ProductForm from   './components/ProductForm'
import ProductList from   './components/ProductList'
import ProductDetail from   './components/ProductDetail'
import Home from   './components/Home'

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';




function App(){


    return (

      <BrowserRouter>

         <Switch>
          
             <Route path='/products/:id' component={ ProductDetail  } />
             <Route exact path='/' component={Home } />
             <Redirect from='*' to='/' />
         </Switch>

      </BrowserRouter>


    );

}


export default App;
