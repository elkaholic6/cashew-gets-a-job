import UnderConstruction from '../src/app/under-construction';
import NotFound from '../src/app/not-found';

import { storefront } from './index';


export default async function storeQuery(query) {
    let data;
    try {
        const response = await storefront(query);
        console.log("response", response);
        data = response.data;
        console.log("data", data);
  
        if (!data || !data.blogs) {
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

    return data;
}
