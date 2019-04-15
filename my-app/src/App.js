import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import ProductForm from   './components/ProductForm'
import ProductList from   './components/ProductList'

import { Button,Container, Row, Col  } from 'react-bootstrap';

/*
product app structure

productApp
	- productHeader
	- productList
    - productListItem #1
		- productListItem #2
		  ...
		- productListItem #N
	- productForm
*/
var productItems = [];
productItems.push({index: 1, value: "learn react", done: false});
productItems.push({index: 2, value: "Go shopping", done: true});
productItems.push({index: 3, value: "buy flowers", done: true});


class App extends React.Component {
  constructor (props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.likeDone = this.likeDone.bind(this);
    this.state = {productItems: productItems};
  }
  addItem(productItem) {
    productItems.unshift({
      index: productItems.length+1,
      value: productItem.newItemValue,
      done: false
    });
    this.setState({productItems: productItems});
  }
  removeItem (itemIndex) {
    productItems.splice(itemIndex, 1);
    this.setState({productItems: productItems});
  }
  likeDone(itemIndex) {
    var product = productItems[itemIndex];
    //productItems.splice(itemIndex, 1);
    product.done = !product.done;
    //product.done ? productItems.push(product) : productItems.unshift(product);
    this.setState({productItems: productItems});
  }
  render() {
    return (
      <div id="main">
        <Header />

        <Container>
          <ProductForm addItem={this.addItem} />
          <ProductList items={this.state.productItems} removeItem={this.removeItem} likeDone={this.likeDone}/>


        </Container>
        <Footer />
      </div>
    );
  }
}


export default App;
