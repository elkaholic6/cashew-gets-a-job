import React, { useState, useEffect } from 'react';
import IndividualCartItem from './IndividualCartItem';
import { formatter } from '../../../utils/helpers'
import { cartQuery, titleQuery } from '../products/queryLib/cartQuery';

function SlideOverCart({ subtotal, totalAmount, quantity, title, image, price, isOpen, closeCart }) {
    const [cartItems, setCartItems] = useState([]);
    const [retrievedSubtotal, setRetrievedSubtotal] = useState(0);

    // Fetch cart items from localStorage when the component mounts
    useEffect(() => {
        const fetchCartData = async (checkoutId) => {
            try {
                const cartData = await cartQuery(checkoutId);
                return cartData; // Return the resolved data
            } catch (error) {
                console.error("Error fetching cart data:", error);
                return null; // Handle errors and return null or empty data
            }
        };

        const fetchTitleData = async (id) => {
            try {
                const titleData = await titleQuery(id);
                return titleData; // Return the resolved data
            } catch (error) {
                console.error("Error fetching title data:", error);
                return null; // Handle errors and return null or empty data
            }
        }

        const loadCart = async () => {
            const storedCart = localStorage.getItem('checkout_id');
            let cartArray = [];
            if (storedCart) {
                const [retrievedItem, retrievedCheckout] = JSON.parse(storedCart);
                console.log("retrievedItem", retrievedItem);
                console.log("retrievedCheckout", retrievedCheckout);
                
                const retrievedCart = await fetchCartData(retrievedCheckout.id); // Await the async call
                console.log("retrievedCart", retrievedCart);

                let cartSize = retrievedCart.lines.edges.length;

                for(let i = 0; i < cartSize; i++) {
                    let singleItemArray = [];
                    const retrievedTitle = await fetchTitleData(retrievedCart.lines.edges[i].node.merchandise.product.id);
                    console.log("retrievedTitle", retrievedTitle);
                    //1. image 2. title 3. price 4. quantity
                    singleItemArray.push(retrievedTitle.images.edges[0].node.url);
                    singleItemArray.push(retrievedTitle.title);
                    singleItemArray.push(retrievedTitle.priceRange.minVariantPrice.amount);
                    singleItemArray.push(retrievedCart.lines.edges[i].node.quantity);
                    cartArray.push(singleItemArray);
                }

                // console.log('singleItemArray', singleItemArray);
                // const retrievedTitle = await fetchTitleData(retrievedCart.lines.edges[0].node.merchandise.product.id);
                // console.log("retrievedTitle", retrievedTitle);
                // //1. image 2. title 3. price 4. quantity
                // singleItemArray.push(retrievedTitle.images.edges[0].node.url);
                // singleItemArray.push(retrievedTitle.title);
                // singleItemArray.push(retrievedCart.cost.subtotalAmount.amount);
                // singleItemArray.push(retrievedCart.lines.edges[0].node.quantity);

                console.log("cartArray", cartArray);
                // Assuming `retrievedCart` has a `lines` property for cart items
                if(cartItems.length === 0) {
                    setCartItems(cartArray || []);
                    // setCartItems(retrievedCheckout.lines.edges || []);
                } else {
                    setCartItems(prevCartItems => [...prevCartItems, cartArray]);
                    // setCartItems(prevCartItems => [...prevCartItems, retrievedCheckout.lines.edges]);
                }
                setRetrievedSubtotal(retrievedCheckout.cost.subtotalAmount.amount || 0);
            }
        };
        if(isOpen) {
            loadCart();
        }
    }, [isOpen]);

    useEffect(() => {
        console.log("cartItems", cartItems);
    }, [cartItems]);

  return (
    isOpen &&
    <div className="relative z-50" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            {/* Background backdrop, show/hide based on slide-over state.

            Entering: "ease-in-out duration-500"
            From: "opacity-0"
            To: "opacity-100"
            Leaving: "ease-in-out duration-500"
            From: "opacity-100"
            To: "opacity-0" */}
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                {/* <!--
                Slide-over panel, show/hide based on slide-over state.

                Entering: "transform transition ease-in-out duration-500 sm:duration-700"
                    From: "translate-x-full"
                    To: "translate-x-0"
                Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
                    From: "translate-x-0"
                    To: "translate-x-full"
                --> */}
                <div className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                        <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                        <div className="ml-3 flex h-7 items-center">
                        <button 
                            type="button" 
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={closeCart}>
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Close panel</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        </div>
                    </div>
                    {/* <-- Items --> */}
                    <div className="mt-8">
                        <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {cartItems ? (
                                <>
                                {cartItems.map((item, index) => (
                                    <IndividualCartItem
                                        key={index}
                                        image={item[0]}
                                        title={item[1]}
                                        price={formatter.format(item[2])}
                                        quantity={item[3]}
                                    />
                                ))}
                            </>
                            ) : (
                                <p className="text-center">Your cart is empty</p>    
                            )}
                            {/* <!-- More products... --> */}
                        </ul>
                        </div>
                    </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{formatter.format(retrievedSubtotal)}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                        <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                        or
                        <button 
                            type="button" 
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={closeCart}>
                             Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                        </button>
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SlideOverCart