import React from 'react';
import styled from 'styled-components';
import { Container, Image, Row, Col, Table } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import { useSelector } from 'react-redux';
import {
  MdWifi,
  MdRestaurant,
  MdTv,
  MdAcUnit,
  MdRoomService,
  MdSmokeFree,
  MdKitchen,
  MdLocalBar,
  MdPerson,
} from 'react-icons/md';

import SearchBox from '@Basic/SearchBox';
import color from '@Style/color';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Detail = () => {
  const chosenHotel = useSelector((state) => state.global.chosenHotel);

  const imgList = ['Rachada1', 'Rachada2', 'Rachada3', 'Rachada4'];

  const roomTypeList = [
    {
      img: 'roomA',
      name: 'Deluxe Double Room A',
      type: '1 bed (Queen size)',
      service: [
        'Wi-fi',
        'Breakfast',
        'Television',
        'Air Conditioner',
        'Room Service',
        'Smoke Free',
      ],
      sleeps: [<MdPerson size={24} />, <MdPerson size={24} />],
      price: '1,490',
    },
    {
      img: 'roomB',
      name: 'Deluxe Double Room B',
      type: '1 bed (Queen size)',
      service: [
        'Wi-fi',
        'Breakfast',
        'Television',
        'Air Conditioner',
        'Room Service',
        'Smoke Free',
      ],
      sleeps: [<MdPerson size={24} />, <MdPerson size={24} />],
      price: '1,600',
    },
    {
      img: chosenHotel.img,
      name: 'Deluxe Suite with Pool',
      type: '1 bed (Queen size)',
      service: [
        'Wi-fi',
        'Breakfast',
        'Television',
        'Air Conditioner',
        'Room Service',
        'Smoke Free',
        'Refrigerator',
        'Mini Bar',
      ],
      sleeps: [<MdPerson size={24} />, <MdPerson size={24} />],
      price: '1,980',
    },
  ];

  return (
    <StyledWrapper>
      <StyledSearchBoxWrapper>
        <Container>
          <SearchBox />
        </Container>
      </StyledSearchBoxWrapper>

      <StyledContainer>
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          wrapperTag="ul"
        >
          {imgList.map((img, i) => (
            <SwiperSlide key={`img-${i}`} tag="li">
              {i === 0 ? (
                <Image
                  src={`images/${chosenHotel.img}.jpg`}
                  className="imgList"
                />
              ) : (
                <Image src={`images/${img}.jpg`} className="imgList" />
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        <Row>
          <Col lg={7}>
            <div className="hotelMain">
              <div className="d-flex align-items-center mb-2">
                <div className="hotelTitle">{chosenHotel.name}</div>
                <div className="me-1">
                  {chosenHotel.rankIcon.map((icon, i) => (
                    <span key={`icon-${i}`}>{icon}</span>
                  ))}
                </div>
                <span
                  className="rank open-sans ms-1"
                  style={{ color: color.gray }}
                >
                  {chosenHotel.rank}
                </span>
              </div>
              <div
                className="open-sans mb-4"
                style={{ color: color.primary, fontSize: 14 }}
              >
                318 Phaya Thai Road, Ratchathewi, Phaya Thai, 10400 Bangkok,
                Thailand
              </div>

              <div
                className="open-sans"
                style={{ color: color.darkGray, fontSize: 14, lineHeight: 1.5 }}
              >
                The Rachada Hotel is an establishment that provides paid lodging
                on a short-term basis. Facilities provided may range from a
                modest-quality mattress in a small room to large suites with
                bigger, higher-quality beds, a dresser, a refrigerator and other
                kitchen facilities, upholstered chairs, a flat screen
                television, and en-suite bathrooms.
              </div>
            </div>
          </Col>
        </Row>

        <div className="roomTypesWrapper">
          <div className="roomTypesTitle">Select your room</div>

          <StyledTable bordered className="open-sans">
            <thead>
              <tr>
                <th>Room Type</th>
                <th>Sleeps</th>
                <th>Price</th>
                <th>Rooms</th>
              </tr>
            </thead>
            <tbody>
              {roomTypeList.map((roomType) => (
                <tr key={roomType.name}>
                  <td>
                    <div className="d-flex">
                      <div className="ItemImg">
                        <Image
                          src={`images/${roomType.img}.jpg`}
                          className="ItemImg"
                        />
                      </div>
                      <div className="itemContainer">
                        <div className="ItemTitle">{roomType.name}</div>
                        <div className="ItemType">{roomType.type}</div>

                        <div className="ItemServiceContainer">
                          {roomType.service.map((s) => (
                            <div key={s} className="serviceItem">
                              <span className="d-flex align-items-center">
                                <>
                                  {s === 'Wi-fi' && <MdWifi size={18} />}
                                  {s === 'Breakfast' && (
                                    <MdRestaurant size={18} />
                                  )}
                                  {s === 'Television' && <MdTv size={18} />}
                                  {s === 'Air Conditioner' && (
                                    <MdAcUnit size={18} />
                                  )}
                                  {s === 'Room Service' && (
                                    <MdRoomService size={18} />
                                  )}
                                  {s === 'Smoke Free' && (
                                    <MdSmokeFree size={18} />
                                  )}
                                  {s === 'Refrigerator' && (
                                    <MdKitchen size={18} />
                                  )}
                                  {s === 'Mini Bar' && <MdLocalBar size={18} />}
                                </>
                                <span className="ms-2">{s}</span>
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td align="center">
                    {roomType.sleeps.map((s, i) => (
                      <span key={`icon-${i}`}>{s}</span>
                    ))}
                  </td>

                  <td className="open-sans">
                    <div className="fw-bold mb-2">TWD {roomType.price}</div>
                    <div style={{ fontSize: 12, color: color.darkGray }}>
                      per night
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </div>
      </StyledContainer>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .imgList {
    height: 300px;
    object-position: center 75%;
    object-fit: cover;
    border-radius: 10px;
  }

  .hotelMain {
    padding: 24px 0 72px;

    .hotelTitle {
      font-size: 32px;
      font-weight: bold;
      margin-right: 16px;
    }
  }

  .roomTypesWrapper {
    .roomTypesTitle {
      font-size: 24px;
      font-weight: bold;
    }

    .ItemImg {
      width: 255px;
      height: 175px;
      margin-right: 16px;
      border-radius: 8px 0px 0px 8px;
      object-fit: cover;
      object-position: center;
    }

    .itemContainer {
      padding: 8px 0;

      .ItemTitle {
        font-weight: bold;
        margin-bottom: 8px;
      }

      .ItemType {
        font-size: 12px;
        color: ${color.darkGray};
        margin-bottom: 16px;
      }
    }

    .ItemServiceContainer {
      display: flex;
      flex-wrap: wrap;
      gap: 12px 0;
      color: ${color.darkGray};

      .serviceItem {
        width: 50%;
        font-size: 14px;
      }
    }
  }
`;

const StyledContainer = styled(Container)`
  padding-top: 24px;
`;

const StyledSearchBoxWrapper = styled.div`
  background-color: ${color.secondary};
  position: sticky;
  top: 85px;
  z-index: 10;
`;

const StyledTable = styled(Table)`
  th {
    vertical-align: middle;
    text-align: center;
    padding: 24px 0 12px;
    font-weight: bold;

    &:first-child {
      width: 60%;
      text-align: left;
    }
  }

  td {
    padding: 24px 0;
    vertical-align: middle;
    text-align: center;
    border-top: 1px solid ${color.secondary};

    &:first-child {
      text-align: left;
    }
  }
`;

Detail.propTypes = {};

export default Detail;
