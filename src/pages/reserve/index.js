import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import ReserveForm from './components/ReserveForm';
import BookingDetail from './components/BookingDetail';
import ReserveSuccess from './components/ReserveSuccess';

const Reserve = () => {
  const [page, setPage] = useState(0);

  return (
    <StyledWrapper className="open-sans">
      <Container>
        <Row className="justify-content-center">
          {page === 0 ? (
            <>
              <Col lg={4}>
                <ReserveForm setPage={setPage} />
              </Col>
              <Col lg={4}>
                <BookingDetail />
              </Col>
            </>
          ) : (
            <Col lg={6}>
              <ReserveSuccess />
            </Col>
          )}
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
