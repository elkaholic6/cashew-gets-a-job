import { useState, useEffect, useContext, useMemo } from "react"
import { formatter } from '../../../utils/helpers'
import ProductOptions from "./ProductOptions"
import { CartContext } from "../../../context/shopContext"
import SlideOverCart from "./SlideOverCart"
import axios from "axios"
import useSWR from 'swr'
import { Input } from "postcss"

export default function ProductForm({ product }) {

  const [available, setAvailable] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [itemInCart, setItemInCart] = useState(null);

  const { addToCart } = useContext(CartContext);

  async function handleAddToCart(selectedCartOptions, allVariantOptions) {
    console.log("Checking selectedCartOptions in handleAddToCart: ", selectedCartOptions);
    console.log("Checking allVariantOptions in handleAddToCart: ", allVariantOptions);
    const item = await addToCart(selectedCartOptions, allVariantOptions);
    console.log("Checking item in handleAddToCart: ", item);
    // setItemInCart(item);
    setIsCartOpen(true);
  }

  const createCartOptions = product.variants.edges?.map(item => {

      return {
        "cartInput": {
            "lines": [
              {
                "quantity": parseInt(quantity),
                "merchandiseId": item.node.id
              }
            ]
          }
      }
  });
    console.log("product: ", product);
    const currentImage = product.variants.edges.map(item => item.node.image?.transformedSrc);
    const currentMerchandiseId = product.variants.edges.map(item => item.node.id);

    const allVariantOptions = {
        //   return {
            productId: product.id,
            title: product.title,
            // handle: product.handle,
            image: currentImage, //@audit may need to map the edges...
            // options: allOptions,
            // variantTitle: variant.node.title,
            price: product.priceRange.minVariantPrice.amount,
            variantQuantity: parseInt(quantity),
            merchandiseId: currentMerchandiseId
        //   }
    };

  const defaultValues = {}
  product.options.map(item => {
    defaultValues[item.name] = item.values[0]
  })

  const [selectedCartOptions, setSelectedCartOptions] = useState(createCartOptions.length > 0 ? allVariantOptions[0] : null)
  const [selectedOptions, setSelectedOptions] = useState(defaultValues)

useEffect(() => {
    setSelectedCartOptions(createCartOptions[0]);
  }, [quantity]);

  function setOptions(name, value) { //@audit come back to this bc setSelectedVariant probably sets to the wrong thing
    console.log("Are we setting options??????");
    setSelectedOptions(prevState => {
      return { ...prevState, [name]: value }
    })

    const selection = {
      ...selectedOptions,
      [name]: value
    }
    allVariantOptions.map(item => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item)
      }
    })
  }

  return (
    // <div className="flex flex-col w-full p-4 shadow-lg rounded-2xl md:w-1/3">
    <div>
      <h2 className="text-3xl font-bold mb-2 text-gray-100">{product.title}</h2>
      <div className="mb-4">
        <span className="text-2xl font-bold mr-2 text-gray-400">{formatter.format(product.variants.edges[0].node.price.amount)}</span>
      </div>
      {
        product.options.map(({ values, name, id }) => (
          <ProductOptions
            key={`key-${id}`}
            name={name}
            values={values}
            selectedOptions={selectedOptions}
            setOptions={setOptions}
            selectedCartOptions={selectedCartOptions}
            // productInventory={productInventory}
            available={available}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        ))
      }
      {available ?
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => {
              handleAddToCart(selectedCartOptions, allVariantOptions);
            }}
            className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            Add to Cart
          </button> 
            <button
                className="bg-gray-200 flex gap-2 items-center  text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    Wishlist
            </button>
            {isCartOpen && (
            <SlideOverCart 
                // subtotal={formatter.format(itemInCart.cost.subtotalAmount.amount)} 
                // totalAmount={formatter.format(itemInCart.cost.totalAmount.amount)} 
                // quantity={quantity} 
                // title={product.title} 
                // image={product.variants.edges[0].node.image.transformedSrc} 
                // price={formatter.format(product.variants.edges[0].node.price.amount)}
                isOpen={isCartOpen} 
                closeCart={() => setIsCartOpen(false)} />
            )}
        </div>
          :
          <button
            className="px-2 py-3 mt-3 text-white bg-gray-500 rounded-lg cursor-not-allowed">
              Sold out!
          </button>
      }

    </div>
  )
}