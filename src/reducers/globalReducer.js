const initState = {
  test: '123',
};

const globalReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default globalReducer;
