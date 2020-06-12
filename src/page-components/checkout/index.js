import React from 'react';
import Head from 'next/head';
import { CurrencyValue } from 'components/currency-value';

import { useSettings } from 'components/settings-context';
import { useBasket } from 'components/basket';
import Layout from 'components/layout';
import OrderItems from 'components/order-items';
import { Outer, H3 } from 'ui';
import { Row, Rows, StrikeThrough } from 'components/basket/totals/styles';
import PaymentGateway from './payment-gateway';
//import ReserveGateway from './reserve-gateway';

import { Inner, SectionHeader, Container } from './styles';

const Checkout = () => {
  const basket = useBasket();
  const settings = useSettings();

  if (!basket.state.ready) {
    return 'Getting basket...';
  }

  const { items } = basket.state;
  const { currency } = settings;
  const { totalToPay, totalVatAmount, shipping, freeShipping } = basket.state;

  if (!items.length) {
    return <Outer>Hurtigkurven er tom</Outer>;
  }

  return (
    <Outer>
      <Inner>
        <Container>
          <SectionHeader>Bestill på en vipps!</SectionHeader>
          {/*<SectionHeader>Bestill</SectionHeader> */}
          <PaymentGateway items={items} currency={currency} />
        </Container>
        <Container>
          <SectionHeader>Handlekurv</SectionHeader>
          <OrderItems items={items} currency={currency} />
          <Rows>
            <Row modifier="total-vat">
              <span>MVA.:</span>
              <span>
                <CurrencyValue value={totalVatAmount} />
              </span>
            </Row>
            <Row modifier="shipping">
              <span>Porto:</span>
              {freeShipping ? (
                <span>
                  {shipping && shipping.unit_price > 0 && (
                    <StrikeThrough>
                      <CurrencyValue value={shipping.unit_price} />
                    </StrikeThrough>
                  )}{' '}
                  <CurrencyValue value="0" />
                </span>
              ) : (
                <span>
                  <CurrencyValue value={shipping ? shipping.unit_price : 99} />
                </span>
              )}
            </Row>
            <Row modifier="to-pay">
              <span>
                <H3>Totalt å betale:</H3>
              </span>
              <span>
                <strong>
                  <H3>
                    <CurrencyValue value={totalToPay} />
                  </H3>
                </strong>
              </span>
            </Row>
          </Rows>
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
