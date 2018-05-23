import React from 'react';

class Form extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      country: 'United States',
      paymentMethod: 'credit',
    };
  }

  submit(event) {
    event.preventDefault();
  }

  onChange(event) {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  render() {
    const { firstName, lastName, email, address } = this.state;

    return(
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Billing address</h4>
          <form onSubmit={this.submit} className="needs-validation">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label for="firstName">First name</label>
                <input type="text" className="form-control" id="firstName" value={firstName} onChange={this.onChange} required />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label for="lastName">Last name</label>
                <input type="text" className="form-control" id="lastName" onChange={this.onChange} value={lastName} required />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label for="email">Email</label>
              <input type="email" className="form-control" value={email} onChange={this.onChange} id="email" placeholder="you@example.com" />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="mb-3">
              <label for="address">Address</label>
              <input type="text" className="form-control" onChange={this.onChange} value={address} id="address" required />
              <div className="invalid-feedback">
                Please enter your address.
              </div>
            </div>

            <div className="row">
              <div className="col-md-5 mb-3">
                <label for="country">Country</label>
                <select onChange={this.onChange} className="custom-select d-block w-100" id="country" required>
                  <option value="">Choose...</option>
                  <option>United States</option>
                  <option>UK</option>
                </select>
              </div>
            </div>
            <hr className="mb-4" />

            <h4 className="mb-3">Payment</h4>

            <div className="d-block my-3">
              <div className="custom-control custom-radio">
                <input onChange={this.onChange} id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked required />
                <label className="custom-control-label" for="credit">Credit card</label>
              </div>
              <div className="custom-control custom-radio">
                <input onChange={this.onChange} id="debit" name="paymentMethod" type="radio" className="custom-control-input" required />
                <label className="custom-control-label" for="debit">Debit card</label>
              </div>
              <div className="custom-control custom-radio">
                <input onChange={this.onChange} id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required />
                <label className="custom-control-label" for="paypal">PayPal</label>
              </div>
            </div>

            <button className="btn btn-primary btn-lg btn-block" type="submit">Submit</button>
          </form>
        </div>
    );
  }
}

export default Form;
