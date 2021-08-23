import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import color from '@Style/color';

const Reserve = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const count = useSelector((state) => state.global.count);
  const chosenHotel = useSelector((state) => state.global.chosenHotel);

  const [vat] = useState(277);
  const [serviceCharge] = useState(396);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <StyledWrapper className="open-sans">
      <Container>
        <Row className="justify-content-center">
          <Col lg={4}>
            <div className="FormTitle">Reservation details</div>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  {...register('name', { required: 'this is required' })}
                  type="text"
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <StyledErrMsg>{errors.name.message}</StyledErrMsg>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  {...register('email', { required: 'this is required' })}
                  type="email"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <StyledErrMsg>{errors.email.message}</StyledErrMsg>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  {...register('phone', {
                    required: 'this is required',
                    minLength: {
                      value: 10,
                      message: 'your phone number needs 10 numbers',
                    },
                  })}
                  type="tel"
                  placeholder="Enter your phone"
                  maxLength="10"
                />
                {errors.phone && (
                  <StyledErrMsg>{errors.phone.message}</StyledErrMsg>
                )}
              </Form.Group>

              <StyledButton type="submit">Reserve</StyledButton>
            </Form>
          </Col>
          <Col lg={4}>
            <div className="bookingDetailContainer">
              <div className="detailWrapper">
                <div className="detailTitle">Booking details</div>
                <div className="detailContent">
                  <div>{`17 June 2021 - 19 June 2021・${
                    count !== 0 ? count : 2
                  } nights`}</div>
                  <div>2 adults・1 room</div>
                  <div>{chosenHotel.name}</div>
                </div>
              </div>

              <div className="detailWrapper">
                <div className="detailTitle">Price summary</div>
                <div className="detailContent">
                  <div className="d-flex justify-content-between">
                    <span>{chosenHotel.roomType}</span>
                    <span>
                      {`TWD ${(
                        chosenHotel.cost * (count !== 0 ? count : 2)
                      ).toLocaleString()}`}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>{`VAT (7%)`}</span>
                    <span>{`TWD ${vat}`}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>{`Property service charge`}</span>
                    <span>{`TWD ${serviceCharge}`}</span>
                  </div>
                </div>
              </div>

              <div
                className="d-flex justify-content-between align-items-center fw-bold"
                style={{ height: 105 }}
              >
                <span>Total</span>
                <span>{`TWD ${(
                  chosenHotel.cost * (count !== 0 ? count : 2) +
                  vat +
                  serviceCharge
                ).toLocaleString()}`}</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 48px 0 0 0;

  .FormTitle {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 24px;
  }

  .form-label {
    color: ${color.darkGray};
  }

  .form-control {
    height: 56px;
  }

  .bookingDetailContainer {
    background-color: ${color.secondary};
    border-radius: 8px;
    padding: 0 24px;
    /* margin-bottom: 24px; */

    .detailWrapper {
      padding: 24px 0;
      margin-bottom: 24px;
      border-bottom: 1px solid ${color.white};

      &:nth-child(2) {
        padding-top: 0;
        margin-bottom: 0;
      }

      .detailTitle {
        font-weight: bold;
        margin-bottom: 16px;
      }

      .detailContent {
        display: flex;
        flex-direction: column;
        color: ${color.darkGray};
        gap: 12px;
        font-size: 14px;
      }
    }
  }
`;

const StyledErrMsg = styled.div`
  margin-top: 8px;
  color: ${color.error};
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 56px;
`;

Reserve.propTypes = {};

export default Reserve;
