import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { selectFlight as selectFlightAction } from '../actions/app';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.props.selectFlight(this.props.flight)
    this.props.goToPlacesSelection();
  }

  render() {
    return(
      <div className="col-md-4">
        <div className="card mb-4 box-shadow">
          <img className="card-img-top" alt="Card image cap"/>
          <div className="card-body">
            <p className="card-text">Flight stuff</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button onClick={this.onButtonClick} type="button" className="btn btn-sm btn-primary">Book</button>
              </div>
              <small className="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  goToPlacesSelection: () => dispatch(push('/places')),
  selectFlight: flight => dispatch(selectFlightAction(flight)),
});

export default connect(null, mapDispatchToProps)(Card);
