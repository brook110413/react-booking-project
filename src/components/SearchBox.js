import React from 'react';
import styled, { css } from 'styled-components';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';

import 'react-datepicker/dist/react-datepicker.css';

import BasicCheckedSelect from '@Components/BasicCheckedSelect';
import color from '@Style/color';
import { device } from '@Style/browser';

import { setSearchCondition } from '@Actions/globalAction';

const SearchBox = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const { handleSubmit, control } = useForm();

  const searchCondition = useSelector((state) => state.global.searchCondition);

  const options = [
    { value: 'Bangkok', label: 'Bangkok' },
    { value: 'Osaka', label: 'Osaka' },
    { value: 'Roma', label: 'Roma' },
    { value: 'Paris', label: 'Paris' },
    { value: 'Reykjavik', label: 'Reykjavik' },
  ];

  const onSubmit = (data) => {
    data.destination = data.destination?.value;
    if (data.destination && data.checkIn && data.checkOut) {
      dispatch(setSearchCondition(data));
    }
    history.push('/searchResult');
  };

  return (
    <StyledSearchBoxContainer pathname={location.pathname}>
      <StyledForm
        onSubmit={handleSubmit(onSubmit)}
        pathname={location.pathname}
      >
        <Controller
          name="destination"
          control={control}
          as={BasicCheckedSelect}
          options={options}
          placeholder="Destination"
          defaultValue={
            (location.pathname === '/searchResult' ||
              location.pathname === '/detail') && {
              value: searchCondition.destination,
              label: searchCondition.destination,
            }
          }
          disabled={
            location.pathname === '/searchResult' ||
            location.pathname === '/detail'
          }
        />

        <Controller
          control={control}
          name="checkIn"
          render={({ onChange, value }) => (
            <StyledDatePicker
              pathname={location.pathname}
              placeholderText="Check-in"
              className="open-sans"
              selected={
                location.pathname === '/searchResult' ||
                location.pathname === '/detail'
                  ? new Date(searchCondition.checkIn)
                  : value
              }
              onChange={onChange}
              minDate={new Date()}
              showDisabledMonthNavigation
              showPopperArrow={false}
              todayButton="today"
              dateFormat="yyyy/MM/dd"
              disabled={
                location.pathname === '/searchResult' ||
                location.pathname === '/detail'
              }
            />
          )}
        />

        <Controller
          control={control}
          name="checkOut"
          render={({ onChange, value }) => (
            <StyledDatePicker
              pathname={location.pathname}
              placeholderText="Check-out"
              className="open-sans"
              selected={
                location.pathname === '/searchResult' ||
                location.pathname === '/detail'
                  ? new Date(searchCondition.checkOut)
                  : value
              }
              onChange={onChange}
              minDate={new Date()}
              showDisabledMonthNavigation
              showPopperArrow={false}
              todayButton="today"
              dateFormat="yyyy/MM/dd"
              disabled={
                location.pathname === '/searchResult' ||
                location.pathname === '/detail'
              }
            />
          )}
        />

        {location.pathname !== '/searchResult' &&
          location.pathname !== '/detail' && (
            <StyledButton type="submit">SEARCH</StyledButton>
          )}
      </StyledForm>
    </StyledSearchBoxContainer>
  );
};

const StyledSearchBoxContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${color.secondary};
  padding: 24px;
  border-radius: 8px;
  max-width: 920px;
  margin: 0 auto;
  transform: translateY(-50px);

  ${(props) =>
    (props.pathname === '/searchResult' || props.pathname === '/detail') &&
    css`
      max-width: 100%;
      transform: translateY(0);
      padding: 24px 0;
    `}

  .react-datepicker__tab-loop {
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .select-container {
    ${(props) =>
      (props.pathname === '/searchResult' || props.pathname === '/detail') &&
      css`
        cursor: not-allowed;
      `}
  }

  .react-datepicker-wrapper {
    width: 232px;

    /* ${device.tablet} {
      width: 100%;
    } */
  }
`;

const StyledForm = styled(Form)`
  display: flex;
  gap: 16px;
  width: 100%;

  ${(props) =>
    (props.pathname === '/searchResult' || props.pathname === '/detail') &&
    css`
      justify-content: center;
      gap: 56px;
    `}/* ${device.tablet} {
    display: block;
  } */
`;

const StyledInputContainer = styled.div``;

const StyledDatePicker = styled(DatePicker)`
  height: 56px;
  width: 232px;
  border-radius: 4px;
  border: none;
  background: url(images/event.svg) no-repeat 18px center ${color.white};
  padding: 0 0 0 56px;

  ${(props) =>
    (props.pathname === '/searchResult' || props.pathname === '/detail') &&
    css`
      cursor: not-allowed;
    `}
`;

const StyledButton = styled(Button)`
  width: 128px;
`;

SearchBox.propTypes = {};

export default SearchBox;
