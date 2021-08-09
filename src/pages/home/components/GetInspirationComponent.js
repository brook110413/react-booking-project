import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';

const GetInspirationComponent = (props) => {
  const inspirationList = [
    {
      title: 'The fifth most visited country',
      content:
        'Italy is the fifth most visited country in the world, with a total of 52.3 million…',
      img: 'italy',
    },
    {
      title: 'Visit Thailand for Bangkok',
      content:
        'Asian tourists primarily visit Thailand for Bangkok and the historical, natural, and…',
      img: 'Thailand',
    },
    {
      title: 'Lord of the Rings Tour',
      content:
        'The national cuisine has been described as Pacific Rim, incorporating the native Māori…',
      img: 'NewZealand',
    },
  ];

  return (
    <div>
      <div className="title">Get Inspiration</div>

      <StyledInspirationContainer>
        {inspirationList.map((item) => (
          <div className="item">
            <div>
              <Image src={`images/${item.img}.jpg`} />
            </div>
            <div>
              <div className="itemTitle">{item.title}</div>
              <div className="itemContent open-sans">{item.content}</div>
            </div>
          </div>
        ))}
      </StyledInspirationContainer>
    </div>
  );
};

const StyledInspirationContainer = styled.div`
  display: flex;
  gap: 30px;

  .item {
    width: 31.79%;

    img {
      object-fit: cover;
      object-position: 50% 70%;
      height: 263px;
      width: 100%;
      border-radius: 8px;
      margin-bottom: 24px;
    }

    .itemTitle {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 12px;
    }

    .itemContent {
      color: #00000099;
      line-height: 1.5rem;
    }
  }
`;

GetInspirationComponent.propTypes = {};

export default GetInspirationComponent;
