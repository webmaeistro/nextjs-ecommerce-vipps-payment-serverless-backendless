import React from 'react';
import styled from 'styled-components';

import { CurrencyValue } from 'components/currency-value';
import { responsive, H3 } from 'ui';

const Outer = styled.div`
  width: 300px;

  p {
    margin-bottom: 0.5rem;
  }

  ${responsive.xs} {
    width: 100%;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 16px;
`;

const BillingDetails = ({ order }) => {
  // eslint-disable-next-line no-unused-vars
  const { email } = order.customer.addresses[email];
  return (
    <Outer>
      <Inner>
        <H3>Salgs kvitering</H3>
        <p>
          Navn:{' '}
          <strong>
            {order.customer.firstName} {order.customer.lastName}
          </strong>
        </p>
        <p>Leverings addresse:</p>
        <p>
          SUM totalt:{' '}
          <strong>
            <CurrencyValue value={order.total.net} />
          </strong>
        </p>
      </Inner>
    </Outer>
  );
};

export default BillingDetails;
