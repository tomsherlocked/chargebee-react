/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import PageTitle from '../../components/title';
import ChargeBeeCustomerComponent from '../../components/chargebee-customer';

export default function HomePage() {
  return (
    <>
      <PageTitle>ChargeBee React Frontend</PageTitle>
      <ChargeBeeCustomerComponent />
    </>
  );
}
