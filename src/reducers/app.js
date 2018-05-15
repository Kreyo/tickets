const defaultState = {
  selectedFlight: null
};

const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SELECT_FLIGHT': {
      return {...state, selectedFlight: action.selectedFlight}
    }
  }
};

export default appReducer;