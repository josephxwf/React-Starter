import React from 'react';
import logo from '../logo.svg';
import ReactDOM from 'react-dom';

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
   const elem =  <h1> Product ID is: {pid} </h1>; 


    return ReactDOM.createPortal(
        elem ,
        document.getElementById('root2')
      );


}
}
export default ProductDetail;
