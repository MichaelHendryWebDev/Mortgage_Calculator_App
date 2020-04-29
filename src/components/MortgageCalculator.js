import React from 'react';

function MortgageCalculator(props) {
  if (!props.customer.length || !props.salary) return null;

  // const disclaimer = (props.salary > 50000) ? <h3>Woah!</h3> : null;

  return (
    <div id="calculator">
      <h2>Hello {props.customer}! Your maximum mortgage value is:</h2>
      {/*disclaimer*/}
      <h2>£{props.salary * 3}</h2>
      <h2>Monthly payments for 12 months:</h2>
      <h2>£{props.salary * 3 / 12}</h2>
    </div>
  )
}


export default MortgageCalculator;
