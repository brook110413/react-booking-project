import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import ReserveForm from './components/ReserveForm';
import BookingDetail from './components/BookingDetail';

const Reserve = () => {
  return (
    <StyledWrapper className="open-sans">
      <Container>
        <Row className="justify-content-center">
          <Col lg={4}>
            <ReserveForm />
          </Col>
          <Col lg={4}>
            <BookingDetail />
          </Col>
        </Row>
      </Container>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 48px 0 0 0;
`;

Reserve.propTypes = {};

export default Reserve;
