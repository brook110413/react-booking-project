import React from 'react';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';

import color from '@Style/color';

const AsideFilterComponent = (props) => {
  const filterList = [
    {
      title: 'Deals',
      selectList: ['Free cancellation', 'No prepayment', 'Special offers'],
    },
    {
      title: 'Popular filter',
      selectList: ['Breakfast included', 'Free Wi-Fi', 'Swimming pool'],
    },
    {
      title: 'Stay type',
      selectList: ['Hotel', 'Apartment', 'Hostel'],
    },
  ];

  return (
    <StyledWrapper>
      {filterList.map((item) => (
        <div className="asideItemBox" key={item.title}>
          <div className="asideItemTitle">{item.title}</div>
          <div className="asideItemContent">
            {item.selectList.map((select) => (
              <Form.Group key={select}>
                <Form.Check type="checkbox" label={select} id={select} />
              </Form.Group>
            ))}
          </div>
        </div>
      ))}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 0 24px;
  background-color: ${color.secondary};
  border-radius: 8px;
  /* position: sticky;
  top: 190px; */

  .asideItemBox {
    padding: 24px 0;
    border-bottom: 1px solid ${color.white};

    .asideItemTitle {
      font-weight: bold;
      margin-bottom: 16px;
    }

    .asideItemContent {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .form-check {
      display: flex;
      align-items: center;
    }

    .form-check-input {
      margin-right: 16px;
    }

    .form-check-label {
      transform: translateY(2px);
    }
  }
`;

AsideFilterComponent.propTypes = {};

export default AsideFilterComponent;
