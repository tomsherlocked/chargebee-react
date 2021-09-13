import React from 'react';
import TableRow from './table-row';
export default function CustomerTable({ children: customerSubscription }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Subscription Status</th>
            <th>Created Date</th>
            <th>Orders</th>
          </tr>
        </thead>
        <tbody>
          {customerSubscription.map(subscriptionItem => (
            <TableRow key={subscriptionItem.subscription.id}>
              {subscriptionItem}
            </TableRow>
          ))}
        </tbody>
      </table>
    </>
  );
}
