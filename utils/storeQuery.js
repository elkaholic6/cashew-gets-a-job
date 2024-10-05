import MiniNavBar from '../src/app/components/MiniNavBar';

import { storefront } from './index';


export default async function storeQuery(query) {
    let data;
    try {
        const response = await storefront(query);
        console.log("response", response);
        data = response.data;
        // console.log("data", data);
  
        if (!data || !data.blogs) {
            console.error("Data or data.products is undefined. Check your query and API response.");
            return (
                <div>
                    <MiniNavBar />
                    <p>Error loading products. Please try again later.</p>
                </div>
            );
        }
    } catch (error) {
        console.error("Error fetching products: ", error);
        return (
            <div>
                <MiniNavBar />
                <p>Error loading products. Please try again later.</p>
            </div>
        );
    }

    return data;
}
