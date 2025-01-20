import React from "react";

const Currency = () => {
  const currencies = [
    { fullName: "United States Dollar", shortForm: "USD" },
    { fullName: "Euro", shortForm: "EUR" },
    { fullName: "Indian Rupee", shortForm: "INR" },
    // Add more currencies
  ];

  return (
    <div>
      <h2>Currency Information</h2>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Short Form</th>
          </tr>
        </thead>
        <tbody>
          {currencies.map((currency, index) => (
            <tr key={index}>
              <td>{currency.fullName}</td>
              <td>{currency.shortForm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Currency;
