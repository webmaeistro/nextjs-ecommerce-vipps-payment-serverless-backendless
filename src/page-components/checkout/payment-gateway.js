import React from 'react';
import Router from 'next/router';
import styled from 'styled-components';

import StripeCheckout from './stripe';

import VippsCheckout from './vipps';

import {
  Form,
  /*
  Input,
  InputGroup,
  Label,
  */
  PaymentSelector,
  PaymentMethods,
  PaymentButton,
  PaymentMethod,
  SectionHeader
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
    paymentMethod: null
    /*    firstName: '',
    lastName: '',
    email: '',
    */
  };

  render() {
    const { items, currency } = this.props;
    const { paymentMethod } = this.state;
    //                       ^firstName, lastName, email
    const personalDetails = {
      //    firstName,
      //   lastName,
      //    email,
    };

    return (
      <Inner>
        <Form noValidate>
          <Row>Ørn forlag </Row>
          {/*
          <Row>
            <InputGroup>
              <Label htmlFor="firstname"> Fornavn</Label>
              <Input
                name="firstname"
                type="text"
                placeholder="Ola"
                value={firstName}
                onChange={(e) => this.setState({ firstName: e.target.value })}
                required
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="lastname"> Etternavn</Label>
              <Input
                name="lastname"
                type="text"
                placeholder="Nordmann"
                value={lastName}
                onChange={(e) => this.setState({ lastName: e.target.value })}
                required
              />
            </InputGroup>
          </Row>
          <Row>
            <InputGroup>
              <Label htmlFor="email"> Epost</Label>
              <Input
                name="email"
                type="email"
                placeholder="din@epost.com"
                value={email}
                onChange={(e) => this.setState({ email: e.target.value })}
                required
              />
            </InputGroup>
          </Row>
          */}
          <SectionHeader>Choose payment method</SectionHeader>
          <PaymentMethods>
            <PaymentSelector>
              
              <PaymentButton
                color="#6773E6"
                type="button"
                active={paymentMethod === 'stripe'}
                onClick={() => this.setState({ paymentMethod: 'stripe' })}
              >
                <img src="/static/stripe-logo.png" alt="stripe logo" />
              </PaymentButton>
              
             
              <PaymentButton
                color="#FF5B24"
                type="button"
                active={paymentMethod === 'vipps'}
                onClick={() => this.setState({ paymentMethod: 'vipps' })}
              >
                <img
                  src="static/pay_with_vipps_rect_250_NO.png"
                  alt="Vipps logo"
                />
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
