import React from 'react';
import ListItem from './list-item';
export default function CustomerList({ children: customers }) {
  return (
    <>
      <ul>
        {customers.map(customer => (
          <ListItem key = {customer.id}>{customer}</ListItem>
        ))}
      </ul>
    </>
  );
}
