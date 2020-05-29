import React from 'react';
import Router from 'next/router';
import styled from 'styled-components';

import StripeCheckout from './stripe';
import KlarnaCheckout from './klarna';
import VippsCheckout from './vipps';

import {
  Form,
  //Input,
  //InputGroup,
  //Label,
  PaymentSelector,
  PaymentMethods,
  PaymentButton,
  PaymentMethod,
  SectionHeader,
} from './styles';

const Row = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border-radius: 0.2rem;
`;

export default class PaymentGateway extends React.Component {
  state = {
    paymentMethod: null,
    firstName: '',
    lastName: '',
    email: '',
  };

  render() {
    const { items, currency } = this.props;
    const { paymentMethod, firstName, lastName, email } = this.state;

    const personalDetails = {
      firstName,
      lastName,
      email,
    };

    return (
      <Inner>
        <Form noValidate>
          <Row></Row>

          <SectionHeader>Betal med vipps</SectionHeader>
          <PaymentMethods>
            <PaymentSelector>
              {/*} <PaymentButton
                color="#6773E6"
                type="button"
                active={paymentMethod === 'stripe'}
                onClick={() => this.setState({ paymentMethod: 'stripe' })}
              >
                <img src="/static/stripe-logo.png" alt="stripe logo" />
              </PaymentButton>
              <PaymentButton
                color="#F8AEC2"
                type="button"
                active={paymentMethod === 'klarna'}
                onClick={() => this.setState({ paymentMethod: 'klarna' })}
              >
                <img src="/static/klarna-logo.png" alt="Klarna logo" />
              </PaymentButton>
                  */}
              <PaymentButton
                color="#FFFFFF"
                type="button"
                active={paymentMethod === 'vipps'}
                onClick={() => this.setState({ paymentMethod: 'vipps' })}
              >
                <img src="/static/vipps-logo.png" alt="Vipps logo" />
              </PaymentButton>
            </PaymentSelector>
            {paymentMethod === 'stripe' && (
              <PaymentMethod>
                <StripeCheckout
                  personalDetails={personalDetails}
                  items={items}
                  currency={currency}
                  onSuccess={(orderId) =>
                    Router.push(
                      '/confirmation/stripe/[orderId]',
                      `/confirmation/stripe/${orderId}`
                    )
                  }
                />
              </PaymentMethod>
            )}

            {paymentMethod === 'klarna' && (
              <PaymentMethod>
                <KlarnaCheckout
                  personalDetails={personalDetails}
                  items={items}
                  currency={currency}
                />
              </PaymentMethod>
            )}

            {paymentMethod === 'vipps' && (
              <PaymentMethod>
                <VippsCheckout
                  personalDetails={personalDetails}
                  items={items}
                  currency={currency}
                  onSuccess={(url) => {
                    if (url) window.location = url;
                  }}
                />
              </PaymentMethod>
            )}
          </PaymentMethods>
        </Form>
      </Inner>
    );
  }
}
