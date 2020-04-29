import React, {Component} from 'react';
import MortgageForm from '../components/MortgageForm.js';
import MortgageCalculator from '../components/MortgageCalculator.js';

class MortgageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customer: '',
      salary: 0,
      maxMortgageValue: 0
    };
    this.addCustomerDetails = this.addCustomerDetails.bind(this);
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
      <div id="mortgage-container">
        <h1>Mortgage Calculator!</h1>
          <h2>Enter your salary!</h2>
          <MortgageForm
          onRequestSubmit={this.addCustomerDetails}
          />
          <MortgageCalculator
          salary = {this.state.salary}
          customer = {this.state.customer}
          />

      </div>
    )
  }
}
export default MortgageContainer;
