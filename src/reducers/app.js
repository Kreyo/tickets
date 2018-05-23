const defaultState = {
  selectedFlight: null,
  seat: null,
};

const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SELECT_FLIGHT': {
      return {...state, selectedFlight: action.selectedFlight}
    }
    case 'SELECT_SEAT': {
      return {...state, seat: action.seat}
    }
  }
};

export default appReducer;