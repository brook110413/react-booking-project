import React from 'react';
import styled from 'styled-components';

import color from '@Style/color';

const PopularDestinationComponent = (props) => {
  const popularDestinations = [
    {
      nation: 'Japan',
      city: 'Osaka',
      img: 'Osaka',
    },
    {
      nation: 'Japan',
      city: 'Kyoto',
      img: 'Kyoto',
    },
    {
      nation: 'iceland',
      city: 'Reykjavík',
      img: 'Reykjavic',
    },
    {
      nation: 'France',
      city: 'Paris',
      img: 'Paris',
    },
    {
      nation: 'Italy',
      city: 'Roma',
      img: 'Roman',
    },
    {
      nation: 'Thailand',
      city: 'Bangkok',
      img: 'Bangkok',
    },
  ];

  return (
    <div>
      <div className="title">Popular Destinations</div>

      <StyledDestinationContainer className="open-sans">
        {popularDestinations.map((item) => (
          <div
            className="item"
            key={item.city}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(images/${item.img}.jpg)`,
            }}
          >
            <div className="nation">{item.nation}</div>
            <div className="city">{item.city}</div>
          </div>
        ))}
      </StyledDestinationContainer>
    </div>
  );
};

const StyledDestinationContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px 25.8px;

  .item {
    width: 31.79%;
    height: 78px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;

    .nation {
      color: #ffffff98;
      font-size: 16px;
      font-weight: bold;
    }
    .city {
      color: ${color.white};
      font-size: 28px;
    }
  }
`;

PopularDestinationComponent.propTypes = {};

export default PopularDestinationComponent;
