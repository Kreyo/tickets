import React from 'react';

class Minicart extends React.Component {
  render() {
    return (
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your ticket details</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">{this.props.flight.name}</h6>
                <small className="text-muted">{this.props.flight.description}</small>
              </div>
              <span className="text-muted">${this.props.flight.price}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Seat {this.props.seat}</h6>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>${this.props.flight.price}</strong>
            </li>
          </ul>
        </div>
    );
  }
}

export default Minicart;