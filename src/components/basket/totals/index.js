import React from 'react';

import { CurrencyValue } from 'components/currency-value';
import { useBasket } from '../context';

import { Outer, Row, StrikeThrough, Rows } from './styles';

export const Totals = () => {
  const { state } = useBasket();

  const {
    discount,
    totalPrice,
    totalPriceMinusDiscount,
    totalToPay,
    totalVatAmount,
    shipping,
    freeShipping,
  } = state;

  return (
    <Outer>
      <Rows>
        <Row modifier="total-price">
          <span>Pris:</span>
          <span>
            <CurrencyValue value={totalPrice} />
          </span>
        </Row>
        {discount && (
          <>
            <Row modifier="discount">
              <span>Rabbatt:</span>
              <span>
                <CurrencyValue value={discount} />
              </span>
            </Row>
            <Row modifier="total-after-discount">
              <span>SUM pris:</span>
              <span>
                <CurrencyValue value={totalPriceMinusDiscount} />
              </span>
            </Row>
          </>
        )}
        <Row modifier="shipping">
          <span>Porto:</span>
          {freeShipping ? (
            <span>
              {shipping && shipping.unit_price > 99 && (
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

        <Row modifier="total-vat">
          <span>MVA.:</span>
          <span>
            <CurrencyValue value={totalVatAmount} />
          </span>
        </Row>
        <Row modifier="to-pay">
          <span>
            <strong>SUM totalt</strong> å betale:
          </span>
          <span>
            <CurrencyValue value={totalToPay} />
          </span>
        </Row>
      </Rows>
    </Outer>
  );
};
