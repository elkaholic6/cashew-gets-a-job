import React, { useState, useEffect } from 'react'

export default function ProductOptions({ name, values, selectedOptions, setOptions, selectedCartOptions, quantity, setQuantity }) {
  // const [quantity, setQuantity] = useState(1);
// export default function ProductOptions({ name, selectedVariant, availableOptions }) {
  return (
    <div>
      {name === "Title" && ( 
        <div className="mb-6">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-200 mb-1">Quantity:</label>
            <input 
              type="number" 
              id="quantity" 
              name="quantity" 
              min="1" 
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-16 p-2 text-center rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
      )}
    </div>
  )
}