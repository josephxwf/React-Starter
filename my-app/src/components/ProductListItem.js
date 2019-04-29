import React from 'react';
import {  Col,Card,Button } from 'react-bootstrap';
import holderimage from '../holderimage.png';


class ProductListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }
  onClickClose() {
    var index = parseInt(this.props.index);
    this.props.removeItem(index);
  }
  onClickDone() {
    var index = parseInt(this.props.index);
    this.props.likeDone(index);
  }
  render () {
    var todoClass = this.props.item.done ?
        "done" : "undone";
    return(



      <Col xs={12} md={3}>
      <a
          href={"/products/" + this.props.index}
          style={{
            textDecoration: "none",
            color: "black"
          }}
        >
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={holderimage} />
          <Card.Body>
            <Card.Title>Product Item</Card.Title>
            <Card.Text>

              <div className={todoClass}>
                <span aria-hidden="true" onClick={this.onClickDone}>  <i class="fa fa-thumbs-up"></i></span>
                {this.props.item.value}

              </div>
            </Card.Text>

            <Button className="close" onClick={this.onClickClose}>&times;</Button>
          </Card.Body>
        </Card>
      </a>



      </Col>

    );
  }
}


export default ProductListItem;
