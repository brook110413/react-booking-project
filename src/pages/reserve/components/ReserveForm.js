import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import color from '@Style/color';
import { setReserveInfo } from '@Actions/globalAction';

const ReserveForm = ({ setPage }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setPage(1);
    dispatch(setReserveInfo(data));
  };

  return (
    <StyledWrapper>
      <div className="FormTitle">Reservation details</div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            {...register('name', { required: 'this is required' })}
            type="text"
            placeholder="Enter your name"
          />
          {errors.name && <StyledErrMsg>{errors.name.message}</StyledErrMsg>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            {...register('email', { required: 'this is required' })}
            type="email"
            placeholder="Enter your email"
          />
          {errors.email && <StyledErrMsg>{errors.email.message}</StyledErrMsg>}
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
          {errors.phone && <StyledErrMsg>{errors.phone.message}</StyledErrMsg>}
        </Form.Group>

        <StyledButton type="submit">Reserve</StyledButton>
      </Form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
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
`;

const StyledErrMsg = styled.div`
  margin-top: 8px;
  color: ${color.error};
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 56px;
`;

ReserveForm.propTypes = {
  // 成功預定的內頁
  setPage: PropTypes.func.isRequired,
};

export default ReserveForm;
