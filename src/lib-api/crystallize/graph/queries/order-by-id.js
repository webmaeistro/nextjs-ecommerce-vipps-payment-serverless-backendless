export default `
  query getOrder($id: ID!){
    orders {
      get(id: $id) {
        id
        total {
          net
          gross
          currency
        }
        payment {
          ... on VippsPayment {
            paymentMethod
          }
        }
        cart {
          sku
          name
          quantity
          price {
            net
            gross
            currency
          }
          imageUrl
        }
        customer {
          firstName
          lastName
          addresses {
            type
            email
          }
        }
      }
    }
  }
`;
