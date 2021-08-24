import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import moment from 'moment';

import color from '@Style/color';

const BookingDetail = (props) => {
  const count = useSelector((state) => state.global.count);
  const chosenHotel = useSelector((state) => state.global.chosenHotel);
  const searchCondition = useSelector((state) => state.global.searchCondition);

  const [vat] = useState(277);
  const [serviceCharge] = useState(396);

  return (
    <StyledWrapper>
      <div className="detailWrapper">
        <div className="detailTitle">Booking details</div>
        <div className="detailContent">
          <div>{`${moment(searchCondition.checkIn).format(
            'YYYY/MM/DD'
          )} - ${moment(searchCondition.checkOut).format(
            'YYYY/MM/DD'
          )}・${moment(searchCondition.checkOut).diff(
            searchCondition.checkIn,
            'days'
          )} nights`}</div>
          <div>{`2 adults・${count} room`}</div>
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
                chosenHotel.cost * (count !== 0 ? count : 1)
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
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
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
`;

BookingDetail.propTypes = {};

export default BookingDetail;
