import React, { useState } from 'react';
import styled from 'styled-components';

import { Button } from 'ui';
import { createCrystallizeReservationOrder } from 'lib/rest-api';
import { useBasket } from 'components/basket';

import { Input, InputGroup, Label } from './styles';

const Row = styled.div`
  display: flex;
`;

const Form = styled.form``;

const Textarea = styled(Input).attrs(() => ({
  as: 'textarea',
}))``;

export default function ReserveGateway({ items, currency }) {
  const [status, setStatus] = useState('idle');
  const basket = useBasket();

  async function onSubmit(e) {
    e.preventDefault();

    const values = new FormData(e.target);

    setStatus('posting');

    try {
      const { success, orderId } = await createCrystallizeReservationOrder({
        body: JSON.stringify({
          customer: {
            firstName: values.get('firstName'),
            lastName: values.get('lastName'),
            email: values.get('email'),
            address: values.get('address'),
          },
          items,
          currency,
        }),
      });

      if (success && orderId) {
        basket.actions.empty();

        window.location = '/confirmation/reservation?orderId=' + orderId;
      } else {
        setStatus('error');
      }
    } catch (e) {
      setStatus('error');
      console.log(e);
    }
  }

  return (
    <Form
      onSubmit={onSubmit}
      action=""
      method="post"
      disabled={status === 'posting'}
    >
      <Row>
        <InputGroup>
          <Label htmlFor="firstName">Fornavn</Label>
          <Input name="firstName" type="text" placeholder="Ola" required />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="lastName">Etternavn</Label>
          <Input name="lastName" type="text" placeholder="Nordmann" required />
        </InputGroup>
      </Row>
      <Row>
        <InputGroup>
          <Label htmlFor="email">Epost</Label>
          <Input
            name="email"
            type="email"
            placeholder="din@epost.com"
            required
          />
        </InputGroup>
      </Row>
      <Row>
        <InputGroup>
          <Label htmlFor="address">Adresse</Label>
          <Textarea
            name="address"
            placeholder="Eksempelgata 1, 1234 Eksempelby"
            required
          />
        </InputGroup>
      </Row>

      <Button type="submit" state={status === 'posting' ? 'loading' : null}>
        Bestill
      </Button>

      {status === 'error' && (
        <div>Oisann, en feil oppstod. Vennligst prøv igjen</div>
      )}
    </Form>
  );
}
