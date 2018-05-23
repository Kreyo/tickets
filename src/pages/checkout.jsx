import React from 'react';
import { connect } from 'react-redux';
import Minicart from "../components/minicart";
import Form from "../components/form";
import { selectSeat as selectSeatAction } from "../actions/app";
import { push } from "react-router-redux";

class Checkout extends React.Component {
  render() {
    return(
        <div className="container">
          <div className="py-5 text-center">
            <h2>Checkout form</h2>
            <p className="lead">Description</p>
          </div>
          <div className="row">
            <Minicart flight={this.props.flight} seat={this.props.seat} />
            <Form />
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  flight: state.appReducer.selectedFlight,
  seat: state.appReducer.seat
});

const mapDispatchToProps = dispatch => ({
  selectSeat: seat => { dispatch(selectSeatAction(seat)); dispatch(push('/checkout')); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
