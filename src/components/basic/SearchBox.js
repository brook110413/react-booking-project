import React from 'react';
import styled, { css } from 'styled-components';
import { Dropdown, Button } from 'react-bootstrap';
import { IoLocationSharp } from 'react-icons/io5';
import { useHistory, useLocation } from 'react-router-dom';

import BasicCheckedSelect from '@Components/basic/BasicCheckedSelect';
import color from '@Style/color';

const SearchBox = (props) => {
  const history = useHistory();
  const location = useLocation();

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <StyledSearchBoxContainer pathname={location.pathname}>
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

      <Button type="button" onClick={() => history.push('/searchResult')}>
        SEARCH
      </Button>

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

  ${(props) =>
    props.pathname === '/searchResult' &&
    css`
      max-width: 100%;
      transform: translateY(0);
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

export default SearchBox;
