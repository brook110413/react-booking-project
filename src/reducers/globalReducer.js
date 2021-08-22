import { SET_CHOSEN_HOTEL } from '@/actions/globalAction';

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
    cost: '1,980',
  },
};

const globalReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CHOSEN_HOTEL:
      return {
        ...state,
        chosenHotel: action.payload,
      };
    default:
      return state;
  }
};

export default globalReducer;
