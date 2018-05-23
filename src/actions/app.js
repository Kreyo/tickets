export const selectFlight = selectedFlight => {
  return {
    type: 'SELECT_FLIGHT',
    selectedFlight
  }
};

export const selectSeat = seat => {
  return {
    type: 'SELECT_FLIGHT',
    seat
  }
};
