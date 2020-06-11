import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Layout from 'components/layout';

import { H1, H3, Header, colors } from 'ui';

const CustomHeader = styled(Header)`
  margin-bottom: 0;
  padding-bottom: 0;
`;
const Outer = styled.div`
  padding: 50px;
`;
const Line = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${colors.light};
`;

export default function ReservationConfirmation() {
  const router = useRouter();

  // const { email } = order.customer.addresses[email];

  return (
    <Layout>
      <Outer>
        <CustomHeader>
          <H1>Takk for din bestilling!</H1>
          <div style={{ marginTop: 30 }}>
            Ditt ordernummer er: <Line />
            <H3>
              <strong>{router.query.orderId}</strong>
            </H3>
            <Line />
            <br />
            <br />
          </div>
          <Line />
          Du mottar bok/bøkene og faktura i løpet av få dager. <br />
          Hvis du har spørsmål til eller problemer med bestillingen,
          <br /> kontakt Ørn forlags kundeservice på tlf.:
          <phone>
            <strong>(+47) 975 96 088</strong>
          </phone>
          eller torgunn.andersen@ornforlag.no <br />
          <br /> Mvh, <br /> Bjørn Olav Tveit, forlagssjef
        </CustomHeader>
      </Outer>
    </Layout>
  );
}
