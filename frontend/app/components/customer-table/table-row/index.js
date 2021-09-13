import React, { Fragment } from 'react';
import formatString from '../../../utils/formatString';

export default function TableRow({ children: subscriptionItem }) {
  const OrderDetails = ({ children: item }) => {
    /* quick loop over all properties of the customer obj */
    return Object.keys(item).map(key => (
      <li key={key}>{`${formatString(key)}: ${formatString(
        item[key].toString(),
      )}`}</li>
    ));
  };

  return (
    <tr>
      {/* name column */}
      <td className="centered">
        <strong>{`${subscriptionItem.customer.first_name} ${
          subscriptionItem.customer.last_name
        } `}</strong>
      </td>

      {/* status column */}
      <td className="centered">
        {formatString(subscriptionItem.subscription.status)}
      </td>

      {/* date column */}
      <td className="centered">{`${new Date(
        subscriptionItem.subscription.created_at,
      ).toLocaleString()}`}</td>

      {/* order details column */}
      <td>
        {subscriptionItem.subscription.subscription_items.map((item, index) => (
          <React.Fragment key={index}>
            <h3>Order {index + 1}</h3>
            <OrderDetails>{item}</OrderDetails>
          </React.Fragment>
        ))}
      </td>
    </tr>
  );
}
