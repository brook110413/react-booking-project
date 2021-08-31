import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import color from '@Style/color';

import { setChosenHotel } from '@Actions/globalAction';

const HotelItem = (props) => {
  const dispatch = useDispatch();

  const hotelList = useSelector((state) => state.global.hotelList);
  const filterCondition = useSelector((state) => state.global.filterCondition);

  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const newData = Object.entries(filterCondition)
      .map(([roomType, checked]) => {
        return {
          label: roomType,
          value: checked,
        };
      })
      .filter((item) => item.value === true)
      .map((item) => item.label);
    setFilterData([...newData]);
  }, [filterCondition]);

  return (
    <>
      {hotelList
        .filter((h) => filterData.includes(h.roomType))
        .map((item) => (
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
                  <div className="hotelItemName h4 m-0 fw-bold">
                    {item.name}
                  </div>
                </div>

                <div style={{ color: color.gray }}>
                  <div
                    className="fw-bold mb-1"
                    style={{ color: color.darkGray }}
                  >
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
