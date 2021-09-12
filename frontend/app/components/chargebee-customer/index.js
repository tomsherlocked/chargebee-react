import React, { useEffect, useState } from 'react';
import request from '../../utils/request';

import LoadingComponent from '../loading';
import CustomerList from '../customer-list';

export default function ChargeBeeCustomer() {
  const [initialCustomerData, setInitialCustomerData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // quick and dirty data fetch
    async function fetchData() {
      const response = await request('http://localhost:3000/v1/customers');
      setInitialCustomerData(response.customers);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="customer-list--container">
      <h2>Customer List</h2>
      {loading ? (
        <LoadingComponent />
      ) : (
        <CustomerList>{initialCustomerData}</CustomerList>
      )}
    </div>
  );
}
