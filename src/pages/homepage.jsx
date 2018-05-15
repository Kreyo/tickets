import React from 'react';
import axios from 'axios';
import Card from '../components/card';

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flights: [],
    };
  }

  componentWillMount() {
    axios.get('/flight-list')
      .then(result => {
        this.setState({
          flights: result.data,
        });
      });
  }

  render() {
    return(
      <div className="main">
        <header>
          <div className="collapse bg-dark" id="navbarHeader">
            <div className="container">
              <div className="row">
                <div className="col-sm-8 col-md-7 py-4">
                  <h4 className="text-white">Airplane Tickets</h4>
                  <p className="text-muted">Select your flight from the list below</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main role="main">

          <section className="jumbotron text-center">
            <div className="container">
              <h1 className="jumbotron-heading">Tickets</h1>
              <p className="lead text-muted">Book some tickets for the flights below.</p>
            </div>
          </section>

          <div className="album py-5 bg-light">
            <div className="container">

              <div className="row">
                {this.state.flights.map((flight, index) => <Card flight={flight} key={index}/>)}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Homepage;