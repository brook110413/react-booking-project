export const SET_CHOSEN_HOTEL = 'SET_CHOSEN_HOTEL';

export const setChosenHotel = (hotelDetail) => ({
  type: SET_CHOSEN_HOTEL,
  payload: hotelDetail,
});
