import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Dropdown } from 'react-bootstrap';
import { IoLocationSharp } from 'react-icons/io5';

import BasicCheckedSelect from '@Components/basic/BasicCheckedSelect';
import color from '@Style/color';

const SearchBox = (props) => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <StyledSearchBoxContainer>
      <Dropdown className="dropdown">
        <Dropdown.Toggle variant="light">
          <IoLocationSharp className="me-3" size={20} />
          Destination
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* <BasicCheckedSelect options={options} />   */}

      {/* <div>123</div>
      <div>123</div> */}
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

SearchBox.propTypes = {};

export default SearchBox;
