import React, { useEffect, useState } from 'react';
import request from '../../utils/request';

import LoadingComponent from '../loading';

import CustomerTable from '../customer-table';

export default function ChargeBeeCustomer() {
  const [initialCustomerData, setInitialCustomerData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // quick and dirty data fetch using request wrapper
    async function fetchData() {
      const response = await request('http://localhost:3000/v1/customers');
      setInitialCustomerData(response.subscriptions);
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
        <CustomerTable>{initialCustomerData}</CustomerTable>
      )}
    </div>
  );
}
