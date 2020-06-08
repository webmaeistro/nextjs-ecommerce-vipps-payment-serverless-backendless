import { createCrystallizeOrder } from 'lib-api/crystallize/order';

export default async (req, res) => {
  let totalGrossCartAmount = 0;
  let totalNetCartAmount = 0;

  const {
    customer: {
      email: customerIdentifier,
      address: customerAddress,
      ...customer
    },
    items,
    currency,
  } = req.body;

  const orderItemsArray = items
    .map((lineItem) => ({
      ...lineItem,
      gross: lineItem.price * lineItem.quantity,
      net: lineItem.price * lineItem.quantity,
    }))
    .map((lineItem) => {
      totalGrossCartAmount += lineItem.gross;
      totalNetCartAmount += lineItem.net;

      return {
        name: lineItem.name,
        sku: lineItem.sku,
        quantity: lineItem.quantity,
        productId: lineItem.productId,
        productVariantId: lineItem.productVariantId,
        imageUrl: lineItem.image.url,
        price: {
          gross: lineItem.gross,
          net: lineItem.net,
          currency,
        },
      };
    });

  try {
    const { data } = await createCrystallizeOrder({
      customer: {
        ...customer,
        identifier: customerIdentifier,
        addresses: [{ type: 'delivery', street: customerAddress }],
      },
      cart: orderItemsArray,

      total: {
        gross: totalGrossCartAmount,
        net: totalNetCartAmount,
        currency: currency,
      },
    });

    res.json({
      success: true,
      orderId: data.orders.create.id,
    });
  } catch (error) {
    res.json({
      success: false,
      error,
    });
  }
};
