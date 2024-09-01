
export async function storefront(query, variables = {}) {
    try{
        const response = await fetch(
            process.env.NEXT_PUBLIC_API_URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_STOREFRONT_ACCESS_TOKEN,
                },
                body: JSON.stringify({
                    query,
                    variables,
                }),
            }
        )

        return await response.json()
    } catch (error) {
        throw new Error("Products not fetched: ", error)
    }
}