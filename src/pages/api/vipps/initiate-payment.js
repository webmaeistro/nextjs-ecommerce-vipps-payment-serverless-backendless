/* eslint-disable no-underscore-dangle */
import { orderNormalizer } from 'lib-api/payment-providers/vipps';
import { createCrystallizeOrder } from 'lib-api/crystallize/order';
import getHost from 'lib-api/util/get-host';
import { getClient } from 'lib-api/payment-providers/vipps';

// eslint-disable-next-line no-undef
const { VIPPS_MERCHANT_SERIAL, NGROK_URL } = config;

const orderToVippsCart = (lineItems) => {
  let totalCartAmount = 0;

  for (const item of lineItems) {
    totalCartAmount += item.net * item.quantity;
  }

  return {
    cart: lineItems,
    totalCartAmount: totalCartAmount
  };
};

const orderToVippsBody = (
  orderDetails,
  lineItems,
  personalDetails,
  crystallizeOrderId
) => {
  const { totalCartAmount } = orderToVippsCart(lineItems);
  const shippingCost = 0;
  return {
    merchantInfo: {
      merchantSerialNumber: VIPPS_MERCHANT_SERIAL,
      callbackPrefix: `${NGROK_URL}/api/order-persistence/vipps`,
      shippingDetailsPrefix: NGROK_URL,
      consentRemovalPrefix: NGROK_URL,
      paymentType: 'eComm Express Payment',
      fallBack: NGROK_URL,
      isApp: false
    },
    customerInfo: {
      mobileNumber: personalDetails.phone
    },
    transaction: {
      orderId: crystallizeOrderId,
      amount: totalCartAmount,
      transactionText: 'Ørn forlag | Bok kjøp utført fra ornforlag.no',
      staticShippingDetails: [
        {
          isDefault: 'Y',
          priority: 0,
          shippingCost: shippingCost,
          shippingMethod: 'Posten Servicepakke',
          shippingMethodId: 'posten-servicepakke'
        }
      ]
    }
  };
};

export default async (req, res) => {
  try {
    const { personalDetails, lineItems, currency } = req.body;
    // eslint-disable-next-line no-unused-vars
    const { metadata } = req.body;
    const host = getHost(req);

    const validCrystallizeOrder = orderNormalizer({
      vippsData: { lineItems, currency, personalDetails }
    });

    const createCrystallizeOrderResponse = await createCrystallizeOrder(
      validCrystallizeOrder
    );

    // eslint-disable-next-line no-unused-vars
    const vippsResponse = await getClient().initiatePayment({
      order: orderToVippsBody(
        req.body,
        lineItems,
        personalDetails,
        createCrystallizeOrderResponse.data.orders.create.id,
        host
      )
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      error: error.stack
    });
  }
};
