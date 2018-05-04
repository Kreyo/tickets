import React from 'react';

class Card extends React.Component {
  render() {
    return(
      <div className="col-md-4">
        <div className="card mb-4 box-shadow">
          <img className="card-img-top" alt="Card image cap"/>
          <div className="card-body">
            <p className="card-text">Flight stuff</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-primary">Book</button>
              </div>
              <small className="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
