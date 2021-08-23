import React from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import color from '@Style/color';

import { setChosenHotel } from '@Actions/globalAction';

const HotelItem = (props) => {
  const dispatch = useDispatch();

  const hotelList = [
    {
      img: 'Rachada1',
      location: 'Rachada, Bangkok',
      distance: '2 km from center',
      name: 'Rachada Hotel',
      roomType: 'Deluxe Double Room',
      roomTypeDetail: '2 guests・1 bed (Queen size)',
      tags: ['Free cancellation', 'No prepayment'],
      rank: '4.0 (283)',
      rankIcon: ['\u2605', '\u2605', '\u2605', '\u2605'],
      cost: 1980,
    },

    {
      img: 'Phaya',
      location: 'Phaya Thai, Bangkok',
      distance: '2.9 km from center',
      name: 'Forever Place',
      roomType: 'Standard Double Room',
      roomTypeDetail: '2 guests・1 bed (Queen size)',
      tags: ['Free cancellation'],
      rank: '5.0 (121)',
      rankIcon: ['\u2605', '\u2605', '\u2605', '\u2605', '\u2605'],
      cost: 1680,
    },

    {
      img: 'Bangkapi',
      location: 'Bangkapi, Bangkok',
      distance: '14 km from center',
      name: 'LUV Hotel',
      roomType: 'Standard Double Room',
      roomTypeDetail: '2 guests・1 bed (Queen size)',
      tags: ['Free cancellation'],
      rank: '4.0 (325)',
      rankIcon: ['\u2605', '\u2605', '\u2605', '\u2605'],
      cost: 2460,
    },

    {
      img: 'Chatuchack1',
      location: 'Chatuchack, Bangkok',
      distance: '12 km from center',
      name: 'WOW Life Hotel',
      roomType: 'Standard Double Room',
      roomTypeDetail: '2 guests・1 bed (Queen size)',
      tags: ['No prepayment'],
      rank: '4.0 (204)',
      rankIcon: ['\u2605', '\u2605', '\u2605', '\u2605'],
      cost: 2880,
    },

    {
      img: 'Chatuchack2',
      location: 'Chatuchack, Bangkok',
      distance: '8 km from center',
      name: 'Celebrity Palace',
      roomType: 'Standard Double Room',
      roomTypeDetail: '2 guests・1 bed (Queen size)',
      tags: ['No prepayment'],
      rank: '5.0 (189)',
      rankIcon: ['\u2605', '\u2605', '\u2605', '\u2605', '\u2605'],
      cost: 1890,
    },

    {
      img: 'RangRak',
      location: 'Rang Rak, Bangkok',
      distance: '4.4 km from center',
      name: 'RR Space',
      roomType: 'Deluxe Double Room',
      roomTypeDetail: '2 guests・1 bed (King size)',
      tags: ['Free cancellation'],
      rank: '4.0 (112)',
      rankIcon: ['\u2605', '\u2605', '\u2605', '\u2605'],
      cost: 2090,
    },

    {
      img: 'Watana1',
      location: 'Watana, Bangkok',
      distance: '6 km from center',
      name: 'Bangkok Hostel',
      roomType: 'Twin Room',
      roomTypeDetail: '2 guests・2 beds (2 twins)',
      tags: ['Free cancellation', 'No prepayment'],
      rank: '5.0 (102)',
      rankIcon: ['\u2605', '\u2605', '\u2605', '\u2605', '\u2605'],
      cost: 880,
    },

    {
      img: 'Watana2',
      location: 'Watana, Bangkok',
      distance: '6 km from center',
      name: 'Watana First Hostel',
      roomType: 'Twin Room',
      roomTypeDetail: '2 guests・2 beds (2 twins)',
      tags: ['Free cancellation'],
      rank: '3.0 (608)',
      rankIcon: ['\u2605', '\u2605', '\u2605'],
      cost: 790,
    },

    {
      img: 'DinDaeng1',
      location: 'Din Daeng, Bangkok',
      distance: '7 km from center',
      name: 'DD Space',
      roomType: 'Standard Double Room',
      roomTypeDetail: '2 guests・1 bed (Queen size)',
      tags: ['No prepayment'],
      rank: '4.0 (138)',
      rankIcon: ['\u2605', '\u2605', '\u2605', '\u2605'],
      cost: 1700,
    },

    {
      img: 'DinDaeng2',
      location: 'Din Daeng, Bangkok',
      distance: '7 km from center',
      name: 'Dininn Hotel',
      roomType: 'Deluxe Twin Room',
      roomTypeDetail: '2 guests・2 beds (2 twins)',
      tags: ['Free cancellation', 'No prepayment'],
      rank: '3.0 (446)',
      rankIcon: ['\u2605', '\u2605', '\u2605'],
      cost: 3450,
    },
  ];

  return (
    <>
      {hotelList.map((item) => (
        <div
          className="hotelItemWrapper"
          key={item.name}
          onClick={() => dispatch(setChosenHotel(item))}
        >
          <StyledLink to="/detail">
            <Image src={`images/${item.img}.jpg`} className="hotelItemImg" />

            <div className="hotelItemMain">
              <div>
                <div className="d-flex justify-content-between">
                  <div className="hotelItemLocation open-sans">
                    <span style={{ color: color.primary }}>
                      {item.location}
                    </span>
                    <span>・{item.distance}</span>
                  </div>
                  <div className="d-flex align-items-center">
                    {item.rankIcon.map((icon, i) => (
                      <span key={`icon-${i}`}>{icon}</span>
                    ))}
                    <span
                      className="rank open-sans ms-1"
                      style={{ color: color.gray }}
                    >
                      {item.rank}
                    </span>
                  </div>
                </div>
                <div className="hotelItemName h4 m-0 fw-bold">{item.name}</div>
              </div>

              <div style={{ color: color.gray }}>
                <div className="fw-bold mb-1" style={{ color: color.darkGray }}>
                  {item.roomType}
                </div>
                <div>{item.roomTypeDetail}</div>
              </div>

              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-start">
                  {item.tags.map((tag, i) => (
                    <div className="hotelTag" key={`tag-${i}`}>
                      {tag}
                    </div>
                  ))}
                </div>

                <div className="text-end">
                  <div className="open-sans" style={{ fontSize: 12 }}>
                    per night
                  </div>
                  <div className="h4 m-0 fw-bold">{`TWD ${item.cost.toLocaleString()}`}</div>
                </div>
              </div>
            </div>
          </StyledLink>
        </div>
      ))}
    </>
  );
};

const StyledLink = styled(Link)`
  display: flex;
  margin-bottom: 24px;
  border-radius: 8px;

  &:hover {
    box-shadow: 5px 5px 5px ${color.secondary};
  }
`;

HotelItem.propTypes = {};

export default HotelItem;
