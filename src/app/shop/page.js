import ProductList from '../components/ProductList';
import NavBar from '../components/NavBar';
import { storefront } from '../../../utils/index';
import productsQuery from '../products/queryLib/productsQuery';

import UnderConstruction from '../under-construction';
import NotFound from '../not-found';



export default async function Shop() {
  let data;

  try {
      const response = await storefront(productsQuery);
      data = response.data;

      if (!data || !data.products) {
          console.error("Data or data.products is undefined. Check your query and API response.");
          return (
              <div>
                  <UnderConstruction />
              </div>
          );
      }
  } catch (error) {
      console.error("Error fetching products: ", error);
      return (
          <div>
              <NotFound />
          </div>
      );
  }
    return (
        <div>
            <NavBar />
            <ProductList products={data.products}/>
        </div>
    )
}