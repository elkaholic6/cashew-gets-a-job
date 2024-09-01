import { storefront } from "../../../../utils/index";

async function createCart(params, product) {
  const createCartQuery = `
        mutation createCart($cartInput: CartInput) {
    cartCreate(input: $cartInput) {
      cart {
        id
        createdAt
        updatedAt
        checkoutUrl
        lines(first: 10) {
          edges {
            node {
              id
              merchandise {
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
          }
        }
      }
    }
  }
  `;
  console.log('params', params);
  console.log("cartInput", params.cartInput);

  const response = await storefront(createCartQuery, { cartInput: params.cartInput });
console.log("response", response);
  const checkout = response.data.cartCreate.cart
    ? response.data.cartCreate.cart
    : [];
    console.log("checkout", checkout);
    console.log("checkout.lines.edges", checkout.lines.edges);
    checkout.lines.edges.push(product);
// console.log("checkoutWithProduct", checkoutWithProduct);
console.log("checkout after: ", checkout);
  return checkout;
}
export { createCart };