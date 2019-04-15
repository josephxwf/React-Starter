import React from 'react';
import ProductListItem from   './ProductListItem'
import {  Row  } from 'react-bootstrap';

class ProductList extends React.Component {
  render () {
    var items = this.props.items.map((item, index) => {
      return (

        <ProductListItem key={index} item={item} index={index} removeItem={this.props.removeItem} likeDone={this.props.likeDone} />
      );
    });
    return (

      <Row>
       {items}
     </Row>

    );
  }
}

export default ProductList;
