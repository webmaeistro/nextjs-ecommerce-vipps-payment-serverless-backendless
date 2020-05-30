import React from 'react';

import { CurrencyValue } from 'components/currency-value';
import { useBasket } from '../context';
import { Totals } from '../totals';

import TinyBasketItem from './item';

import {
  Outer,
  Items,
  ItemOuter,
  BasketIsEmpty,
  RemainingUntilFreeShipping,
} from './styles';

export const TinyBasket = ({
  hideTotals = false,
  hideRemainingUntilFreeShipping = false,
  itemImageSizes,
}) => {
  const { state, actions } = useBasket();

  if (!state || !state.ready) {
    return null;
  }

  const { items, freeShipping, remainingUntilFreeShippingApplies } = state;

  if (!items.length) {
    return (
      <Outer>
        <BasketIsEmpty>
          Din handlekruv er uten bøker gitt.. kjøp en bok davel?{' '}
        </BasketIsEmpty>
      </Outer>
    );
  }

  return (
    <Outer>
      <Items>
        {items.map((item) => (
          <ItemOuter key={item.basketId} item={item}>
            <TinyBasketItem
              actions={actions}
              item={item}
              itemImageSizes={itemImageSizes}
            />
          </ItemOuter>
        ))}
      </Items>
      <div>
        {!hideTotals && <Totals />}

        {!hideRemainingUntilFreeShipping &&
          !freeShipping &&
          remainingUntilFreeShippingApplies > 0 && (
            <RemainingUntilFreeShipping>
              Legg til bøker verdi av{' '}
              <CurrencyValue value={remainingUntilFreeShippingApplies} /> to til
              din ordre for å kvalifisere til gratis frakt.
            </RemainingUntilFreeShipping>
          )}
      </div>
    </Outer>
  );
};
