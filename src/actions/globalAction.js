export const SET_CHOSEN_HOTEL = 'SET_CHOSEN_HOTEL';
export const SET_COUNT = 'SET_COUNT';

export const setChosenHotel = (hotelDetail) => ({
  type: SET_CHOSEN_HOTEL,
  payload: hotelDetail,
});

export const setCount = (num) => ({
  type: SET_COUNT,
  payload: num,
});
