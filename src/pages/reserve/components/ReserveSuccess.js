import React from 'react';
import styled from 'styled-components';
import { Row, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import color from '@/style/color';

const ReserveSuccess = () => {
  const history = useHistory();

  const reserveInfo = useSelector((state) => state.global.reserveInfo);
  const chosenHotel = useSelector((state) => state.global.chosenHotel);
  const count = useSelector((state) => state.global.count);

  const reserveSuccessList = [
    {
      area: [
        {
          title: 'Guest',
          content: reserveInfo.name,
        },
        {
          title: 'Email',
          content: reserveInfo.email,
        },
        {
          title: 'Phone',
          content: reserveInfo.phone,
        },
      ],
    },
    {
      area: [
        {
          title: 'Hotel',
          content: `${chosenHotel.name} / ${count} night`,
        },
      ],
    },
    {
      area: [
        {
          title: 'check-in',
          content: 'Wednesday, 17 June 2021',
        },
        {
          title: 'check-out',
          content: 'Friday, 19 June 2021',
        },
      ],
    },
  ];

  const backToHomePage = (params) => {
    history.push('/home');
  };

  return (
    <StyledWrapper>
      <div className="title">Reservation received!</div>
      <div className="content open-sans">
        {reserveSuccessList.map((r, i) => (
          <div className="contentItem" key={`area-${i}`}>
            {r.area.map((a) => (
              <Row key={a.title}>
                <Col lg={4}>
                  <div className="contentTitle">{a.title}</div>
                </Col>
                <Col lg={8}>
                  <div className="contentDetail">{a.content}</div>
                </Col>
              </Row>
            ))}
          </div>
        ))}
      </div>
      <div className="buttonContainer">
        <Button type="button" onClick={backToHomePage}>
          Back to Homepage
        </Button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 32px;
  }

  .content {
    margin-bottom: 24px;

    .contentItem {
      padding: 24px 0;
      border-top: 1px solid #f1f0f8;
      display: flex;
      flex-direction: column;
      gap: 16px;

      &:last-child {
        border-bottom: 1px solid #f1f0f8;
      }

      .contentTitle {
        font-weight: bold;
      }

      .contentDetail {
        color: ${color.darkGray};
      }
    }
  }

  .buttonContainer {
    text-align: right;

    button {
      height: 56px;
    }
  }
`;

ReserveSuccess.propTypes = {};

export default ReserveSuccess;
