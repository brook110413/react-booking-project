import React from 'react';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import color from '@Style/color';

import { setFilterCondition } from '@Actions/globalAction';

const AsideFilterComponent = (props) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const filterList = [
    {
      title: 'Room Type',
      selectList: [
        'Deluxe Double Room',
        'Standard Double Room',
        'Twin Room',
        'Deluxe Twin Room',
      ],
    },
    // {
    //   title: 'Popular filter',
    //   selectList: ['Breakfast included', 'Free Wi-Fi', 'Swimming pool'],
    // },
    // {
    //   title: 'Stay type',
    //   selectList: ['Hotel', 'Apartment', 'Hostel'],
    // },
  ];

  const onSubmit = (data) => {
    dispatch(setFilterCondition(data));
  };

  return (
    <StyledWrapper>
      {filterList.map((item) => (
        <div className="asideItemBox" key={item.title}>
          <div className="asideItemTitle">{item.title}</div>
          <div className="asideItemContent">
            <Form onSubmit={handleSubmit(onSubmit)}>
              {item.selectList.map((select) => (
                <Form.Group key={select}>
                  <Form.Check
                    type="checkbox"
                    label={select}
                    id={select}
                    name={select}
                    ref={register}
                    defaultChecked
                  />
                </Form.Group>
              ))}
              <Button type="submit" className="mt-3 w-100">
                Filter
              </Button>
            </Form>
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
