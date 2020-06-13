import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Layout from 'components/layout';
import { useBasket } from 'components/basket';
import OrderItems from 'components/order-items';
import { H1, H3, Outer, Header } from 'ui';

import BillingDetails from './billing-details';

const CustomHeader = styled(Header)`
  margin-bottom: 0;
  padding-bottom: 0;
`;

const Line = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--color-main-background);
`;

export default function Confirmation({ order: orderData }) {
  const basket = useBasket();

  const [emptied, setEmptied] = useState(false);

  useEffect(() => {
    if (!emptied) {
      basket.actions.empty();
      setEmptied(true);
    }
  }, [emptied, basket.actions]);

  const order = orderData.data.orders.get;
  const { email } = order.customer.addresses[email];

  const items = order.cart.map((item) => ({
    ...item,
    image: {
      url: item.imageUrl
    },
    price: item.price.net
  }));

  return (
    <Layout title="Bekreftelse på bestilling">
      <Outer>
        <CustomHeader>
          <H1>Bekreftelse</H1>
          <p>
            Takk for kjøpet! Boksen er straks på vei i posten. Hvis du ønsker en
            kopi av denne kviteringen ta et skjermbilde eller print ut siden.
            Kjøpet er også lagret i historikk i betalinger på din Vipps app.
            {email}
          </p>
          <Line />
          <BillingDetails order={order} />
          <Line />
          <H3>Bok liste spesifisert</H3>
          <OrderItems items={items} />
        </CustomHeader>
      </Outer>
    </Layout>
  );
}
