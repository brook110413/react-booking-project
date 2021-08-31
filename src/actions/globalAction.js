export const SET_CHOSEN_HOTEL = 'SET_CHOSEN_HOTEL';
export const SET_COUNT = 'SET_COUNT';
export const SET_RESERVE_INFO = 'SET_RESERVE_INFO';
export const SET_SEARCH_CONDITION = 'SET_SEARCH_CONDITION';
export const SET_FILTER_CONDITION = 'SET_FILTER_CONDITION';

export const setChosenHotel = (hotelDetail) => ({
  type: SET_CHOSEN_HOTEL,
  payload: hotelDetail,
});

export const setCount = (num) => ({
  type: SET_COUNT,
  payload: num,
});

export const setReserveInfo = (data) => ({
  type: SET_RESERVE_INFO,
  payload: data,
});

export const setSearchCondition = (condition) => ({
  type: SET_SEARCH_CONDITION,
  payload: condition,
});

export const setFilterCondition = (condition) => {
  return {
    type: SET_FILTER_CONDITION,
    payload: condition,
  };
};
