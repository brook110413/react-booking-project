import {
  SET_CHOSEN_HOTEL,
  SET_COUNT,
  SET_RESERVE_INFO,
  SET_SEARCH_CONDITION,
} from '@/actions/globalAction';

const initState = {
  hotelList: [
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
  ],
  chosenHotel: {
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
  count: 0,
  reserveInfo: {},
  searchCondition: {
    destination: 'Bangkok',
    checkIn: '2021-11-01T16:00:00.000Z',
    checkOut: '2021-11-03T16:00:00.000Z',
  },
};

const globalReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CHOSEN_HOTEL:
      return {
        ...state,
        chosenHotel: action.payload,
      };
    case SET_COUNT:
      return {
        ...state,
        count: action.payload,
      };
    case SET_RESERVE_INFO:
      return {
        ...state,
        reserveInfo: action.payload,
      };
    case SET_SEARCH_CONDITION:
      return {
        ...state,
        searchCondition: { ...action.payload },
      };
    default:
      return state;
  }
};

export default globalReducer;
