'use client';
import Link from 'next/link';
import Image from 'next/image';
import productsQuery from '../products/queryLib/productsQuery';
// import { useEffect } from 'react';
import { storefront } from '../../../utils';

export default function ProductList({ products }) {
  console.log('products', products)

      return (
        <div className="bg-gray-900">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.edges.map((item) => {
                const product = item.node
                const image = product.images.edges[0].node
                return (
                <Link key={product.handle} href={`/products/${product.handle}`} >
                    <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <Image
                        src={image.transformedSrc}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        alt={product.title}
                        width={500}
                        height={500}
                        />
                    </div>
                    <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="text-sm text-gray-400">
                                <span aria-hidden="true" className="absolute inset-0" />
                                {product.title}
                            </h3>
                        </div>
                    </div>
                    </div>
                </Link>
              )
            })}
            </div>
          </div>
        </div>
      )
  }