import {
  SET_CHOSEN_HOTEL,
  SET_COUNT,
  SET_RESERVE_INFO,
} from '@/actions/globalAction';

const initState = {
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
    default:
      return state;
  }
};

export default globalReducer;
