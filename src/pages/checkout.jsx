import React from 'react';
import Minicart from "../components/minicart";
import Form from "../components/form";

class Checkout extends React.Component {
  render() {
    return(
        <div className="container">
          <div className="py-5 text-center">
            <h2>Checkout form</h2>
            <p className="lead">Description</p>
          </div>
          <div className="row">
            <Minicart />
            <Form />
          </div>
        </div>
    );
  }
}

export default Checkout;