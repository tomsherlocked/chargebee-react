import React from 'react';

export default function ListItem({ children: { customer } }) {
  const customerName = `${customer.first_name} ${customer.last_name}`;
  return (
    <li className="list-item">
      <p className="list-item--name">{customerName}</p>
      <ul className="list-item--details">
        {/* quick loop over all properties of the customer obj */}
        {Object.keys(customer).map(key => (
          <li key={key}>{`${key.replaceAll('_', ' ')}: ${JSON.stringify(
            customer[key],
          )}`}</li>
        ))}
      </ul>
    </li>
  );
}
