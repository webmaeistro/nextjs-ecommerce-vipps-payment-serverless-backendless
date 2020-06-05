import React from 'react';
import Head from 'next/head';

import { useSettings } from 'components/settings-context';
import { useBasket } from 'components/basket';
import Layout from 'components/layout';
import OrderItems from 'components/order-items';
import { Outer } from 'ui';

import PaymentGateway from './payment-gateway';
import { Inner, SectionHeader, Container } from './styles';

const Checkout = () => {
  const basket = useBasket();
  const settings = useSettings();

  if (!basket.state.ready) {
    return 'Getting basket...';
  }

  const { items } = basket.state;
  const { currency } = settings;

  if (!items.length) {
    return <Outer>Hurtigkurven er tom</Outer>;
  }

  return (
    <Outer>
      <Inner>
        <Container>
          <SectionHeader>Bestill på en vipps!</SectionHeader>
          <PaymentGateway items={items} currency={currency} />
        </Container>
        <Container>
          <SectionHeader>Handlekurv</SectionHeader>
          <OrderItems items={items} currency={currency} />
        </Container>
      </Inner>
    </Outer>
  );
};

export default function CheckoutLoader(props) {
  return (
    <Layout title="Snart kan du betalte med Vipps" simple>
      <Head>
        {/* <script id="stripe-js" src="https://js.stripe.com/v3/" async />*/}
      </Head>
      <Checkout {...props} />
    </Layout>
  );
}
