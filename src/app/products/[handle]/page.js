import ProductPageContent from "../../components/ProductPageContent"
import { storefront } from "../../../../utils/index"
import singleProductQuery from "../queryLib/singleProductQuery"
import NavBar from "../../components/NavBar"
import { getAllProducts, getProduct, recursiveCatalog } from "../../../../lib/shopify"


export default async function ProductPage({ params }) {
    let data;
    console.log("params", params);

    try {
        const response = await storefront(singleProductQuery, { handle: params.handle });
        console.log("response", response);
        data = response.data.productByHandle;
        console.log("data", data);
        if (!data) {
            console.error("Data or data.handle not found");
            return <div>
                <p>Product not found</p>
            </div>
    }
    // const product = await getProduct(params.handle)

    // console.log("product", product);
    // return (
    //     <div className="min-h-screen py-12 sm:pt-20">
    //     <ProductPageContent product={product} />
    //     </div>
    // )
    } catch (error) {
        console.error("Error fetching products: ", error);
        return (
            <div>
                <p>Error loading products. Please try again later.</p>
            </div>
        );
    }
    console.log("data", data);

    return (
        <div>
            <NavBar />
            <div className="min-h-screen py-12 sm:pt-28">
                <ProductPageContent product={data} />
            </div>
        </div>
    )
}