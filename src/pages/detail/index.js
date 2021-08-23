import React from 'react';
import styled from 'styled-components';
import { Container, Image, Table } from 'react-bootstrap';
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

import SearchBox from '@Components/SearchBox';
import PopOutComponent from '@Components/PopOutComponent';
import color from '@Style/color';

import CountButtonComponent from './components/CountButtonComponent';
import SwiperComponent from './components/SwiperComponent';
import Main from './components/Main';

const Detail = () => {
  const chosenHotel = useSelector((state) => state.global.chosenHotel);

  const roomTypeList = [
    // {
    //   img: 'roomA',
    //   name: 'Deluxe Double Room A',
    //   type: '1 bed (Queen size)',
    //   service: [
    //     'Wi-fi',
    //     'Breakfast',
    //     'Television',
    //     'Air Conditioner',
    //     'Room Service',
    //     'Smoke Free',
    //   ],
    //   sleeps: [<MdPerson size={24} />, <MdPerson size={24} />],
    //   price: '1,490',
    // },
    // {
    //   img: 'roomB',
    //   name: 'Deluxe Double Room B',
    //   type: '1 bed (Queen size)',
    //   service: [
    //     'Wi-fi',
    //     'Breakfast',
    //     'Television',
    //     'Air Conditioner',
    //     'Room Service',
    //     'Smoke Free',
    //   ],
    //   sleeps: [<MdPerson size={24} />, <MdPerson size={24} />],
    //   price: '1,600',
    // },
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
        <SwiperComponent />

        <Main />

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

                  <td>
                    <CountButtonComponent />
                  </td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </div>
      </StyledContainer>
      <PopOutComponent />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
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
