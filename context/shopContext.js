"use client"

import { createContext, useState, useEffect } from 'react'
import { updateCheckout } from '../lib/shopify'
import { createCart } from '../src/app/products/queryLib/createCartQuery'
import { addCartLines } from '../src/app/products/queryLib/addCartLinesQuery'

const CartContext = createContext()

export default function ShopProvider({ children }) {
  const [cart, setCart] = useState([])
  const [cartLines, setCartLines] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [checkoutId, setCheckoutId] = useState('')
  const [checkoutUrl, setCheckoutUrl] = useState('')
  const [cartLoading, setCartLoading] = useState(false)
  // const [cartProducts, setCartProducts] = useState([])

  useEffect(() => {
    console.log("Cart in the use Effect: ", cart)
    if (localStorage.checkout_id) {
      console.log("Cart found in local storage");
      const cartObject = JSON.parse(localStorage.checkout_id);
      console.log("Cart object: ", cartObject);
      const storedCart = localStorage.getItem("checkout_id");

      if (cartObject[0].length === 0) {
        setCart([cartObject]);
      } else if (cartObject[0].length > 0) {
        setCart(...[cartObject])
      }
      if(storedCart) {
        const [storedCartItems, storedCheckout] = JSON.parse(storedCart);
        // console.log("Stored cart items: ", storedCartItems);
        // console.log("Stored checkout: ", storedCheckout);
        // console.log("Stored cart: ", storedCart)
        // // console.log("Cart object: ", cartObject)
        setCartLines([storedCartItems])
        // setCartProducts(products)
        setCheckoutId(storedCheckout.id)
        setCheckoutUrl(storedCheckout.checkoutUrl)
      }
    }

  }, [])


  async function addToCart(addedItem, allVariantOptions) {
    console.log("current cart: ", cart);
    const newItem = {...addedItem}

    console.log("Added item: ", addedItem)
    console.log("New item: ", newItem);

    console.log("Cart lines: ", cartLines)

    setCartOpen(true)

    if (cart.length === 0) {
      // setCart([allVariantOptions])

      const checkout = await createCart(addedItem)

      console.log("Checkout: ", checkout)

      setCheckoutId(checkout.id)
      setCheckoutUrl(checkout.checkoutUrl)

      localStorage.setItem("checkout_id", JSON.stringify([newItem.cartInput.lines, checkout]));
      const cartObject = JSON.parse(localStorage.checkout_id);
      setCart([cartObject]);
      console.log("settingCartLines: ", newItem.cartInput.lines);
      setCartLines([newItem.cartInput.lines])
      console.log("they should be set");
      return checkout;
    } else {
      let newCart = []
      let newCartLines = []
      let changedQuantity = false

      console.log("Cart: ", cart)

      cartLines.map(item => {
        if (Array.isArray(item)) {
          console.log("Item is an array", item[0]);
          if (item[0].merchandiseId === newItem.cartInput.lines[0].merchandiseId) {
            console.log("Item currently exists in cart so just update quantity")
            item[0].quantity = newItem.cartInput.lines[0].quantity
            setCartLines(...cartLines);
            newCartLines = [...cartLines];
            // newCart = [...cart]
            changedQuantity = true
          }
        }
      })

      cart.map(item => {
        if (Array.isArray(item)) {
          console.log("Item is an array", item[0]);
          if (item[0].merchandiseId === newItem.cartInput.lines[0].merchandiseId) {
            console.log("Item currently exists in cart so just update quantity")
            item[0].quantity = newItem.cartInput.lines[0].quantity
            // setCartLines(...cartLines, [newItem.cartInput.lines])
            newCart = [...cart]
            changedQuantity = true
          }
        }
      })

      // localStorage.setItem("checkout_id", JSON.stringify([newItem.cartInput.lines, checkout]));
      // const cartObject = JSON.parse(localStorage.checkout_id);
console.log('Cart lines before: ', newCartLines)
      if (!changedQuantity) {
        console.log("Item does not exist in cart so add it to new cart lines");
        setCartLines(prevCartLines => [...prevCartLines, newItem.cartInput.lines]);
        newCartLines = [...cartLines, newItem.cartInput.lines];
        // newCart = [...cart, [cartObject]]
      }
console.log('Cart lines after: ', newCartLines)
      console.log("New cart: ", newCart)

      // setCart(newCart)
      const newCheckout = await addCartLines(checkoutId, newItem.cartInput.lines);
      console.log('New checkout: ', newCheckout)

      localStorage.setItem("checkout_id", JSON.stringify([newItem.cartInput.lines, newCheckout]));
      const cartObject = JSON.parse(localStorage.checkout_id);

      if (!changedQuantity) {
        console.log("Item does not exist in cart so add it to new cart");
        // setCartLines([...cartLines, [newItem.cartInput.lines]])
        newCart = [...[cart], cartObject]
      }

      console.log("New cart: ", newCart)

      setCart(newCart)
      // localStorage.setItem("checkout_id", JSON.stringify([newCart, newCheckout]))
      return newCheckout;
    }
  }

  async function removeCartItem(itemToRemove) {
    const updatedCart = cart.filter(item => item.id !== itemToRemove)
    setCartLoading(true)

    setCart(updatedCart)

    const newCheckout = await updateCheckout(checkoutId, updatedCart)

    localStorage.setItem("checkout_id", JSON.stringify([updatedCart, newCheckout]))
    setCartLoading(false)

    if (cart.length === 1) {
      setCartOpen(false)
    }
  }

  async function incrementCartItem(item) {
    setCartLoading(true)

    let newCart = []

    cart.map(cartItem => {
      if (cartItem.id === item.id) {
        cartItem.variantQuantity++
        newCart = [...cart]
      }
    })
    setCart(newCart)
    const newCheckout = await updateCheckout(checkoutId, newCart)

    localStorage.setItem("checkout_id", JSON.stringify([newCart, newCheckout]))
    setCartLoading(false)
  }

  async function decrementCartItem(item) {
    setCartLoading(true)

    if (item.variantQuantity === 1) {
      removeCartItem(item.id)
    } else {
      let newCart = []
      cart.map(cartItem => {
        if (cartItem.id === item.id) {
          cartItem.variantQuantity--
          newCart = [...cart]
        }
      })

      setCart(newCart)
      const newCheckout = await updateCheckout(checkoutId, newCart)

      localStorage.setItem("checkout_id", JSON.stringify([newCart, newCheckout]))
    }
    setCartLoading(false)
  }

  async function clearCart() {
    const updatedCart = []

    setCart(updatedCart)

    const newCheckout = await updateCheckout(checkoutId, updatedCart)

    localStorage.setItem("checkout_id", JSON.stringify([updatedCart, newCheckout]))

  }


  return (
    <CartContext.Provider value={{
      cart,
      cartOpen,
      setCartOpen,
      addToCart,
      checkoutUrl,
      removeCartItem,
      clearCart,
      cartLoading,
      // cartProducts,
      incrementCartItem,
      decrementCartItem
    }}>
      {children}
    </CartContext.Provider>
  )
}

const ShopConsumer = CartContext.Consumer

export { ShopConsumer, CartContext }