import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { Button,Container, Row, Col  } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />

        <Container>
          <Row>
            <Col>

             <Button variant="primary">Primary</Button>



            </Col>
            <Col>2 of 2</Col>
          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>

     <Footer />

      </div>
    );
  }
}

export default App;
