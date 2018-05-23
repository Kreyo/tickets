import React from 'react';
import { connect } from 'react-redux';
import { push } from "react-router-redux";
import { selectSeat as selectSeatAction } from '../actions/app';

class Places extends React.Component {

  renderSeats() {
    return this.props.flight.seats.map((seat, index) => <a className="seat" key={index} onClick={() => this.props.selectSeat(index)}>{seat}</a>);
  }

  render() {
    return(
        <div className="container">
          <div className="py-5 text-center">
            <h2>Select your places</h2>
          </div>
          <div className="row">
            { this.renderSeats() }
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  flight: state.appReducer.selectedFlight
});

const mapDispatchToProps = dispatch => ({
  selectSeat: seat => { dispatch(selectSeatAction(seat)); dispatch(push('/checkout')); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Places);
