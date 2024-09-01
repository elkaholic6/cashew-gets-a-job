import { storefront } from "../../../../utils/index";

async function addCartLines(checkoutId, newCart) {
  const addCartLinesQuery = `
mutation addCartLines($cartId: ID!, $lines: [CartLineInput!]!) {
  cartLinesAdd(cartId: $cartId, lines: $lines) {
    cart {
      id
      lines(first: 100){
        edges
        {
          node{
            quantity
            merchandise{
              ... on ProductVariant {
                id
              }
            }
          }
        }
      }
      cost {
        totalAmount {
          amount
          currencyCode
        }
        subtotalAmount {
          amount
          currencyCode
        }
        totalTaxAmount {
          amount
          currencyCode
        }
        totalDutyAmount {
          amount
          currencyCode
        }
      }
    }
    
    
    userErrors {
      field
      message
    }
  }
}
  `;
  console.log('newCart', newCart);
  console.log('checkoutId', checkoutId);
  const response = await storefront(addCartLinesQuery, { cartId: checkoutId, lines: newCart });
console.log("response", response);
  const cart = response.data.cartLinesAdd.cart
    ? response.data.cartLinesAdd.cart
    : [];

  return cart;
}
export { addCartLines };