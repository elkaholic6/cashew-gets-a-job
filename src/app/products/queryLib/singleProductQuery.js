    const singleProductQuery = `
    query SingleProduct($handle: String!) {
  productByHandle(handle: $handle) {
    id
    title
    description
    descriptionHtml
    priceRange {
      minVariantPrice {
        amount
      }
    }
    options {
      name
      values
      id
    }
    variants(first: 1) {
      edges {
        node {
          id
          image {
            transformedSrc
            id
          }
          price {
            amount
          }
          product {
            title
          }
          selectedOptions {
            name
            value
          }
        }
      }
    }
  }
}`;

  export default singleProductQuery