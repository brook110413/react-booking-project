import React from 'react';
import { Container, Row, Col, Form, Image } from 'react-bootstrap';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import SearchBox from '@Basic/SearchBox';
import color from '@Style/color';

const SearchResult = () => {
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
      rankIcon: [
        <AiFillStar />,
        <AiFillStar />,
        <AiFillStar />,
        <AiFillStar />,
      ],
      cost: '1,980',
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
      rankIcon: [
        <AiFillStar />,
        <AiFillStar />,
        <AiFillStar />,
        <AiFillStar />,
        <AiFillStar />,
      ],
      cost: '1,680',
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
      rankIcon: [
        <AiFillStar />,
        <AiFillStar />,
        <AiFillStar />,
        <AiFillStar />,
      ],
      cost: '2,460',
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
      rankIcon: [
        <AiFillStar />,
        <AiFillStar />,
        <AiFillStar />,
        <AiFillStar />,
      ],
      cost: '2,880',
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
      rankIcon: [
        <AiFillStar />,
        <AiFillStar />,
        <AiFillStar />,
        <AiFillStar />,
        <AiFillStar />,
      ],
      cost: '1,890',
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
      rankIcon: [
        <AiFillStar />,
        <AiFillStar />,
        <AiFillStar />,
        <AiFillStar />,
      ],
      cost: '2,090',
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
      rankIcon: [
        <AiFillStar />,
        <AiFillStar />,
        <AiFillStar />,
        <AiFillStar />,
        <AiFillStar />,
      ],
      cost: '880',
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
      rankIcon: [<AiFillStar />, <AiFillStar />, <AiFillStar />],
      cost: '790',
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
      rankIcon: [
        <AiFillStar />,
        <AiFillStar />,
        <AiFillStar />,
        <AiFillStar />,
      ],
      cost: '1,700',
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
      rankIcon: [<AiFillStar />, <AiFillStar />, <AiFillStar />],
      cost: '3,450',
    },
  ];

  return (
    <StyledWrapper>
      <StyledSearchBoxWrapper>
        <Container>
          <SearchBox />
        </Container>
      </StyledSearchBoxWrapper>

      <Container>
        <div className="h2 fw-bold py-4 m-0">Bangkok</div>
        <Row>
          <Col lg={4}>
            <div className="aside">
              {filterList.map((item) => (
                <div className="asideItemBox" key={item.title}>
                  <div className="asideItemTitle">{item.title}</div>
                  <div className="asideItemContent">
                    {item.selectList.map((select) => (
                      <Form.Group key={select}>
                        <Form.Check
                          type="checkbox"
                          label={select}
                          id={select}
                        />
                      </Form.Group>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={8}>
            {hotelList.map((item) => (
              <div className="hotelItemWrapper" key={item.name}>
                <StyledLink to="/detail">
                  <Image
                    src={`images/${item.img}.jpg`}
                    className="hotelItemImg"
                  />

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
                        <div className="h4 m-0 fw-bold">{`TWD ${item.cost}`}</div>
                      </div>
                    </div>
                  </div>
                </StyledLink>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .aside {
    padding: 0 24px;
    background-color: ${color.secondary};
    border-radius: 8px;

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
  }

  .hotelItemWrapper {
    border-bottom: 1px solid ${color.secondary};
    margin-bottom: 24px;

    &:last-child {
      border-bottom: none;
    }

    .hotelItemImg {
      object-fit: cover;
      object-position: center;
      width: 235px;
      height: 175px;
      border-radius: 8px 0px 0px 8px;
    }

    .hotelItemMain {
      padding: 16px 16px 0;
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 16px;

      .hotelItemLocation {
        font-size: 12px;
      }

      .hotelTag {
        background-color: ${color.secondary};
        border-radius: 13px;
        font-size: 12px;
        padding: 8px;
        margin-right: 4px;
      }
    }
  }
`;

const StyledSearchBoxWrapper = styled.div`
  background-color: ${color.secondary};
  position: sticky;
  top: 85px;
  z-index: 10;
`;

const StyledLink = styled(Link)`
  display: flex;
  margin-bottom: 24px;
  border-radius: 8px;

  &:hover {
    box-shadow: 5px 5px 5px ${color.secondary};
  }
`;

SearchResult.propTypes = {};

export default SearchResult;
