import React, {Component} from 'react';
import MortgageForm from '../components/MortgageForm.js';
import MortgageCalculator from '../components/MortgageCalculator.js';

class MortgageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customer: '',
      salary: null,
      maxMortgageValue: null
    };
  }

  addCustomerDetails(customer, salary) {
    this.setState((prevState) => {
      return {
        customer: customer,
        salary: salary
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Mortgage Calculator!</h1>
          <h2>Enter your salary!</h2>
          <MorgageForm
          onRequestSubmit={addCustomerDetails}
          />
          <h2>Your maximum mortgage value is:{maxMortgageValue}</h2>
          <MortgageCalculator
            salary={this.state.salary}
          />
      </div>
    )
  }
}
