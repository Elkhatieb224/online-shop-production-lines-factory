import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; TECHNICAL CENTER PHONE:01010002889 </Col>
          <Col className='text-center py-3'>Address: Plot 168/9, 3rd Industrial Zone, 6th of October City
 </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
