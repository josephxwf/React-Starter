import React from 'react';
import logo from '../logo.svg';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
  //  this.selectPolicy = this.selectPolicy.bind(this);
    this.state = { policy: 'General Liability' };
  }

  componentDidMount () {


 }


  render() {

   const { pid } = this.props.match.params;
   console.log(pid);


  return(

     <h1> Product ID is: {pid}</h1>
)
}
}
export default ProductDetail;
