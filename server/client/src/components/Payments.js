import React, { Component } from 'react';
import StripCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    // debugger;
    return (
      <StripCheckout 
        name="Emaily"
        description="5$ for 5 email credit"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >

        <div className="credits"></div>

        <button className="btn">
          Add Email Credits
        </button>


      </StripCheckout>
    );
  }
}

export default connect(null, actions)(Payments);