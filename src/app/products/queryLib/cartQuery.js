import { storefront } from "../../../../utils/index";

async function cartQuery(params) {
  const cartQuery = `
query cartQuery($cartId: ID!) {
  cart(id: $cartId) {
    id
    createdAt
    updatedAt
    checkoutUrl
    lines(first: 10) {
      edges {
        node {
          id
          quantity
          merchandise {
            ... on ProductVariant {
              id
              product {
                id
              }
            }
          }
          attributes {
            key
            value
          }
        }
      }
    }
    attributes {
      key
      value
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
}
  `;
  const response = await storefront(cartQuery, { cartId: params });
console.log("response", response);
  const cart = response.data.cart
    ? response.data.cart
    : [];

  return cart;
}
export { cartQuery };

async function titleQuery(params) {
    const titleQuery = `
  query cartQuery($productId: ID!) {
    product(id: $productId) {
        title
        images(first: 1) {
          edges {
            node {
              url(transform: { preferredContentType: PNG })
            }
          }
        }
        priceRange {
            minVariantPrice {
                amount
            }
        }
    }
  }
    `;
    const response = await storefront(titleQuery, { productId: params });
  console.log("response", response);
    const product = response.data.product
      ? response.data.product
      : [];
  
    return product;
  }
  export { titleQuery };