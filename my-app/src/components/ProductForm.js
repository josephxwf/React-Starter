import React from 'react';
import { Button,Form, Col  } from 'react-bootstrap';

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    //this.onSubmit = this.onSubmit.bind(this);
    this.state = { validated: false };
  }
  componentDidMount() {
    //this.refs.itemName.focus();
  }

  /*
  onSubmit(event) {
    event.preventDefault();
    var newItemValue = this.refs.itemName.value;

    if(newItemValue) {
      this.props.addItem({newItemValue});
      this.refs.form.reset();
    }
  }
  */

  handleSubmit = (event) => {
   event.preventDefault()
   var newItemValue = event.target.product.value;
   if(newItemValue) {
     this.props.addItem({newItemValue});
     this.refs.form.reset();
   }

   //console.log(newItemValue)

 }


 render() {
   return (
    <form ref="form" onSubmit={this.handleSubmit} className="form-inline">
      <input type="text"  name = "product" className="form-control" placeholder="add a new product..."/>
      <button type="submit" className="">Add</button>
    </form>
  );
 }


/*
  render() {
    return (
     <form ref="form" onSubmit={this.onSubmit} className="form-inline">
       <input type="text" ref="itemName" className="form-control" placeholder="add a new product..."/>
       <button type="submit" className="">Add</button>
     </form>
   );
  }

  */

}

export default ProductForm;
