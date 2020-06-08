import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Layout from 'components/layout';

import { H1 } from 'ui';

const Outer = styled.div`
  padding: 50px;
`;

export default function ReservationConfirmation() {
  const router = useRouter();
  return (
    <Layout>
      <Outer>
        <H1>Takk for din bestilling</H1>
        <div style={{ marginTop: 30 }}>
          Ditt ordernummer er: {router.query.orderId}
        </div>
      </Outer>
    </Layout>
  );
}
