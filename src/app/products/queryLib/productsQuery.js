const productsQuery = `
query Products {
    products(first: 16) {
      edges {
        node {
          title
          handle
          images(first: 1) {
            edges {
              node {
                transformedSrc
              }
            }
          }
        }
      }
    }
  }
`;

export default productsQuery