import React, { Component } from 'react';

class MortgageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: '',
      salary:  0
    };

    this.handleCustomerChange = this.handleCustomerChange.bind(this);
    this.handleSalaryChange = this.handleSalaryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const customer = this.state.customer.trim();
    const salary = this.state.salary.trim();
    if (!salary || !customer) {
      return
    }
    this.props.onRequestSubmit(customer, parseInt(salary));
    this.setState({
      customer: '',
      salary: 0
    });
  }

  handleCustomerChange(event) {
    this.setState({customer: event.target.value});
  }
  handleSalaryChange(event) {
    this.setState({salary: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <input
      type="text"
      placeholder="Your name"
      value={this.state.customer}
      onChange={this.handleCustomerChange}
      />
      <input
      type="number"
      placeholder="Add Salary"
      value={this.state.salary}
      onChange={this.handleSalaryChange}/>
      <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default MortgageForm;
