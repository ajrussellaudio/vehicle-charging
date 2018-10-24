import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import ConnectedLocationsList from "../containers/ConnectedLocationsList";

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <ConnectedLocationsList />
          </Col>
          <Col lg={3}>Form</Col>
        </Row>
      </Container>
    );
  }
}

export default App;
