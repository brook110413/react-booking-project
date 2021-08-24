import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { MdLocationOn } from 'react-icons/md';

import BasicCheckedSelect from '@Components/BasicCheckedSelect';
import color from '@Style/color';

const SearchBox = () => {
  const history = useHistory();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const options = [
    { value: 'Bangkok', label: 'Bangkok' },
    { value: 'Osaka', label: 'Osaka' },
    { value: 'Roma', label: 'Roma' },
    { value: 'Paris', label: 'Paris' },
    { value: 'Reykjavk', label: 'Reykjavk' },
  ];

  const onSubmit = (data) => {
    console.log(data);
    // history.push('/searchResult');
  };

  return (
    <StyledSearchBoxContainer pathname={location.pathname}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        {/* <BasicCheckedSelect
          options={options}
          placeholder={[
            <MdLocationOn
              color={color.black}
              size={24}
              key={0}
              className="me-3"
            />,
            'Destination',
          ]}
          {...register('destination')}
        /> */}

        {/* <StyledSelect {...register('destination')}>
          <option value="" disabled selected="selected">
            Destination
          </option>
          {options.map((o) => (
            <option value={o.value} key={o.value}>
              {o.label}
            </option>
          ))}
        </StyledSelect> */}

        {/* <Button type="submit" onClick={() => history.push('/searchResult')}>
          SEARCH
        </Button> */}
      </StyledForm>

      <BasicCheckedSelect
        options={options}
        placeholder={[
          <MdLocationOn
            color={color.black}
            size={24}
            key={0}
            className="me-3"
          />,
          'Destination',
        ]}
      />

      <Button type="submit" onClick={() => history.push('/searchResult')}>
        SEARCH
      </Button>
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

  .dropdown {
    button {
      padding: 16px;
      display: flex;
      align-items: center;
      width: 232px;

      &::after {
        margin-left: auto;
      }
    }
    .dropdown-menu {
      left: 0;
      right: 0 !important;
    }
  }
`;

const StyledForm = styled(Form)`
  display: flex;
`;

const StyledSelect = styled(Form.Select)`
  height: 56px;
  width: 232px;
  border: none;
  border-radius: 4px;
  padding: 0 16px;

  option[value=''][disabled] {
    display: none;
  }
`;

SearchBox.propTypes = {};

export default SearchBox;
